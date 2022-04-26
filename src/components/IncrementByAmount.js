import React from 'react'
import { Button } from 'reactstrap'
import {  useDispatch } from "react-redux";
import { incrementByAmount } from '../redux/counterSlice';


export default function IncrementByAmount() {
  const dispatch=useDispatch()

  return (
    <Button onClick={() => dispatch(incrementByAmount(5))} color="warning">+5</Button>
  )
}
