
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
        ]
      }
    }
  }).mount('#app')