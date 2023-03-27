const Text = (props) => {
    return (
        <>
            <textarea name="translated-text" id="translated-text" cols="30" rows="10">{props.text}</textarea>
        </>
    )
};
export default Text;