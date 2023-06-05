import { useState } from "react";
import Text from "~/components/Text";
import Title from "~/components/Title";
import { useNetwork } from "~/hooks/useNetwork";

const NetworkExamplePage = () => {
  const [text, setText] = useState("");

  const isOnline = useNetwork({
    onOnline: () => {
      setText("Online");
    },
    onOffline: () => {
      setText("Offline");
    },
  });

  return (
    <div className="flex flex-col gap-1">
      <Title>Network Example</Title>
      <Text>{text}</Text>
      <Text>{isOnline ? "Online" : "Offline"}</Text>
    </div>
  );
};

export default NetworkExamplePage;
