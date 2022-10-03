import { useReducer } from "react";
import UserBar from "./user/UserBar";
import ToDoList from "./todo/ToDoList";
import CreateToDo from "./todo/CreateToDo";
import appReducer from "./reducers";

function App() {
  const initialPosts = [
    {
      title: "Get groceries",
      content: "Eggs, milk, bread",
      author: "Eddie",
      time: Date(Date.now()),
    },
    {
      title: "Clean the kitchen",
      content: "Wipe down counters, clean the dishes",
      author: "Paul",
      time: Date(Date.now()),
    },
  ];

  // Don't manage global state like this in a real app
  // const [globalState, updateGlobalState] = useState({
  //   user: "",
  //   posts: [],
  //   comments: []
  // })
  // updateGlobalState({ ...globalState, user: "Paul" })

  //const [user, setUser] = useState("");

  //const [user, dispatchUser] = useReducer(userReducer, "");

  //const [posts, setPosts] = useState(initialPosts);
  //const [posts, dispatchPosts] = useReducer(postReducer, initialPosts);

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
