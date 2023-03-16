
const { createApp } = Vue

  createApp({
    data() {
      return {
        newTaskText : "",
        validText : false,
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

            if (this.newTaskText.length < 4) {
                this.validText = true;
            } 

            if (this.newTaskText.length >= 4) {
                listName.unshift(
                    {
                        text : this.newTaskText,
                        done : false,
                    });

                this.validText = false;
            }
            
            this.newTaskText = "";
        }
    }
  }).mount('#app')