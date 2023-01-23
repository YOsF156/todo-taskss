import React from 'react'
import Todo from '../Todo/Todo'
import todostore from '../../Stores/Main'
import { observer } from 'mobx-react'


function Todos() {
    const { todos } = todostore
    return (
        <ul>
            {todos.map((todo, i) => <Todo key={i + todo} id={i} />)}
        </ul>
    )
}

export default observer(Todos)