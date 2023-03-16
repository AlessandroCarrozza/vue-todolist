
const { createApp } = Vue

  createApp({
    data() {
      return {
        tasksList : [
            {
                text : "prima task",
                done : false,
            },
            {
                text : "seconda task",
                done : false,
            },
            {
                text : "terza task",
                done : false,
            },
            {
                text : "quarta task",
                done : false,
            },
        ]
      }
    },
    methods : {
        completedTask (task){
            task.done = !task.done;
        },
        removeTask (index){
            this.tasksList.splice(index, 1);
        },
    }
  }).mount('#app')