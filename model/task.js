
module.exports = {

    tasks:[],
    showTasks()
    {
        return this.tasks
    },
    addTask(title)
    {
        const id = this.tasks.length + 1
        this.tasks.push({id,title})
    },
    remover(id)
    {
        this.tasks = this.tasks.filter(task => task.id!=id)
    }
}