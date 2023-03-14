import React from "react";
import PropTypes from 'prop-types';

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
        />
    )
}
export default InputBox;