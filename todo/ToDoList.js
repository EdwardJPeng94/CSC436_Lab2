import ToDo from "./ToDo";

export default function ToDoList({ posts = [] }) {
  return (
    <div>
      {posts.map((p, i) => (
        <ToDo {...p} key={p.id} />
      ))}
    </div>
  );
}
