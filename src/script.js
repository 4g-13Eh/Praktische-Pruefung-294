//Eine Konstante, welche neue Tabellenzellen erstellt
const createCell = (content) => {
    const cell = document.createElement("td");
    cell.innerText = content;
    return cell;
}

//Eine Konstante, welche eine Task zu einer Reihe hinzufügt
const addTask = (tasks) => {
    const display = document.getElementById("display");
    const row = document.createElement("tr");

    row.append(
        createCell(tasks.id),
        createCell(tasks.title),
        createCell(tasks.completed)
    );
    
    display.append(row);
}

/*
document.addEventListener("DOMContentLoaded", () => {
    let tasksData;
    fetch(tasksUrl)
    .then((response) =>{
        return response.json();
    }) 
    .then((data) => {
        tasksData = data;
    });
    if(tasksData){
        console.log(tasksData);
    }else{
        console.log("no data");
    }
});
*/
const tasksUrl = 'http://localhost:3000/tasks';
document.addEventListener("DOMContentLoaded", () => {
    const tasksForm = document.getElementById("tasksForm")

    tasksForm.addEventListener("submit", (event) => {
        event.preventDefault();

        fetch(tasksUrl)
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
                alert(response.status)
            })
            .then((data) => {
                console.log((data));
                addTask(data)
            });
    });
});