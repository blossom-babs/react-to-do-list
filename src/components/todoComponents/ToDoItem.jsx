import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ToDo({ item, id, setItems, setInputText }) {

  //onClick={() => { props.edit(props.id) }}
  function deleteItem(id) {
    setItems(prevVal => {
      return prevVal.filter((item, index) => {
        return index !== id
      })
    })
  }

  function editItem(item, id) {
    setInputText(item)
    setItems(prevVal => {
      return prevVal.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="todo-item" >
      <li>{item}</li>
      <div className="todo-item__butttons">
        <button onClick={() => { editItem(item, id) }} value="something" className="todo-item__butttons--edit"><EditIcon /></button>
        <button onClick={() => { deleteItem(id) }} className="todo-item__butttons--delete"><DeleteIcon /></button>
      </div>
    </div>)
}

export default ToDo;