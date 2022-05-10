import { CircularProgress } from "@mui/material";
import { useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
//import {API_URL_PUBLIC} from '../constants/gists';
import {
    selectGists, 
    selectGistsError, 
    selectGistsLoading
} from "../store/gists/selectors";
import { getAllGists} from '../store/gists/actions';

const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const loading = useSelector(selectGistsLoading);
    const error = useSelector(selectGistsError);


    const requestGists = async() => {
        dispatch(getAllGists());
    };


    useEffect(() => {
        requestGists();
    }, []);
    

    const renderGist = useCallback(
        (gist)=> <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    );

    if (loading){
        return <CircularProgress />;
    };
    
    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    }

    return  <ul>{gists.map(renderGist)}</ul>
};

export default Gists;