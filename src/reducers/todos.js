const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "DELETE_TODO": {
      const a = [...state];
      a.pop();
      return a;
    }
    case "ISCOMPLETED": {
      const a = [...state];
      a.forEach((test) => {
        if (test.id === 2) {
          const isdone = test.isDone;
          test.isDone = !isdone;
        }
      });
      return a;
    }
    default:
      return state;
  }
};
export default todosReducer;
