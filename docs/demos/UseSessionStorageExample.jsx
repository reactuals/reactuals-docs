import React from "react";
import { useSessionStorage } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseSessionStorageExample = () => {
  const [settings, setSettings] = useSessionStorage("user-settings", {
    name: "",
    theme: "light",
  });

  const handleNameChange = (e) => {
    setSettings({ ...settings, name: e.target.value });
  };

  const toggleTheme = () => {
    setSettings({
      ...settings,
      theme: settings.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <DemoWrapper>
      <div
        className={`flex flex-col items-center gap-4 max-w-sm w-full p-4 rounded-lg ${
          settings.theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="text-lg text-center">
          Update the settings below and refresh the page to see them persist.
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              value={settings.name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                settings.theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Theme</label>
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded transition ${
                settings.theme === "dark"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Switch to {settings.theme === "light" ? "Dark" : "Light"} Theme
            </button>
          </div>
        </div>
        <div className="p-4 bg-opacity-50 rounded-lg w-full">
          <p className="text-base text-center">
            Name: <span className="font-mono">{settings.name || "None"}</span>
          </p>
          <p className="text-base text-center">
            Theme:{" "}
            <span className="font-mono capitalize">{settings.theme}</span>
          </p>
        </div>
      </div>
    </DemoWrapper>
  );
};
