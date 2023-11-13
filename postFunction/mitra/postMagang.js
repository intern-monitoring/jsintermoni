import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

function postWithToken(
  target_url,
  tokenkey,
  tokenvalue,
  datajson,
  responseFunction
) {
  var myHeaders = new Headers();
  myHeaders.append(tokenkey, tokenvalue);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(datajson);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

const PostMagang = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    posisi: getValue("posisi"),
    lokasi: getValue("lokasi"),
    deskripsimagang: getValue("deskripsimagang"),
    infotambahanmagang: getValue("infotambahanmagang"),
    expired: getValue("expired"),
  };
  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
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

window.PostMagang = PostMagang;
