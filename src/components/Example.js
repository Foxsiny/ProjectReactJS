

const Example = (props) => {
    return (<span>
        {props.message}, {props.name}
        </span>
    );
};

const withLoggerHOC = function(Component){
    return (props) => {
        console.log(props);
        const extProps = {...props, name: 'V'}
        return<Component {...extProps} />
    };
};

export default withLoggerHOC(Example);