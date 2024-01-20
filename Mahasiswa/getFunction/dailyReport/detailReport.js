import { addInner } from "https://jscroot.github.io/element/croot.js";
import { convertToWIB } from "./convertToWib.js";

export const dataDailyReportPembimbing = `
<div>
<div class="pb-2">
  <h2 class="text-lg font-semibold text-gray-800">
    Penilaian Pembimbing :
  </h2>
  <div class="border-b pt-1 border-gray-200"></div>
</div>
<div class="py-2">
  <h3 class="text-md font-semibold text-gray-800">
    Nilai dari pembimbing:
  </h3>
  <p class="text-gray-800 text-sm">#NILAIPEMBIMBING#</p>
</div>
<div class="pb-2">
  <h2 class="text-lg font-semibold text-gray-800">
    Isi Report :
  </h2>
  <div class="border-b pt-1 border-gray-200"></div>
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
  <h3 class="text-md font-semibold text-gray-800">
    Hasil pekerjaan :
  </h3>
  <ul class="pl-5">
    <li class="mt text-gray-800">#HASIL#</li>
  </ul>
</div>
<div class="py-2">
  <h3 class="text-md pb-2 font-semibold text-gray-800">
    Dokumentasi :
  </h3>
  <div>
    <img
      class="inline-block h-auto w-full rounded-lg"
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
      href="dailyReport.html"
      class="py-2 px-3 mr-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
    >
      Kembali
    </a>
  </div>
</div>
</div>
`;

export const dataDailyReportMentor = `
<div>
<div class="pb-2">
  <h2 class="text-lg font-semibold text-gray-800">
    Penilaian Mentor :
  </h2>
  <div class="border-b pt-1 border-gray-200"></div>
</div>
<div class="py-2">
  <h3 class="text-md font-semibold text-gray-800">
    Nilai dari mentor:
  </h3>
  <p class="text-gray-800 text-sm">#NILAIMENTOR#</p>
</div>
<div class="py-2">
  <h3 class="text-md font-semibold text-gray-800">
    Feedback dari mentor :
  </h3>
  <ul class="pl-5">
    <li class="mt text-gray-800">#FEEDBACK#</li>
  </ul>
</div>
<div class="pb-2">
  <h2 class="text-lg font-semibold text-gray-800">
    Isi Report :
  </h2>
  <div class="border-b pt-1 border-gray-200"></div>
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
  <h3 class="text-md font-semibold text-gray-800">
    Hasil pekerjaan :
  </h3>
  <ul class="pl-5">
    <li class="mt text-gray-800">#HASIL#</li>
  </ul>
</div>
<div class="py-2">
  <h3 class="text-md pb-2 font-semibold text-gray-800">
    Dokumentasi :
  </h3>
  <div>
    <img
      class="inline-block h-auto w-full rounded-lg"
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
      href="dailyReport.html"
      class="py-2 px-3 mr-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
    >
      Kembali
    </a>
  </div>
</div>
</div>
`;

export function responseData(results) {
  console.log(results);
  isiRowPembimbing(results);
  isiRowMentor(results);
}

const defaultImageDokumentasi =
  "https://github.com/intern-monitoring/backend-intermoni/assets/94734096/35299028-25c8-4746-a409-3b1907e6e390";

export function isiRowPembimbing(value) {
  let hasil = value.hasil;

  hasil = hasil.replace(/<li>/g, '<li style="list-style-type: disc;">');
  const wibCreated = convertToWIB(value.createdat);
  const dataReportPembimbing = dataDailyReportPembimbing
    .replace(
      "#NILAIPEMBIMBING#",
      value.nilaipembimbing
        ? value.nilaipembimbing
        : "<span style='color:red;'>Pembimbing belum memberikan nilai</span>"
    )
    .replace("#TASK#", value.task)
    .replace("#DESKRIPSI#", value.deskripsi)
    .replace("#HASIL#", hasil)
    .replace(
      "#DOKUMENTASI#",
      value.kehadiran ? value.kehadiran : defaultImageDokumentasi
    )
    .replace("#DETAIL#", value._id)
    .replace("#BACK#", value.mahasiswamagang)
    .replace("#TANGGAL#", wibCreated);
  addInner("reportPembimbing", dataReportPembimbing);
}

export function isiRowMentor(value) {
  let hasil = value.hasil;
  let feedback = value.feedback;

  hasil = hasil.replace(/<li>/g, '<li style="list-style-type: disc;">');
  feedback = feedback.replace(/<li>/g, '<li style="list-style-type: disc;">');
  const wibCreated = convertToWIB(value.createdat);
  const dataReportMentor = dataDailyReportMentor
    .replace(
      "#NILAIMENTOR#",
      value.nilaimentor
        ? value.nilaimentor
        : "<span style='color:red;'>Mentor belum memberikan nilai</span>"
    )
    .replace(
      "#FEEDBACK#",
      feedback
        ? feedback
        : "<span style='color:red;'>Mentor belum memberikan feedback</span>"
    )
    .replace("#TASK#", value.task)
    .replace("#DESKRIPSI#", value.deskripsi)
    .replace("#HASIL#", hasil)
    .replace(
      "#DOKUMENTASI#",
      value.kehadiran ? value.kehadiran : defaultImageDokumentasi
    )
    .replace("#DETAIL#", value._id)
    .replace("#BACK#", value.mahasiswamagang)
    .replace("#TANGGAL#", wibCreated);
  addInner("reportMentor", dataReportMentor);
}
