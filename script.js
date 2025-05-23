/** Initial set of tasks. */
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 4,
    title: "Learn Data Structures and Algorithms 📚",
    description: "Study fundamental structures",
    status: "todo",
  },
  {
    id: 5,
    title: "Contribute to Open Source Projects 🌐",
    description: "Gain practical experience",
    status: "done",
  },
  {
    id: 6,
    title: "Build Portfolio Projects 🛠️",
    description: "Showcase your skills and projects",
    status: "done",
  },
];

export const tasks = JSON.parse(localStorage.getItem("tasks")) || initialTasks;
export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
