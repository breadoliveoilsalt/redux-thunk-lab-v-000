export default function catsReducer(state= {loading: false, pictures: []}, action) {
  switch ( action.type ) {
    case 'LOADING_CATS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CATS':
      return {loading: false, pictures: action.payload}
    default:
      return state;
  }

}


// Blank at start of lab.  I added:
// Why does lesson say only one action needed, yet solution has two???
// const catsReducer = (state = [], action) => {
//   switch (action.type) {
//
//     case 'FETCH_CATS':
//       return action.cats
//
//     default:
//       return state
//   }
// }

// export default catsReducer

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         (todo.id === action.id)
//           ? {...todo, completed: !todo.completed}
//           : todo
//       )
//     default:
//       return state
//   }
// }
// ​
// export default todos
