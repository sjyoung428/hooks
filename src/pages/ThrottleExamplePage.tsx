import { lazy, useState } from "react";
import Text from "~/components/Text";
import TextInput from "~/components/TextInput";
import Title from "~/components/Title";
import { useThrottle } from "~/hooks/useThrottle";

const ThrottleExamplePage = () => {
  const [text, setText] = useState("");
  const throttleText = useThrottle({
    value: text,
    delay: 2000,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <Title>Throttle Example</Title>
      <TextInput type="text" onChange={onChange} />
      <p>Normal</p>
      <Text>{text}</Text>
      <p>Debounce</p>
      <Text>{throttleText}</Text>
    </div>
  );
};

export default ThrottleExamplePage;

ThrottleExamplePage.lazy = lazy(() => import("./ThrottleExamplePage"));
