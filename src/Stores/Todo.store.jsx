import { makeAutoObservable } from "mobx";



class TodosStore {

    constructor() {
        makeAutoObservable(this)
    }
    todos = ["buy somthing", "drink more water"];

    //DO NOT defined method with arrow when you NOT destrucr it at the components: 
    //see example in "Input" component
    addTodo(text) {
        this.todos.push(text)

    }


    //DO defined method with arrow when you destrucr it at the components:
    //see example in "Todo" component
    delTodo = (id) => {
        this.todos = this.todos.filter((v, i) => i !== id)

    }


}


export default TodosStore

