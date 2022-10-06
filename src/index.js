
//Eine Konstante, welche neue Tabellenzellen erstellt
function createCell(content) {
    const cell = document.createElement("td");
    cell.innerText = content;
    return cell;
}

//Eine Konstante, welche eine Task zu einer Reihe hinzufügt
function showTask(tasks){
    const display = document.getElementById("display");
    tasks.forEach((task) => {
        const row = document.createElement("tr");
        row.append(
            createCell(task.id),
            createCell(task.title),
            createCell(task.completed)
        );
        display.appendChild(row);
    });
}

function indexTasks(){
    fetch("http://localhost:3000/tasks")
    .then((response) => 
         response.json())
    .then((data) => 
        showTask(data))
}

document.addEventListener("DOMContentLoaded", () => {
    indexTasks();
});