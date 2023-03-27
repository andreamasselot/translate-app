const TextToTranslate = (props) => {
  const handleTextChange = (event) => {
    const value = event.target.value;
    props.setOriginalText(value);
  };
  return (
    <>
      <textarea
        name="text-to-translate"
        id="text-to-translate"
        cols="60"
        rows="10"
        value={props.originalText}
        onChange={handleTextChange}
      >
        {props.originalText}
      </textarea>
    </>
  );
};
export default TextToTranslate;
