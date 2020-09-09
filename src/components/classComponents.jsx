// A TO DO LIST USING CLASSES


import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [],
      newTodo: ""
    };
  }

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  newTodo = () => {
    this.setState({
      todoItems: [...this.state.todoItems, this.state.newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input
            type="text"
            value={this.state.newToDo}
            onChange={this.updateValue}
          />
          <button onClick={this.newTodo}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {this.state.todoItems.map((item) => (
              <li> {item} </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
