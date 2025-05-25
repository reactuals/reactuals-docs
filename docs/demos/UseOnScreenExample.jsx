import React, { useRef } from "react";
import { useOnScreen } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseOnScreenExample = () => {
  const comments = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    author: `User ${index + 1}`,
    text: `This is a sample comment ${
      index + 1
    } with some content to simulate a data-heavy component.`,
  }));

  const Comment = ({ author, text }) => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref, "100px");

    return (
      <div
        ref={ref}
        className={`p-4 rounded-lg w-full transition-all duration-1000 ${
          isVisible
            ? "bg-white shadow-md opacity-100"
            : "bg-gray-200 opacity-50"
        }`}
      >
        {isVisible ? (
          <div className="flex flex-col gap-2 animate-fadeIn">
            <p className="text-base font-semibold">{author}</p>
            <p className="text-sm text-gray-600">{text}</p>
            <div className="flex gap-2">
              <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm transition duration-300">
                Like
              </button>
              <button className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm transition duration-300">
                Reply
              </button>
            </div>
          </div>
        ) : (
          <div className="h-24 flex items-center justify-center text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-6 max-w-2xl w-full">
        <p className="text-lg text-center">
          Scroll down to lazy-load comments with a slow animation, showing
          performance optimization.
        </p>
        <div className="h-[50vh]"></div>
        <div className="flex flex-col gap-4 w-full">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              author={comment.author}
              text={comment.text}
            />
          ))}
        </div>
        <div className="h-[50vh]"></div>
        <p className="text-sm text-center text-gray-600">
          Scroll to see comments load with a slow fade-in effect, reducing
          initial render time.
        </p>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1000ms ease-out;
        }
      `}</style>
    </DemoWrapper>
  );
};
