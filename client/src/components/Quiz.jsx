import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";

const Quiz = () => {
  const [check, setChecked] = useState(undefined);

  //const trace = useSelector(state =>state.questions.trace);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  

  // NEXT BUTTON EVENT HANDLER

  const onNext = () => {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());


// Insert a new result
      if(result.length<=trace){
        dispatch(PushAnswer(check));
      }
    }

    /**reset the value */
    setChecked(undefined)
  };

  // PREVIOUS BUTTON EVENT HANDLER
  const onPrev = () => {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    } else {
      alert("This is the first question!");
    }
  };

  function onChecked(check) {
    setChecked(check);
  }

  /**FINISH EXAM */
if(result.length && result.length>=queue.length){
  return <Navigate to={'/result'}replace="true"/>
}


  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions onChecked={onChecked} />

      <div className="grid">
       {trace>0?  <button className="btn prev" onClick={onPrev}>
          Previous
        </button> : <div></div>}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
