
const { createApp } = Vue

  createApp({
    data() {
      return {
        tasksList : [
            {
                text : "una task",
                done : false,
            },
            {
                text : "una task",
                done : false,
            },
            {
                text : "una task",
                done : false,
            },
            {
                text : "una task",
                done : false,
            },
        ]
      }
    },
    methods : {
        completedTask (task){
            task.done = !task.done;
        }
    }
  }).mount('#app')