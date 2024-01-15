import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetTask =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-task";

export const tableTask = `
<tr>
<td class="h-px w-72 whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#TASK#</span
    >
  </div>
</td>
</tr>
  `;

export function responseData(results) {
  console.log(results);

  const taskDropdown = document.getElementById("task");

  results.tasks.forEach((task) => {
    let taskMagang = tableTask.replace("#TASK#", task);
    addInner("tableTask", taskMagang);

    // Add task to dropdown
    const option = document.createElement("option");
    option.value = task;
    option.text = task;
    taskDropdown.appendChild(option);
  });
}
