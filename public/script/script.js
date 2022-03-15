
function showTasks()
{
    fetch('http://localhost:3000/all').then( res =>
    {
        
        return res.json()
    }).then( json =>{
       
        let tasksInHTML=''
        

        let tasks = JSON.parse(json)
       

        tasks.forEach(task =>  {
            let taskInHTML = `<div class="task"> 
            <input id="input${task.id}" onclick="checkstatus(id)" type='checkbox'>
            <div id="${task.id}"> ${task.title}</div>
            
            <button id="button${task.id}" class="botao" onclick="remover(id)">Remover</button> 
           
            </div>
            <br>`
           
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

function checkstatus(id)
{
    let state =  document.getElementById(id).checked  
    
    id = id.replace('input',"")
    if(state)
    {
        document.getElementById(id).style="text-decoration: line-through"
    }else
    {
        document.getElementById(id).style="text-decoration: none"
    }
    
        
 
}
function remover(id)
{
    id = id.replace("button","")
    
    const options = {
        method:"POST",
        headers : new Headers({'content-type':'application/json'}),
        body: JSON.stringify({id})
    }
  
    fetch('http://localhost:3000/remover',options).then( res =>
    {
        
        showTasks()
    })

}


window.onload = showTasks()

