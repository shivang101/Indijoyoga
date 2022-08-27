import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div className="py-5" role="alert">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Alert
      </div>
      <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{variant}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
  color: "bg-blue-300",
};

export default Message;
