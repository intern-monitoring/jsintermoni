import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutProfileMentor.js";

const putData = (target_url, datajson, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: datajson,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

const pushData = () => {
  const imageInput = document.getElementById("imageInput");
  const namalengkapValue = document.getElementById("namalengkap");
  const nikValue = document.getElementById("nik");

  let file = imageInput.files[0];
  const namalengkap = namalengkapValue.value;
  const nik = nikValue.value;

  if (!file) {
    file = document.getElementById("previewImage").src;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("namalengkap", namalengkap);
  formData.append("nik", nik);

  putData(urlPUT, formData, AmbilResponse);
};

const updateProfileMentor = document.getElementById("updateProfileMentor");

updateProfileMentor.addEventListener("click", () => {
  pushData(); // Call pushData function when the button is clicked
});
