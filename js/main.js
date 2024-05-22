const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: "Quartely Newsletter", done: true },
                { text: "Recruiting blog post", done: false },
                { text: "Mobile app launch", done: true },
                { text: "Interview John H.", done: true },
                { text: "Summit update to mobile storefronts", done: false },
                { text: "Schedule meeting with Alex", done: true },
                { text: "Homepage refresh", done: false },
                { text: "Onboard new Sales team members", done: false },
                { text: "Review editorial calendar", done: true },

            ]
        };
    },
    methods: {

        removeTask(index) {
            this.todos.splice(index, 1);
        },
        setTaskCompletion(todo) {
            todo.done = !todo.done;
        },
        addTask() {
            if (this.newTask.length > 0) {
                this.todos.push({ text: this.newTask, done: false });
            }
            this.newTask = "";
        }
    }
}).mount('#app')