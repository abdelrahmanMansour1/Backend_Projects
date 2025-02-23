# Task Tracker

---

My solution for the [Task Tracker CLI](https://roadmap.sh/projects/task-tracker) challenge on [roadmap](https://roadmap.sh/).

It is a simple command-line-interface (CLI) used for managing tasks.

## Prerequisite

- NodeJs installed on your system

## Installation

**Clone the repository**

```bash
 git clone --depth=1 https://github.com/abdelrahmanMansour1/Backend_Projects

 # Navigate to project dir
 cd Task_Tracker
```

---

## Usage

- Add Tasks

```bash
# Newly added tasks are automatically listed as "to do"
node index.js add "Finish code project!"
```

- Update Task

```bash
# Need to use the id of task
node index.js update 1 "Finish code project & upload to github."
```

- Delete Task

```bash
# Need to use the id of task
node index.js delete 1
```

- List All Tasks

```bash
node index.js list
```

- List Tasks filtered by status

```bash
# List tasks marked as done
node index.js list done

# List tasks marked as in progress
node index.js list in-progress

# List tasks marked as to do
node index.js list to-do
```

- Mark Task Status

```bash
# ID is needed to change task status
# Mark task in progress
node index.js mark-in-progress

# Mark task done
node index.js mark-done 1
```

---

### Sample JSON Structure

```JSON
[
  {
    "id": 1,
    "description": "Start new project",
    "createdAt": 1728724542369,
    "updatedAt": 1728790223883,
    "status": "In Progress"
  }
]
```

> NOTE: JSON file needs to be placed in the same directory as the index.js if none is found an empty json file will be created
