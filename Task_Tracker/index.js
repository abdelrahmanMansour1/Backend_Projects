const fs = require("fs");
const path = require("path");

const tasksPath = path.join(__dirname, "tasks.json");

// Using ANSI escape codes to change text colors.
const colors = {
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
};

function readTasks() {
  if (fs.existsSync(tasksPath)) {
    const tasks = JSON.parse(fs.readFileSync(tasksPath, "utf8"));
    return tasks;
  }
  // creates an empty json file if no one is found.
  fs.writeFileSync("tasks.json", JSON.stringify([]));
  return [];
}

function writeTask(tasks) {
  fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2), "utf8");
}

function findNextId() {
  const tasks = readTasks();
  // Math.max returns the highest id found after mapping over the tasks.
  return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
}

function addTask(description) {
  description = description[0];
  const tasks = readTasks();
  const task = {
    id: findNextId(),
    description,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    status: "To Do",
  };
  tasks.push(task);
  writeTask(tasks);
  console.log(
    `${colors.green} Task ${task.id} added successfully! ${colors.reset}`
  );
}

function updateTask(args) {
  let id = parseInt(args[0]),
    newDescription = args[1];

  const tasks = readTasks();

  if (!tasks[id - 1]) {
    console.log(
      `${colors.red} Task with id ${id} does not exist. ${colors.reset}`
    );
  } else {
    tasks[id - 1].description = newDescription;
    tasks[id - 1].updatedAt = Date.now();
    writeTask(tasks);
    console.log(
      `${colors.green} Task ${id} updated successfully! ${colors.reset}`
    );
  }
}

function deleteTask(id) {
  const tasks = readTasks();
  const newTasks = tasks.filter((task) => task.id !== parseInt(id));
  if (newTasks.length < tasks.length) {
    writeTask(newTasks);
    console.log(
      `${colors.green} Task ${id} deleted successfully! ${colors.reset}`
    );
  } else {
    console.log(
      `${colors.red} Task with id ${id} does not exist. ${colors.reset}`
    );
    return;
  }
}

function listTasks(filter) {
  filter = filter.length === 0 ? "all" : filter[0];
  const tasks = readTasks();
  let filteredTasks;
  if (tasks.length > 0) {
    console.log(`${colors.yellow}Tasks: ${colors.reset}`);
    if (filter === "all") {
      tasks.forEach((task) => {
        console.log(
          ` ${task.id}. ${colors.green}${task.description}${
            colors.reset
          } - Created at: ${new Date(
            task.createdAt
          ).toLocaleString()} - Updated at: ${new Date(
            task.updatedAt
          ).toLocaleString()} - Status: ${task.status}`
        );
      });
    } else if (filter === "to-do") {
      filteredTasks = tasks.filter((task) => task.status === "To Do");
      filteredTasks.forEach((task) => {
        console.log(
          `${task.id}.${colors.yellow}${task.description}${
            colors.reset
          } - Created at: ${new Date(
            task.createdAt
          ).toLocaleString()} - Updated at: ${new Date(
            task.updatedAt
          ).toLocaleString()} - Status: ${task.status} ${colors.reset}`
        );
      });
    } else if (filter === "in-progress") {
      filteredTasks = tasks.filter((task) => task.status === "In Progress");
      filteredTasks.forEach((task) => {
        console.log(
          `${task.id}.${colors.yellow}${task.description}${
            colors.reset
          } - Created at: ${new Date(
            task.createdAt
          ).toLocaleString()} - Updated at: ${new Date(
            task.updatedAt
          ).toLocaleString()} - Status: ${task.status} ${colors.reset}`
        );
      });
    } else if (filter === "done") {
      filteredTasks = tasks.filter((task) => task.status === "Done");
      filteredTasks.forEach((task) => {
        console.log(
          `${task.id}.${colors.green}${task.description}${
            colors.reset
          } - Created at: ${new Date(
            task.createdAt
          ).toLocaleString()} - Updated at: ${new Date(
            task.updatedAt
          ).toLocaleString()} - Status: ${task.status} ${colors.reset}`
        );
      });
    }
  } else {
    console.log(`${colors.yellow}No tasks found. ${colors.reset}`);
  }

  console.log("");
}

function markInProgress(id) {
  const tasks = readTasks();

  if (!tasks[id - 1]) {
    console.log(
      `${colors.red} Task with id ${id} does not exist. ${colors.reset}`
    );
  } else {
    tasks[id - 1].status = "In Progress";
    tasks[id - 1].updatedAt = Date.now();
    writeTask(tasks);
    console.log(
      `${colors.yellow} Task ${id} marked as In progress! ${colors.reset}`
    );
  }
}

function markAsDone(id) {
  const tasks = readTasks();

  if (!tasks[id - 1]) {
    console.log(
      `${colors.red} Task with id ${id} does not exist. ${colors.reset}`
    );
  } else {
    tasks[id - 1].status = "Done";
    tasks[id - 1].updatedAt = Date.now();
    writeTask(tasks);
    console.log(`${colors.green} Task ${id} marked as Done! ${colors.reset}`);
  }
}

function determineActions(action, args) {
  switch (action) {
    case "add":
      addTask(args);
      break;
    case "update":
      updateTask(args);
      break;
    case "delete":
      deleteTask(args);
      break;
    case "mark-in-progress":
      markInProgress(args);
    case "mark-done":
      markAsDone(args);
      break;
    case "list":
      listTasks(args);
      break;
    default:
      console.log(colors.yellow + "No actions determined!" + colors.reset);
      console.log(
        `${colors.cyan}Usage: node index.js <command> [arguments]${colors.reset}`
      );
      console.log(`${colors.cyan}Commands:${colors.reset}`);
      console.log(
        `${colors.yellow}  add <task description>            - Add a new task${colors.reset}`
      );
      console.log(
        `${colors.yellow}  list [status]                     - List tasks (status: done, to-do, in-progress)${colors.reset}`
      );
      console.log(
        `${colors.yellow}  update <id> <new description>     - Update a task by ID${colors.reset}`
      );
      console.log(
        `${colors.yellow}  delete <id>                       - Delete a task by ID${colors.reset}`
      );
      console.log(
        `${colors.yellow}  mark-in-progress <id>             - Mark a task as in-progress by ID${colors.reset}`
      );
      console.log(
        `${colors.yellow}  mark-done <id>                    - Mark a task as done by ID${colors.reset}`
      );
      console.log("");
      break;
  }
}

const action = process.argv[2];
const args = process.argv.slice(3);

determineActions(action, args);
