import React from "react";

const Title = props => (
    <h1> {props.anyPropName ? props.anyPropName : "My Dry Run"} </h1>
)

export default Title;