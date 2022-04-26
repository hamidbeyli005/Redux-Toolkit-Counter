import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <Button className="count-input" color="info" outline>
        {count}
      </Button>
    </div>
  );
}
