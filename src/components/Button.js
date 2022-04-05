
const Button = (props) => {
    const {handler} = props;
    return (
    <div>
        <button className='counter-button' onClick={handler}>Click!</button>
    </div>
    )
}
    
    export default Button