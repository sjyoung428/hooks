import { useState } from "react";
import Text from "~/components/Text";
import TextInput from "~/components/TextInput";
import Title from "~/components/Title";
import { useDebounce } from "~/hooks/useDebounce";

const DebounceExamplePage = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce({
    value: text,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <Title>Debounce Example</Title>
      <TextInput type="text" onChange={onChange} />
      <p>Normal</p>
      <Text>{text}</Text>
      <p>Debounce</p>
      <Text>{debouncedText}</Text>
    </div>
  );
};

export default DebounceExamplePage;
