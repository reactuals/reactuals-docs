import { useState } from "react";
import { useTimeout } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseTimeoutExample() {
  const [message, setMessage] = useState("");

  useTimeout(() => {
    setMessage("Action completed!");
  }, 2000);

  return (
    <DemoWrapper>
      <h1>
        <p className="text-lg text-center">
          This message will appear after 2 seconds.
        </p>
        {message && <p className="text-green-500 text-center">{message}</p>}
      </h1>
    </DemoWrapper>
  );
}
