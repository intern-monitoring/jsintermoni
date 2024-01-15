const urlParams = new URLSearchParams(window.location.search);
const reportId = urlParams.get("reportId");

export const urlPUT =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-report?id=" +
  reportId;

export const AmbilResponse = (result) => {
  if (result.status) {
    console.log(result);
    Swal.fire({
      icon: "success",
      title: "Data berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "detailReport?reportId=" + reportId + "";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: result.message,
    });
  }
};
