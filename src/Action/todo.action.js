export const add_todo = "ADD_TODO";
export const remove_todo = "REMOVE_TODO";

export default function addtodo(text_todo, id) {
  return {
    type: add_todo,
    id: id,
    text: text_todo
  };
}
export function remove(id) {
  return {
    type: remove_todo,
    id: id
  };
}
