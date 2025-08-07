document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        taskSpan.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        removeBtn.className = "remove-btn";

        removeBtn.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";
    });
});
