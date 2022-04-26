import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { decrement } from "../redux/counterSlice";

export default function Decrement() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(decrement())} color="danger">
        - 1
      </Button>
    </div>
  );
}
