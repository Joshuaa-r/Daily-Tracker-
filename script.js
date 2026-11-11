const form = document.getElementById("project-form");
const projectList = document.getElementById("project-list");
const emptyState = document.getElementById("empty-state");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const projectName = formData.get("projectName").toString().trim();
  const projectDescription = formData.get("projectDescription").toString().trim();
  const files = document.getElementById("project-files").files;

  if (!projectName || files.length === 0) {
    return;
  }

  const listItem = document.createElement("li");
  const header = document.createElement("strong");
  header.textContent = projectName;

  const details = document.createElement("div");
  const fileNames = Array.from(files).map((file) => file.name).join(", ");
  details.className = "meta";
  details.textContent = `Files: ${fileNames}`;

  listItem.appendChild(header);

  if (projectDescription) {
    const description = document.createElement("p");
    description.textContent = projectDescription;
    listItem.appendChild(description);
  }

  listItem.appendChild(details);
  projectList.prepend(listItem);
  emptyState.style.display = "none";

  form.reset();
});
