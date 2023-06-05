import { useState } from "react";
import Text from "~/components/Text";
import Title from "~/components/Title";
import { useNetwork } from "~/hooks/useNetwork";

const NetworkExamplePage = () => {
  const [text, setText] = useState("");

  useNetwork({
    onOnline: () => {
      setText("Online");
      console.log("Online");
    },
    onOffline: () => {
      setText("Offline");
      console.log("Offline");
    },
  });

  return (
    <div className="flex flex-col gap-1">
      <Title>Network Example</Title>
      <Text>{text}</Text>
    </div>
  );
};

export default NetworkExamplePage;
