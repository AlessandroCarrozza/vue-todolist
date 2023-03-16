
const { createApp } = Vue

  createApp({
    data() {
      return {
        newTaskText : "",
        tasksList : [
        ]
      }
    },
    methods : {
        completedTask(task) {
            task.done = !task.done;
        },
        removeTask(index) {
            this.tasksList.splice(index, 1);
        },
        addTask(listName) {
            listName.unshift(
                {
                    text : this.newTaskText,
                    done : false,
                });

            this.newTaskText = "";
        }
    }
  }).mount('#app')