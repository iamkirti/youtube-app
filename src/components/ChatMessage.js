import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img
        className="h-8"
        alt="user"
        src="https://yt4.ggpht.com/erSTICdzExMuC1fQFG3PYtCcZ1LrDkLSj6MME8LRPwdfEBN90Hf7jW1n-zqH06HjnTtHPyVZ=s32-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-bold px-2">
        {name}
      </span>
      <span>
        {message}
      </span>
    </div>
  );
};

export default ChatMessage;
