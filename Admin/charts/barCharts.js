import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { mitraValues } from "./getMhsMagang.js";

const URLGet =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

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
    .then((result) => {
      const jsonData = JSON.parse(result);
      const filteredData = jsonData.filter(
        (user) =>
          user.status && user.mentor.namalengkap && user.pembimbing.namalengkap
      );

      const valueMitra = mitraValues;

      const mitraCounts = filteredData.reduce((counts, item) => {
        const mitra = item.magang.mitra.nama;

        if (mitraValues.includes(mitra)) {
          if (!counts[mitra]) {
            counts[mitra] = 0;
          }
          counts[mitra]++;
        }

        return counts;
      }, {});

      responseFunction(mitraCounts, valueMitra);
    })
    .catch((error) => console.log("error", error));
};

window.addEventListener("load", () => {
  setTimeout(() => {
    get(URLGet, (mitraCounts, valueMitra) => {
      buildChart("#hs-single-bar-chart", () => ({
        chart: {
          type: "bar",
          height: 200,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        series: [
          {
            name: "Jumlah mahasiswa magang :",
            data: valueMitra.map((mitra) => ({
              x: mitra,
              y: mitraCounts[mitra] || 0,
            })),
          },
        ],
        chart: {
          height: 250,
          type: "bar",
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
          },
        },
        colors: ["#1e40af"],
        dataLabels: {
          enabled: false,
        },
      }));
    });
  }, 2500);
});
