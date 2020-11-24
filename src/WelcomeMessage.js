import React from "react";

const WelcomeMessage = ({ children, name }) => {
  console.log("props", children);
  const message = `Welcome to you `;
  return (
    <div>
      <p>
        {message === "Welcome to you " ? `The message was ${name}` : message}
      </p>
    </div>
  );
};

export default WelcomeMessage;
