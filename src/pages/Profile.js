import { useCallback, useState} from 'react';
import { changeVisible, updateName } from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';

const Profile = () => {

    const {showName, name} = useSelector((state) =>  state.profile);
    const dispatch = useDispatch();
   
    const [value, setValue] = useState(name);
    

const setShowName = useCallback(()=>{
    dispatch(changeVisible);
}, [dispatch]);

const handleInput = (e) => {
    setValue(e.target.value);
};

const saveName = () => {
    dispatch(updateName(value));
};

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={setShowName}>Show Name</button>
            <blockquote style={{height: '40px'}}>{showName && <h3>Текущее имя: {name}</h3>}</blockquote>
            <TextField
                name="name"
                label="name"
                placeholder={'Введите ваше имя'}
                value={value}
                onChange={handleInput} />
            <Button onClick={saveName}>Сохранить</Button>
        </div>
    );
};

export default Profile;
