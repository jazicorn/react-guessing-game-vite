import React, { useState } from "react";
import Button from "./Button";

const GuessControl = (onGuess) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleInputChange = (event) => {
    console.log("event.target.value:", event.target.value);
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    // Since the values from an HTML input are strings by default,
    //  convert to a number for the returned guess value
    //  by passing in the string to the Number function.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    console.log("Number(currentGuess):", Number(currentGuess));
    onGuess.onGuess(Number(currentGuess));
    setCurrentGuess("");
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl