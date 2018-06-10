import React from "react";
import Styles from "./Left.css";

const Left = props => {
    const style = {
        container: {
        height: "100%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: `${props.borderColor}`
        },
        buttons: {
            margin: 2
        },
        row: {
            marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto"
        }
    }
    
   return (
   <div className="container" style={style.container}> 
        <div className="row">
            <div className="col-sm-12">
                <button onClick={() => props.handleButtonClick("food")} className="btn btn-info" id="food" style={style.buttons}>Food</button>
             {props.category === "food" ? toggleContent(props.category) : <div></div>}
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <button onClick={() => props.handleButtonClick("kittens")} className="btn btn-primary" id="kittens" style={style.buttons}>Kittens</button>
             {props.category === "kittens" && toggleContent(props.category)}
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <button onClick={() => props.handleButtonClick("dogs")} className="btn btn-warning" id="dogs" style={style.buttons}>Dogs</button>
             {props.category === "dogs" && toggleContent(props.category)}
            </div>
        </div>
       
   </div>
   );
    };
    
    const toggleContent = category => {
    switch (category) {
        case "food": return (
            <div>   
                Fame is a fickle food
                Upon a shifting plate
                Whose table once a
                Guest but not
                The second time is set.
            </div>
            )
            break;
        case "kittens": return (
            <div>
                Cats sleep, anywhere,
                Any table, any chair
                Top of piano, window-ledge,
                In the middle, on the edge,
                Open drawer, empty shoe,
                Anybody's lap will do,
                Fitted in a cardboard box,
                In the cupboard, with your frocks-
                Anywhere! They don't care!
                Cats sleep anywhere.
            </div>
            )
            break;
        case "dogs": return (
            <div>
                My dog has died.
                I buried him in the garden
                next to a rusted old machine.
            </div>
            )
            break;
        
    }
    
}
    
export default Left;