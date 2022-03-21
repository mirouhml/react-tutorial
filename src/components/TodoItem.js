import React, { useState } from "react"
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const [editing, setEditing] = useState(false);

  const { completed, id, title } = props.todo

  const handleEditing = () => {
    setEditing(true);
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <button onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li> 
  )
}

export default TodoItem