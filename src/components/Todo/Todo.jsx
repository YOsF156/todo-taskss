import React from 'react'
import todostore from '../../Stores/Main'
import { observer } from "mobx-react";

function Todo({ id }) {
    const { delTodo, todos } = todostore

    return (
        <li onDoubleClick={() => delTodo(id)}>{todos[id]}</li>
    )
}
export default observer(Todo)