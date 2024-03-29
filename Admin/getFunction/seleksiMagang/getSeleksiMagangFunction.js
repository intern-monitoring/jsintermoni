import { URLGetSeleksi, responseData } from "./getSeleksiMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

const CountSeleksi = (count) => {
  const resultCountElement = document.getElementById("seleksiCount");
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

      const filteredData = jsonData.filter((user) => user.status !== 2);
      responseFunction(filteredData);

      const count = filteredData.length;
      CountSeleksi(count);
    })
    .catch((error) => {
      console.log("error", error);
      hide("skeletonLoader");
    });
};

get(URLGetSeleksi, responseData);
