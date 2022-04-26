import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { increment } from "../redux/counterSlice";

function Increment() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(increment())} color="success">
        +1
      </Button>
    </div>
  );
}

export default Increment;
