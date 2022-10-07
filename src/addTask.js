document.addEventListener("DOMContentLoaded", () => {
    function createTask(taskTitle){
        fetch("http://localhost:3000/auth/cookie/tasks", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title: taskTitle
            })
        }
        );
    }

    const taskForm = document.getElementById("taskForm");
    taskForm.addEventListener("submit", () => {
        const taskInput = document.getElementById("taskInput").value;
        createTask(taskInput);
    });
});
