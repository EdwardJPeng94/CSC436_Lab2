function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
        time: action.time,
        id: action.id,
      };
      return [newPost, ...state];
    case "TOGGLE_TODO":
    case "DELETE_TODO":
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: todoReducer(state.posts, action),
  };
}
