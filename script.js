// Initial task data
const tasks = [
  {
    title: "Launch Epic Career 🚀",
    description: "Kickstart your career journey.",
    status: "todo",
  },
  {
    title: "Conquer React ⚛️",
    description: "Master the fundamentals and advanced concepts of React",
    status: "todo",
  },
  {
    title: "Master JavaScript 💛",
    description: "Deep dive into JavaScript.",
    status: "doing",
  },
  {
    title: "Keep on Going 🏆",
    description: "Stay persistent and consistent in your journey.",
    status: "doing",
  },
  {
    title: "Understand Databases ⚙️",
    description: "Deepen your knowledge of database systems.",
    status: "todo",
  },
  {
    title: "Explore ES6 Features 🚀",
    description:
      "Unlock the power of modern JavaScript by diving into ES6 syntax",
    status: "done",
  },
  {
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
  {
    title: "Crush Frameworks 🖼️",
    description:
      "Gain expertise in modern frameworks, understanding their strengths",
    status: "todo",
  },
  {
    title: "Never Give Up 🏆",
    description: "Challenges are just stepping stones to growth",
    status: "doing",
  },
  {
    title: "Have Fun 🥳",
    description: "Balance productivity with creativity!",
    status: "done",
  },
];

// Function to create a task element
function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = "task-card";
  li.innerText = task.title;

  li.onclick = function () {
    openModal(task);
  };

  return li;
}

// Function to render tasks in the DOM
function renderTasks() {
  const lists = {
    todo: document.querySelector('[data-status="todo"] .task-list'),
    doing: document.querySelector('[data-status="doing"] .task-list'),
    done: document.querySelector('[data-status="done"] .task-list'),
  };

  // Clear all lists
  for (let key in lists) {
    lists[key].innerHTML = "";
  }

  // Add tasks to the appropriate list
  for (let i = 0; i < tasks.length; i++) {
    const taskElement = createTaskElement(tasks[i]);
    if (tasks[i].status === "todo") {
      lists.todo.appendChild(taskElement);
    } else if (tasks[i].status === "doing") {
      lists.doing.appendChild(taskElement);
    } else if (tasks[i].status === "done") {
      lists.done.appendChild(taskElement);
    }
  }
}

// Function to open the modal
function openModal(task) {
  const modal = document.getElementById("taskModal");
  modal.dataset.taskIndex = tasks.indexOf(task);
  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskStatus").value = task.status;
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("taskModal").style.display = "none";
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const modal = document.getElementById("taskModal");
  const taskIndex = modal.dataset.taskIndex;
  tasks[taskIndex].title = document.getElementById("taskTitle").value;
  tasks[taskIndex].description =
    document.getElementById("taskDescription").value;
  tasks[taskIndex].status = document.getElementById("taskStatus").value;

  closeModal();
  renderTasks();
}

// Event listeners
document.getElementById("closeModal").onclick = closeModal;
document.querySelector(".modal-form").onsubmit = handleFormSubmit;

// Initial rendering of tasks
renderTasks();
