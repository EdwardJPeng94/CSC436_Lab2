import { useState } from "react";
export default function ToDo({ title, content, author, time }) {
  const [check, setCheck] = useState(false);
  const [completed, setCompleted] = useState("");
  function update() {
    setCheck(!check);
    setCompleted(Date(Date.now()));
  }
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <br />
      Created at <b> {time}</b>
      <br />
      <label>
        Completed?
        <input id="check" type="checkbox" checked={check} onChange={update} />
        <b> {check ? "YES" : "NO"} </b>
        <br />
        Completed at
        <b> {check ? completed : ""} </b>
      </label>
    </div>
  );
}
