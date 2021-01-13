import React, { useState } from "react";

function TodoItem(props) {
  const [done, setDone] = useState(false);
  function remove() {
    setDone(!done);
  }

  return (
    <li onClick={remove} className={done && "done"}>
      {props.text}
    </li>
  );
}

export default TodoItem;
