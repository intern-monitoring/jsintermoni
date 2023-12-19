import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutProfileMitra.js";

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
  const namanarahubungValue = document.getElementById("namanarahubung");
  const nohpnarahubungValue = document.getElementById("nohpnarahubung");
  const namaValue = document.getElementById("nama");
  const kategoriValue = document.getElementById("kategori");
  const sektorindustriValue = document.getElementById("sektorindustri");
  const tentangValue = document.getElementById("tentang");
  const alamatValue = document.getElementById("alamat");
  const websiteValue = document.getElementById("website");

  let file = imageInput.files[0];
  const namanarahubung = namanarahubungValue.value;
  const nohpnarahubung = nohpnarahubungValue.value;
  const nama = namaValue.value;
  const kategori = kategoriValue.value;
  const sektorindustri = sektorindustriValue.value;
  const tentang = tentangValue.value;
  const alamat = alamatValue.value;
  const website = websiteValue.value;

  if (!file) {
    file = document.getElementById("previewImage").src;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("namanarahubung", namanarahubung);
  formData.append("nohpnarahubung", nohpnarahubung);
  formData.append("nama", nama);
  formData.append("kategori", kategori);
  formData.append("sektorindustri", sektorindustri);
  formData.append("tentang", tentang);
  formData.append("alamat", alamat);
  formData.append("website", website);

  putData(urlPUT, formData, AmbilResponse);
};

const updateProfileMitra = document.getElementById("updateProfileMitra");

updateProfileMitra.addEventListener("click", () => {
  pushData(); // Call pushData function when the button is clicked
});
