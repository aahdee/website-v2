import React from "react";
import {useNavigate, useLocation} from "react-router-dom";

function BackButton(props) {
    let navigate = useNavigate()
    let location = useLocation()

    const goBack = () => {
        // "default" means this is the first page loaded in the app (e.g. someone
        // opened a /#/about link directly), so there's no in-site page to go back to.
        if (location.key === "default") {
            navigate("/")
        } else {
            navigate(-1)
        }
    }

    return(
        <button className="Back-Button" onClick={goBack}>{props.text}</button>
    )

}

export default BackButton
