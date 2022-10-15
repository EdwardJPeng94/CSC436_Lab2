import { useReducer } from "react";
import UserBar from "./user/UserBar";
import ToDoList from "./todo/ToDoList";
import CreateToDo from "./todo/CreateToDo";
import appReducer from "./reducers";
import { v4 as uuidv4 } from "uuid";

function App() {
  const initialPosts = [
    {
      title: "Get groceries",
      content: "Eggs, milk, bread",
      author: "Eddie",
      time: Date(Date.now()),
      id: uuidv4(),
    },
    {
      title: "Clean the kitchen",
      content: "Wipe down counters, clean the dishes",
      author: "Paul",
      time: Date(Date.now()),
      id: uuidv4(),
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      <ToDoList posts={state.posts} />
      {state.user && (
        <CreateToDo
          user={state.user}
          posts={state.posts}
          dispatch={dispatch}
          time={Date(Date.now())}
        />
      )}
    </div>
  );
}

export default App;
