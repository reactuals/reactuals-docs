import React, { useState } from "react";
import { useWebSocket } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseWebSocketExample() {
  const { data, error, sendMessage } = useWebSocket("wss://echo.websocket.org");
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(null);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setStatus("Message sent!");
      setInput("");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <DemoWrapper>
      <div className="p-6 max-w-xl mx-auto  dark:bg-gray-800 rounded-lg  text-gray-900 dark:text-gray-100">
        <h3 className="text-xl font-semibold mb-4">WebSocket Demo</h3>
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              className="flex-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
          {data && (
            <p className="text-lg">
              Received: <span className="font-bold">{data}</span>
            </p>
          )}
          {status && <p className="text-lg text-green-500">{status}</p>}
          {error && <p className="text-lg text-red-500">Error occurred</p>}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Type a message and send it to see the WebSocket echo response. Uses
            a public echo server.
          </p>
        </div>
      </div>
    </DemoWrapper>
  );
}
