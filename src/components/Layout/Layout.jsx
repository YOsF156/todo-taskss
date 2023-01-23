import { observer } from 'mobx-react'
import React from 'react'
import Input from '../Input/Input'
import Todos from '../Todos/Todos'

function Layout() {



    return (
        <div>
            <Input />
            <Todos />
        </div>
    )
}

export default observer(Layout)