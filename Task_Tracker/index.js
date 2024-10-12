const fs = require("fs");
const path = require("path");

const tasksPath = path.join(__dirname, "tasks.json");

function readTasks() {
  if (fs.existsSync(tasksPath)) {
    const tasks = JSON.parse(fs.readFileSync(tasksPath, "utf8"));
    return tasks;
  }
  console.log("Does not exist");
  return [];
}

function writeTask(tasks) {
  fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2), "utf8");
}

function findNextId() {
  const tasks = readTasks();
  return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
}

function addTask(description) {
  const tasks = readTasks();
  const task = {
    id: findNextId(),
    description,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  tasks.push(task);
  writeTask(tasks);
  console.log(`Task ${task.id} added successfully!`);
}

function updateTask(id, newDescription) {
  const task = readTasks()[parseInt(id)];

  if (task) {
    task.description = newDescription;
    task.updatedAt = Date.now();
    writeTask(task);
    console.log(`Task ${task.id} updated successfully!`);
  } else {
    console.log(`Task with id ${id} does not exist.`);
  }
}
