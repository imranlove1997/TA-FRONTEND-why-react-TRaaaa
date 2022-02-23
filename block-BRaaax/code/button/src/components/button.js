function onClickHandle() {
    alert('You Clicked Me');
}

function Button() {
    return (
        <>
        <button onClick={onClickHandle} disabled="true">Click Me</button>
        <button onClick={onClickHandle}>Click Me</button>
        </>
        )
}

export default Button;