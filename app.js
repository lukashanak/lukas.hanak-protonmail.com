Vue.component("product", {
    template: `
          <div class="product">

          <div class="container">
          <h2> Add new tasks </h2>
            <input v-model="newTaskValue" v-on:keyup.enter="addNewTodo" placeholder="Add a new task"> </input>
            <button type="button" v-on:click="addNewTodo"> ADD </button>
          </div>

          <div class="container">
          <h2>  Not completed tasks ({{ countNotCompleted() }}) </h2> 
                <table>
                    <tr>
                        <th> id </th>
                        <th> value </th>
                        <th> isCompleted </th>
                    </tr>
                    <tr v-for="todo in todos" v-bind:key="todo.id" v-if="!todo.isCompleted" v-on:click="markAsCompleted(todo.id)" title="click to add to the completed tasks">
                        <td> {{ todo.id }}</td>
                        <td> {{ todo.value }} </td>
                        <td> {{ todo.isCompleted }} </td>
                    </tr>
                </table>
                </div>

                <div class="container">
                <h2> Completed tasks  ({{ countCompleted() }}) </h2> 
                <table>
                    <tr>
                        <th> id </th>
                        <th> value </th>
                        <th> isCompleted </th>
                    </tr>
                    <tr v-for="todo in todos" v-bind:key="todo.id" v-if="todo.isCompleted" v-on:click="markAsNotCompleted(todo.id)" :style=" { color: redColor}" title="click undo back to not completed tasks">
                        <td> {{ todo.id }}</td>
                        <td :style=" { textDecoration: textDecoration} "> {{ todo.value }} </td>
                        <td> {{ todo.isCompleted }} </td>
                    </tr>
                </table>
                </div>
          </div>
          `,
    data() {
      return {
          i:0,
          todos: [],
          redColor: 'red',
          textDecoration: 'line-through',
          newTaskValue: "",
          maxIndex: 0
      }
    },
    methods: {
        markAsCompleted(id) {
            this.todos[id].isCompleted = true;
        },
        markAsNotCompleted(id) {
            this.todos[id].isCompleted = false;
        },
        addNewTodo(){
            if (this.newTaskValue == "") {
                console.log("zmrde");
            }
            else {
                var x = {
                    id: this.maxIndex,
                    value: this.newTaskValue,
                    isCompleted: false
                }
                this.todos.push(x);
                this.maxIndex+=1;
                this.newTaskValue = "";
            }
        },
        countNotCompleted: 0,
        countNotCompleted() {
            var counter=0;
            for (var i=0; i < this.todos.length; i++) {
                if (this.todos[i].isCompleted === false) {
                    counter+=1;
                }
            }
            return counter;
        },
        countCompleted() {
            var counter=0;
            for (var i=0; i < this.todos.length; i++) {
                if (this.todos[i].isCompleted === true) {
                    counter+=1;
                }
            }
            return counter;
        }
    },
    computed: {}
  });
  
  var app = new Vue({
    el: "#app",
  });