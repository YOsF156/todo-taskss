import { observer } from 'mobx-react'
import React, { useEffect, useRef } from 'react'
import todostore from '../../Stores/Main'

function Input() {
    const input = useRef()

    useEffect(() => {
        input.current.focus()
    }, [])

    const handleClick = () => {
        todostore.addTodo(input.current.value);
        input.current.value = "";
        input.current.focus()
    }


    return (
        <div>
            <input ref={input} type="text" className="form-input" />

            <button onClick={handleClick} type="submit" className="btn"> Add Task </button>

        </div>
    )
}

export default observer(Input)