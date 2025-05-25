import React, { useRef, useState } from "react";
import { useFocusTrap } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseFocusTrapExample = () => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  useFocusTrap(modalRef);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <DemoWrapper>
      <div className="flex flex-col dark:text-black items-center gap-4">
        <div
          ref={modalRef}
          className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col gap-3 max-w-sm w-full"
        >
          <h2 className="text-xl font-semibold text-center">Modal Example</h2>
          <p className="text-base text-center">
            Use the Tab key to navigate. Focus is trapped within this modal.
          </p>
          <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
            Button 1
          </button>
          <input
            type="text"
            placeholder="Input field"
            className="px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <a href="#" className="text-blue-500 hover:underline text-center">
            Link
          </a>
          <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
            Button 2
          </button>
        </div>
      </div>
    </DemoWrapper>
  );
};
