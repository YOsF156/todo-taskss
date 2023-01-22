import React from 'react'
import todostore from '../../Stores/Main'
import { observer } from "mobx-react";

function Todo({ text, id, hanDel }) {
    const { delTodo } = todostore
    console.log("🚀 ~ file: Todo.jsx:7 ~ delTodo", delTodo)

    return (
        <li onDoubleClick={() => delTodo(id)}>{text}</li>
    )
}

export default observer(Todo)