import React from "react";
import "../index.css";
export default function Boxes(props){
    const styles = {
        backgroundColor : props.isOn ? "#FAD02C" : "transparent" 
    }

    return(
    <div className="Box--main" style={styles}  onClick={()=>props.handleClick(props.id)}>
         {props.isOn? <p>ON</p> : <p>OFF</p>}
    </div>
    )
}