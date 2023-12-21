import { URLGetSeleksiBerkas, responseData } from "./getSeleksiBerkas.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

const CountPending = (count) => {
  const resultCountElement = document.getElementById("pendingCount");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};
const CountLolos = (count) => {
  const resultCountElement = document.getElementById("lolosCount");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};
const CountTidakLolos = (count) => {
  const resultCountElement = document.getElementById("tidakLolosCount");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

const get = (target_url, responseFunction) => {
  document.getElementById("skeletonLoader").style.display = "grow";

  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const jsonData = JSON.parse(result);
      responseFunction(jsonData);

      // Filter data for each selection status
      const pendingData = jsonData.filter((value) => !value.seleksiberkas);
      const lolosData = jsonData.filter((value) => value.seleksiberkas === 1);
      const tidakLolosData = jsonData.filter(
        (value) => value.seleksiberkas === 2
      );

      // Update the count for each selection status
      CountPending(pendingData.length);
      CountLolos(lolosData.length);
      CountTidakLolos(tidakLolosData.length);
    })
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
};

get(URLGetSeleksiBerkas, responseData);
