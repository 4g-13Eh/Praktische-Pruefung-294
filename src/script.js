const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

const addTask = (task) => {
    const display = document.getElementById("display");
    const tableRow = document.createElement("tr");

    tableRow.append(
        createCell(tasks.title)
    );

    display.appendChild(tableRow);
}

document.addEventListener("DOMContentLoaded", () => {
    const tasksinfo = document.getElementById("tasksinfo");

    tasksinfo.addEventListener()
})
let taskData;
const getTask = () => {
    fetch('http://localhost:3000/tasks')
        .then((response) => {
            response.json();
        })
        .then((data) => {
            taskData = data;
        });
}

getTask();