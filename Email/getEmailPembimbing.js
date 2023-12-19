import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";

const URLGetEmail =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-pembimbing";

const userEmail = `
  <p class="text-sm text-gray-500">Signed in as</p>
  <p class="text-sm font-medium text-gray-800">
    #EMAILUSER#
  </p>
  `;

const userPhoto = `
  <img
  class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white"
  src="#PROFILEIMAGE#"
  alt="Image Description"
  />
  `;

const responseData = (results) => {
  emailUser(results);
};

const emailUser = (value) => {
  const defaultImageUrl =
    "https://github.com/intern-monitoring/backend-intermoni/assets/94734096/35299028-25c8-4746-a409-3b1907e6e390";
  const imageUrl = value.imageurl ? value.imageurl : defaultImageUrl;
  const profileImage = userPhoto.replace("#PROFILEIMAGE#", imageUrl);
  const email = userEmail.replace("#EMAILUSER#", value.akun.email);
  addInner("emailUser", email);
  addInner("profile-btn", profileImage);
};

const get = (target_url, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

get(URLGetEmail, responseData);
