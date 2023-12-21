import { URLGetApply, responseData } from "./getApply.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

const CountKonfirmasi = (count) => {
  const resultCountElement = document.getElementById("konfirmasiCount");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

const CountBelumKonfirmasi = (count) => {
  const resultCountElement = document.getElementById("belumKonfirmasiCount");
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
      const konfirmasiData = jsonData.filter((value) => !value.status);
      const belumKonfirmasiData = jsonData.filter(
        (value) => value.status === 1 || value.status === 2
      );

      // Update the count for each selection status
      CountKonfirmasi(konfirmasiData.length);
      CountBelumKonfirmasi(belumKonfirmasiData.length);
    })
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
};

get(URLGetApply, responseData);
