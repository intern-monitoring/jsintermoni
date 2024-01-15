import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

export function postWithToken(
  target_url,
  tokenkey,
  tokenvalue,
  datajson,
  responseFunction
) {
  var myHeaders = new Headers();
  myHeaders.append(tokenkey, tokenvalue);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: datajson,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

const PostDailyReport = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-report";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";

  const imageInput = document.getElementById("imageInput");
  const deskripsiValue = document.getElementById("deskripsi");
  const hasilValue = document.getElementById("hasil");
  const taskValue = document.getElementById("task");

  const file = imageInput.files[0];
  const deskripsi = deskripsiValue.value;
  const hasil = hasilValue.value;
  const task = taskValue.value;

  console.log(file);
  console.log(deskripsi);
  console.log(hasil);
  console.log(task);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("deskripsi", deskripsi);
  formData.append("hasil", hasil);
  formData.append("task", task);

  postWithToken(target_url, tokenkey, tokenvalue, formData, responseData);
  console.log(formData);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Insert Successful",
      text: result.message,
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Insert Failed",
      text: result.message,
    });
  }
};

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

const imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", handleFileInputChange);

window.PostDailyReport = PostDailyReport;
