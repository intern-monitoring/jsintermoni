import { addInner } from "https://jscroot.github.io/element/croot.js";
import { convertToWIB } from "./convertToWib.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

export const dataDailyReport = `
<div class="bg-white rounded-xl border shadow-md p-4 sm:p-7">
  <div class="grid gap-4">
    <div>
      <h2 class="text-2xl font-semibold text-gray-800">
        Detail report
      </h2>
      <p class="text-md text-gray-600 pb-1">
        Berikut merupakan detail daily report yang dikirim oleh
        mahasiswa.
      </p>
      <div class="border-b pt-1 border-gray-200"></div>
    </div>
    <div>
      <div class="grid">
        <!-- Pembimbing -->
        <div class="pb-4">
          <h2 class="text-lg font-semibold text-gray-800">
            Pengirim Report :
          </h2>
        </div>
        <div class="flex gap-x-8 text-sm items-center">
          <div>
            <img
              class="inline-block h-28 w-28 rounded-full ring-2 ring-white"
              src="#PROFILEIMAGE#"
              alt="Image Description"
            />
          </div>
          <div class="space-y-1">
            <div>
              <h3 class="font-semibold text-gray-800">
                Nama Mahasiswa :
              </h3>
              <p class="text-gray-500">#NAMAMHS#</p>
            </div>
            <div>
              <span class="block font-semibold">Email :</span>
              <p class="text-blue-500">#EMAIL#</p>
            </div>
            <div>
              <span class="block font-semibold"
                >Perguruan Tinggi :</span
              >
              <p class="text-gray-500">#PERGURUANTINGGI#</p>
            </div>
          </div>
        </div>
        <!-- End Pembimbing -->
      </div>
    </div>
    <!-- Col -->
    <div>
      <div>
        <div class="pb-2">
          <h2 class="text-lg font-semibold text-gray-800">
            Isi Report :
          </h2>
          <div class="border-b pt-1 border-gray-200"></div>
        </div>
        <div class="py-2">
          <h3 class="text-md font-semibold text-gray-800">Nilai :</h3>
          <p class="text-gray-800 text-sm">#NILAI#</p>
        </div>
        <div class="py-2">
          <h3 class="text-md font-semibold text-gray-800">
            Task yang dikerjakan :
          </h3>
          <p class="text-gray-800 text-sm">#TASK#</p>
        </div>
        <div class="py-2">
          <h3 class="text-md font-semibold text-gray-800">
            Deskripsi task :
          </h3>
          <p class="text-gray-800 text-sm">#DESKRIPSI#</p>
        </div>
        <div class="py-2">
          <h3 class="text-md pb-2 font-semibold text-gray-800">
            Dokumentasi :
          </h3>
          <div>
            <img
              class="inline-block h-[300px] w-full rounded-lg"
              src="#DOKUMENTASI#"
              alt="Image Description"
            />
          </div>
          <div class="border-b border-gray-200 pt-4"></div>
        </div>
        <div class="pt-2 flex justify-between items-start">
          <div class="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
              />
              <path
                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
              />
            </svg>
            <p class="text-md font-semibold text-gray-800">
              Terikirim pada :
              <span class="text-gray-800 text-sm font-normal"
                >#TANGGAL#</span
              >
            </p>
          </div>
          <div>
            <a
              href="detailMahasiswaMagang?mahasiswaId=#BACK#"
              class="py-2 px-3 mr-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
            >
              Kembali
            </a>
            <a
              id="beriNilai"
              href="penilaianReport?reportId=#DETAIL#"
              class="py-2 px-3 inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-md shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1 focus:ring-offset-white"
            >
              Beri Nilai
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export function responseData(results) {
  console.log(results);
  isiRow(results);
  hide("skeletonLoader");
}

const defaultImageUrl =
  "https://github.com/intern-monitoring/backend-intermoni/assets/94734096/35299028-25c8-4746-a409-3b1907e6e390";
const defaultImageDokumentasi =
  "https://github.com/intern-monitoring/backend-intermoni/assets/94734096/35299028-25c8-4746-a409-3b1907e6e390";

export function isiRow(value) {
  const wibCreated = convertToWIB(value.createdat);
  const content = dataDailyReport
    .replace(
      "#PROFILEIMAGE#",
      value.mahasiswa.imageurl ? value.mahasiswa.imageurl : defaultImageUrl
    )
    .replace("#NAMAMHS#", value.mahasiswa.namalengkap)
    .replace("#EMAIL#", value.mahasiswa.akun.email)
    .replace("#PERGURUANTINGGI#", value.mahasiswa.perguruantinggi)
    .replace(
      "#NILAI#",
      value.nilaipembimbing
        ? value.nilaipembimbing
        : "<span style='color:red;'>Pembimbing belum memberikan nilai</span>"
    )
    .replace(
      "#FEEDBACK#",
      value.feedback
        ? value.feedback
        : "<span style='color:red;'>Mentor belum memberikan feedback</span>"
    )
    .replace("#TASK#", value.task)
    .replace("#DESKRIPSI#", value.deskripsi)
    .replace(
      "#DOKUMENTASI#",
      value.kehadiran ? value.kehadiran : defaultImageDokumentasi
    )
    .replace("#DETAIL#", value._id)
    .replace("#BACK#", value.mahasiswamagang)
    .replace("#TANGGAL#", wibCreated);
  addInner("detailReport", content);
  if (value.nilaipembimbing) {
    hideBeriNilaiButton();
  }
}

function hideBeriNilaiButton() {
  hide("beriNilai");
}
