import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const PostMagang = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-insert-magang";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    posisi: getValue("posisi"),
    lokasi: getValue("lokasi"),
    deskripsimagang: getValue("deskripsimagang"),
    infotambahanmagang: getValue("infotambahanmagang"),
    tentangmitra: getValue("tentangmitra"),
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