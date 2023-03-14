import React from "react";
import PropTypes from 'prop-types';

function List(props){
    return(
    <ul>
        {
            props.toDoList.map((task) => {
                return <li>{task}</li>
            })
        }
    </ul>
    )
}
export default List;