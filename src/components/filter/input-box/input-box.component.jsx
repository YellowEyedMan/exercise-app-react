import { useRef, useState } from "react";
import "./input-box.styles.scss";

const InputBox = () => {
  const [text, setText] = useState(null);

  function getText(e) {
    setText(e.target.value);
    console.log(text);
  }
  return (
    <div>
      <h1>{text}</h1>
      <input type="text" onChange={getText} />
      <input type={"checkbox"} onChange={getText} value="lol"></input>
    </div>
  );
};

export default InputBox;
