import { observer } from 'mobx-react'
import React, { useEffect, useRef } from 'react'
import todostore from '../../Stores/Main'

function Input({ setTodosList }) {
    const input = useRef()

    useEffect(() => {
        input.current.focus()
        input.current.value = ""

    }, [todostore.todos])
    return (
        <div>
            <input ref={input} type="text" className="form-input" />
            <button onClick={() => todostore.addTodo(input.current.value)} type="submit" className="btn"> Add Task</button>

        </div>
    )
}

export default observer(Input)