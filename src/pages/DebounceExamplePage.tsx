import { useState } from "react";
import { useDebounce } from "~/hooks/useDebounce";

const DebounceExamplePage = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce({
    value: text,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
    console.log("normal", text);
  };

  const onDebounce = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
    console.log("debounce", debouncedText);
  };

  return (
    <div>
      <h1>Debounce Example</h1>
      <p>Normal</p>
      <input className="border" type="text" onChange={onChange} />
      <br />
      <p>Debounce</p>
      <input className="border" type="text" onChange={onDebounce} />
    </div>
  );
};

export default DebounceExamplePage;
