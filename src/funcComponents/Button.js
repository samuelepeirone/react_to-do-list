import React from "react";
import PropTypes from 'prop-types';
import '../assets/css/Button.css';

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