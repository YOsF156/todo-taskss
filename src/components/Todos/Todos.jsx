import React from 'react'
import Todo from '../Todo/Todo'
import todostore from '../../Stores/Main'
import { observer } from 'mobx-react'


function Todos({ todosList, hanDel }) {

    return (
        <ul>
            {todostore.todos.map((todo, i) => <Todo key={i + todo} text={todo} id={i} hanDel={hanDel} />)}
        </ul>
    )
}

export default observer(Todos)