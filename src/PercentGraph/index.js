import React from "react";
import Styled from "./style";

export default function PercentGraph(props) {
  return (
    <Styled data={props.value} color={props.color}>
      <div className="animated"></div>
      <div>{props.value}%</div>
    </Styled>
  );
}
