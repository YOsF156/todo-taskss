import React from 'react'
import todostore from '../../Stores/Main'
import { observer } from "mobx-react";

function Todo({ id }) {
    const { delTodo, todos } = todostore

    return (
        <>
            <li >{todos[id]} <span title="delete this task" onClick={() => delTodo(id)}> 🗑️ </span></li>

        </>
    )
}
export default observer(Todo)