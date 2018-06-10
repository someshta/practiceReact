import React from "react";
import "./Right.css";

//a component is a function that returns JSX
const Right = props => {
    const style = {
        height: "100%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: `${props.borderColor}`
    }
    return(
        <div className='text-center' style={style}>
            {props.category === "" ? <div>Click a button on the left</div> : displayContent(props.results)}
        </div>
    )
}


const displayContent = results => (
    results.map(result => (
      <li className="list-group-item" key={result.id}>
        <img
          alt={result.title}
          className="img-fluid"
          src={result.images.original.url}
        />
      </li>
    ))
    
)

export default Right;