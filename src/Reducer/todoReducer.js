import { add_todo, remove_todo } from "../Action/todo.action";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case add_todo:
      console.log(action.id);
      let newarray = [];
      let existingstate = state;
      newarray.push(...existingstate);
      newarray.push({ id: action.id, text: action.text });
      console.log(newarray);
      return Object.assign([], state, newarray);
    case remove_todo:
      const deleteTodo = state.filter(val => {
        console.log("In reducer", val);
        return val.id !== action.id;
      });
      console.log(deleteTodo);
      return deleteTodo;
    default: {
      return state;
    }
  }
};
export default todoReducer;
