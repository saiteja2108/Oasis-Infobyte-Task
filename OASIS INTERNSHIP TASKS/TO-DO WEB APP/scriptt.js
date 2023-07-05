const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks-list');
const completedTasksList = document.getElementById('completed-tasks-list');

addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const task = createTaskElement(taskText);
        pendingTasksList.appendChild(task);
        taskInput.value = '';
    }
});

function createTaskElement(taskText) {
    const taskElement = document.createElement('li');
    const taskDate = new Date().toLocaleString();
    taskElement.innerHTML = `${taskText} - <small>Added: ${taskDate}</small>`;
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        completeTask(taskElement);
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteTask(taskElement);
    });
    taskElement.appendChild(completeButton);
    taskElement.appendChild(deleteButton);
    return taskElement;
}

function completeTask(taskElement) {
    taskElement.classList.add('completed-task');
    const taskDate = new Date().toLocaleString();
    const completionText = document.createElement('small');
    completionText.textContent = `Completed: ${taskDate}`;
    taskElement.appendChild(completionText);
    completedTasksList.appendChild(taskElement);
    taskElement.querySelector('button:first-of-type').remove(); // Remove complete button
}

function deleteTask(taskElement) {
    taskElement.remove();
}
