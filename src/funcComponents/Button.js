import React from "react";
import PropTypes from 'prop-types';

function Button(props){
    function clickButton(event){
        props.callbackButton()
    }
    return(
        <button onClick={clickButton}>
            {props.name}
        </button>
    )
}
export default Button;