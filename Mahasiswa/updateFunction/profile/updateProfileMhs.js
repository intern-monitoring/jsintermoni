import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutProfileMhs.js";

const putData = async (target_url, datajson, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: datajson,
    redirect: "follow",
  };

  await fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

const pushData = () => {
  const imageInput = document.getElementById("imageInput");
  const namalengkapValue = document.getElementById("namalengkap");
  const tanggallahirValue = document.getElementById("tanggallahir");
  const jeniskelaminValue = document.getElementById("jeniskelamin");
  const nimValue = document.getElementById("nim");
  const perguruantinggiValue = document.getElementById("perguruantinggi");
  const prodiValue = document.getElementById("prodi");

  const file = imageInput.files[0];
  const namalengkap = namalengkapValue.value;
  const tanggallahir = tanggallahirValue.value;
  const jeniskelamin = jeniskelaminValue.value;
  const nim = nimValue.value;
  const perguruantinggi = perguruantinggiValue.value;
  const prodi = prodiValue.value;

  if (!file) {
    file = document.getElementById("previewImage").src;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("namalengkap", namalengkap);
  formData.append("tanggallahir", tanggallahir);
  formData.append("jeniskelamin", jeniskelamin);
  formData.append("nim", nim);
  formData.append("perguruantinggi", perguruantinggi);
  formData.append("prodi", prodi);

  putData(urlPUT, formData, AmbilResponse);
};

const updateProfileMhs = document.getElementById("updateProfileMhs");

updateProfileMhs.addEventListener("click", () => {
  pushData(); // Call pushData function when the button is clicked
});

const handleFileInputChange = (event) => {
  const input = event.target;

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const previewImage = document.getElementById("previewImage");
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
};

// Attach the event listener to the file input
const imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", handleFileInputChange);
