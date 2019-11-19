import Todo from "../Component/Todo";
import { connect } from "react-redux";
import addtodo, { remove } from "../Action/todo.action";
import { dispatch } from "rxjs/internal/observable/range";

const mapDispatchToProps = dispatch => {
  return {
    add: (text, id) => {
      dispatch(addtodo(text, id));
    },
    remove: id => {
      dispatch(remove(id));
    }
  };
};
const mapStateToProps = state => {
  console.log(state);
  return {
    data: state
  };
};

const todoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
export default todoContainer;
