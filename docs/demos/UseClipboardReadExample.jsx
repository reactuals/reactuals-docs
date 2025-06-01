import React, { useState } from "react";
import { useClipboardRead } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseClipboardReadExample() {
  const { readText, error } = useClipboardRead();
  const [clipboardText, setClipboardText] = useState(null);

  const handleRead = async () => {
    const text = await readText();
    if (text) {
      setClipboardText(text);
    }
  };

  return (
    <DemoWrapper>
      <button onClick={handleRead} disabled={!!error} className="btn">
        Read Clipboard
      </button>
      {clipboardText && (
        <p className="text-base text-gray-800">
          Clipboard Content: <strong>{clipboardText}</strong>
        </p>
      )}
      {error && (
        <p className="text-base text-red-500">Error: {error.message}</p>
      )}
      <p className="text-sm text-gray-500">
        Note: Copy some text to your clipboard, then click the button to read
        it. Requires a secure context (HTTPS) and browser permission.
      </p>
    </DemoWrapper>
  );
}
