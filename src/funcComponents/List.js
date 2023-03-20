import React from "react";
import PropTypes from 'prop-types';
import '../assets/css/List.css';
import { useState, useEffect } from 'react';

function List(props) {
    const [isDone, setDone] = useState(false)
    useEffect(
        () => {
        }, []
    )
    function changeStyle() {
        setDone(true)
        console.log(isDone)
    }
    return (
        <ul>
            {
                props.toDoList.map((task) => {
                    return <li onClick={changeStyle}
                        className={isDone ? 'taskDone' : 'taskToDo'}
                    >
                        {task}
                    </li>
                })
            }
        </ul>
    )
}
export default List;