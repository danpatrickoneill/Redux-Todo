import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_TODOS } from "../actions";

export const initialState = {
  todos: [
    {
      value: "Create todo app",
      completed: false
    },
    {
      value: "Walk the dog",
      completed: false
    },
    {
      value: "Fold laundry",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [...state.todos, { value: action.text, completed: false }]
      };
    }
    case TOGGLE_TODO: {
      const newTodos = state.todos.map((todo, index) => {
        console.log(index, action.id);
        if (Number(action.id) === index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
      console.log(newTodos);
      return {
        todos: newTodos
      };
    }
    case DELETE_TODO: {
      const newTodos = state.todos.filter(
        (todo, index) => Number(action.id) !== index
      );
      console.log(newTodos);
      return {
        todos: newTodos
      };
    }
    case CLEAR_TODOS:
      const newTodos = state.todos.filter(todo => !todo.completed);
      console.log(newTodos);
      return {
        todos: newTodos
      };
    default:
      return state;
  }
};
