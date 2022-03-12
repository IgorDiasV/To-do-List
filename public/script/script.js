


function showTasks()
{
    fetch('http://localhost:3000/all').then( res =>
    {
        
        return res.json()
    }).then( json =>{
       
        let tasksInHTML=''
        

        let tasks = JSON.parse(json)
       

        tasks.forEach(task =>  {
            let taskInHTML = `<div> ${task.title}</div>`

            tasksInHTML += taskInHTML
        })
        document.getElementById('allTasks').innerHTML=tasksInHTML
    })
}
function addTask()
{
    let title = document.getElementById('title').value

    const options = {
        method:"POST",
        headers : new Headers({'content-type':'application/json'}),
        body:  JSON.stringify({title})
    }
    
    fetch('http://localhost:3000/add',options).then( res =>{
        
        showTasks()

    })
    
    document.getElementById('title').value =""
}

window.onload = showTasks()

