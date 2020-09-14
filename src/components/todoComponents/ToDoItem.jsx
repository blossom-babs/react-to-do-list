import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ToDo(props) {

  return (
    <div className="todo-item" >
      <li>{props.item}</li>
      <div className="todo-item__butttons">
        <button onClick={props.edit} className="todo-item__butttons--edit"><EditIcon /></button>
        <button onClick={() => { props.delete(props.id) }} className="todo-item__butttons--delete"><DeleteIcon /></button>
      </div>
    </div>)
}

export default ToDo;