import { makeAutoObservable } from "mobx";



class TodosStore {
    todos
    constructor() {
        this.todos = ["buy somthing", "drink more water"];
        makeAutoObservable(this)
    }


    addTodo(text) {
        this.todos.push(text)
    }

    delTodo = (id) => {
        this.todos = this.todos.filter((v, i) => i !== id)

    }


}


export default TodosStore

