import { URLGetUser, responseData } from "./getUser.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

const updateResultCountMhs = (count) => {
  const resultCountElement = document.getElementById("resultCountMhs");
  resultCountElement.innerHTML = `<p class="text-sm text-gray-600"><span class="font-semibold text-gray-800">${count}</span> results</p>`;
};
const updateResultCountMitra = (count) => {
  const resultCountElement = document.getElementById("resultCountMitra");
  resultCountElement.innerHTML = `<p class="text-sm text-gray-600"><span class="font-semibold text-gray-800">${count}</span> results</p>`;
};
const updateResultCountPembimbing = (count) => {
  const resultCountElement = document.getElementById("resultCountPembimbing");
  resultCountElement.innerHTML = `<p class="text-sm text-gray-600"><span class="font-semibold text-gray-800">${count}</span> results</p>`;
};
const updateResultCountMentor = (count) => {
  const resultCountElement = document.getElementById("resultCountMentor");
  resultCountElement.innerHTML = `<p class="text-sm text-gray-600"><span class="font-semibold text-gray-800">${count}</span> results</p>`;
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
      const parsedResult = JSON.parse(result);

      // Filter data for each role
      const mahasiswaData = parsedResult.filter(
        (user) => user.role === "mahasiswa"
      );
      const mitraData = parsedResult.filter((user) => user.role === "mitra");
      const pembimbingData = parsedResult.filter(
        (user) => user.role === "pembimbing"
      );
      const mentorData = parsedResult.filter((user) => user.role === "mentor");

      // Call the response function with the filtered data
      responseFunction(parsedResult);

      // Update the count for each role
      updateResultCountMhs(mahasiswaData.length);
      updateResultCountMitra(mitraData.length);
      updateResultCountPembimbing(pembimbingData.length);
      updateResultCountMentor(mentorData.length);
    })
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
};

get(URLGetUser, responseData);
