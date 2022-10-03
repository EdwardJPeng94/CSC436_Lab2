import { useState } from "react";
export default function ToDo({ title, content, author, time }) {
  const [check, setCheck] = useState(false);
  function update() {
    setCheck(!check);
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
        <b> {check ? Date(Date.now()) : ""} </b>
      </label>
    </div>
  );
}
