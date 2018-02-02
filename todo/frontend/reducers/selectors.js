import compact from 'lodash/compact';


export const allTodos = ( state ) => {
  let keys = Object.keys(state.todos);

  let rt_array = keys.map((key) => {
      return state.todos[key];
  });

  return compact(rt_array);
};

// export const getChildren = ( state, parent ) => {
//   let keys = Object.keys(state.todos);

//   let child_array = keys.map((key) => {
//     if (state.todos[key].parent.id == parent.id) {
//       return state.todos[key];
//     }
//   });

//   return compact(child_array);
// };
