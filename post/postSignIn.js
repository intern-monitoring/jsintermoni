import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

const PostSignIn = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermonitoring-login";
  const tokenkey = "token";
  const tokenvalue =
    "3108501ddf2f9aa33f3a7c0e387339b131d8a4d22818feb511b0fe1bc3a16b36";
  const datainjson = {
    email: getValue("email"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
};

const responseData = (result) => {
  if (result.token) {
    // Jika memiliki token, simpan token di cookie
    setCookieWithExpireHour("token", result.token, 2);
    // Tampilkan SweetAlert berhasil login
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You have successfully logged in.",
    }).then(() => {
      // Redirect to homePelamar.html
      window.location.href = "./mahasiswa/homeMahasiswa.html";
    });
  } else {
    // Jika tidak memiliki token, tampilkan SweetAlert pesan kesalahan
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: result.message,
    });
  }
};

export default PostSignIn();
