import React, { Component } from "react";
import { push_uniq } from "terser";

export default class Todo extends Component {
  state = {
    text: ""
  };
  handleClick = () => {
    let id = 1;
    if (this.props.data && this.props.data.length > 0) {
      let length = this.props.data.length;
      console.log(this.props.data[length - 1]);
      id = this.props.data[length - 1].id + 1;
    }
    this.props.add(this.state.text, id);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <input
            className="todo"
            type="text"
            onChange={e => {
              this.setState({
                text: e.target.value
              });
            }}
          />
          <button
            type="reset"
            onClick={() => {
              this.handleClick();
            }}
          >
            Add todo
          </button>
        </form>
        {this.props.data &&
          this.props.data.map(todo => {
            return (
              <ul>
                <li className="tdlist">
                  {todo.text}
                  <button
                    onClick={e => {
                      this.props.remove(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </li>{" "}
              </ul>
            );
          })}
      </div>
    );
  }
}
