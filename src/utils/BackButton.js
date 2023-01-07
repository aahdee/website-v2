import React from "react";
import {useHistory} from "react-router-dom";

function BackButton(props) {
    let history = useHistory()
    return(
        <button className="Back-Button" onClick={() => history.goBack()}>{props.text}</button>
    )

}

export default BackButton