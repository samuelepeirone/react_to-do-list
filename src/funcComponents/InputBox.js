import React from "react";
import PropTypes from 'prop-types';
import '../assets/css/InputBox.css';

function InputBox(props){
    function onChangeInput(event){
        props.callbackInput(event.target.value)
    }
    return(
        <input 
            onChange={onChangeInput}
            type={props.inputType}
            placeholder={props.inputPlaceholder}
            maxLength={props.inputMaxLength}
            value={props.value}
        />
    )
}
export default InputBox;