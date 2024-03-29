const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get("mahasiswaId");

export const urlPUT =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-task?id=" +
  mahasiswaId;

export const AmbilResponse = (result) => {
  if (result.status) {
    console.log(result);
    Swal.fire({
      icon: "success",
      title: "Data berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: result.message,
    });
  }
};
