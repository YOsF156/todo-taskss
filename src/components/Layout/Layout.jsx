import { observer } from 'mobx-react'
import React, { useState } from 'react'
import Input from '../Input/Input'
import Todos from '../Todos/Todos'

function Layout() {

    const [todosList, setTodosList] = useState(["buy tesla", "drink wine"])

    const hanDel = (index) => {
        setTodosList(prev => { return prev.filter((value, i) => i !== index) })
    }
    return (
        <div>
            <Input setTodosList={setTodosList} />
            <Todos hanDel={hanDel} todosList={todosList} />
        </div>
    )
}

export default observer(Layout)