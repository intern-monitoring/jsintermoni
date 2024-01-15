import { addInner } from "https://jscroot.github.io/element/croot.js";

const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get("mahasiswaId");

export const URLGetTask =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-task?id=" +
  mahasiswaId;

export const tableTask = `
<tr>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-600"
      >#NO#.</span
    >
  </div>
</td>
<td class="h-px w-72 whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-600"
      >#TASK#</span
    >
  </div>
</td>
</tr>
  `;

let task;

export function responseData(results) {
  console.log(results);
  let nomor = 0;

  task = results.tasks;
  const tambahTaskButton = document.getElementById("tambahTask");
  const editTaskButton = document.getElementById("buttonEditTask");

  if (results && results.tasks && results.tasks.length > 0) {
    tambahTaskButton.style.display = "none";
    editTaskButton.style.display = "inline-flex";

    results.tasks.forEach((task) => {
      let taskMagang = tableTask.replace("#TASK#", task);
      taskMagang = taskMagang.replace("#NO#", ++nomor);
      addInner("tableTask", taskMagang);
    });
  }
}

function getTask() {
  document.getElementById("editTask").value = task;
}

window.getTask = getTask;
