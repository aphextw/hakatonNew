import Button from "./components/button/button.jsx";
import { data } from "./data.js";
import { useState } from "react";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);

  const CheckAns = (e, ans) => {
    if (question.ans === ans) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("wrong");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "gray",
        marginLeft: "400px",
        padding: "20px",
        margin: "100px",
        height: "450px",
        width: "500px",
      }}
    >
      <h2>
        {index + 1} {question.question}
      </h2>
      <button
        onClick={(e) => {
          CheckAns(e, 1);
        }}
        style={{ width: "300px" }}
      >
        {question.option1}
      </button>
      <button
        onClick={(e) => {
          CheckAns(e, 2);
        }}
        style={{ width: "300px" }}
      >
        {question.option2}
      </button>
      <button
        onClick={(e) => {
          CheckAns(e, 3);
        }}
        style={{ width: "300px" }}
      >
        {question.option3}
      </button>
      <button
        onClick={(e) => {
          CheckAns(e, 4);
        }}
        style={{ width: "300px" }}
      >
        {question.option4}
      </button>
      <br />
      <Button>Next</Button>
      <div className="index"> {index + 1} of 5 </div>
    </div>
  );
}
