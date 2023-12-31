import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetSeleksiWawancara =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

export const seleksiPending = `
<tr>
<td class="h-px w-px whitespace-nowrap">
  <div class="pl-6 pr-6 py-3">
    <div class="flex items-center gap-x-3">
      <img
        class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
        src="#PROFILEIMAGE#"
        alt="Image Description"
      />
      <div class="grow">
        <span
          class="block text-sm font-semibold text-gray-800"
          >#NAMA#</span
        >
        <span class="block text-sm text-gray-500"
          >#NIM#</span
        >
      </div>
    </div>
  </div>
</td>
<td class="h-px w-72 whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#PERGURUAN#</span
    >
    <span class="block text-sm text-gray-500"
      >#PRODI#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#POSISI#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex justify-center py-3">
    <span
      class="bg-gray-200 inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #PENDING#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <a
    href="detailSeleksiWawancara?pesertaId=#DETAIL#"
    type="button"
    class="block"
  >
    <span class="px-6 py-1.5">
      <span
        class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
          />
          <path
            d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        Detail
      </span>
    </span>
  </a>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-1.5">
  <button
    id="buttonTerimaWawancara"
    value="1"
    onclick="terimaWawancara('#TERIMA#')"
    class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium pr-5"
  >
    Terima
  </button>
  <button
    id="buttonTolakWawancara"
    value="2"
    onclick="tolakWawancara('#TOLAK#)"
    class="inline-flex items-center gap-x-1.5 text-sm text-red-600 decoration-2 hover:underline font-medium"
  >
    Tidak
  </button>
  </div>
</td>
</tr>
`;

export const seleksiLolos = `
<tr>
<td class="h-px w-px whitespace-nowrap">
  <div class="pl-6 pr-6 py-3">
    <div class="flex items-center gap-x-3">
      <img
        class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
        src="#PROFILEIMAGE#"
        alt="Image Description"
      />
      <div class="grow">
        <span
          class="block text-sm font-semibold text-gray-800"
          >#NAMA#</span
        >
        <span class="block text-sm text-gray-500"
          >#NIM#</span
        >
      </div>
    </div>
  </div>
</td>
<td class="h-px w-72 whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#PERGURUAN#</span
    >
    <span class="block text-sm text-gray-500"
      >#PRODI#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#POSISI#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex justify-center py-3">
    <span
      class="bg-green-200 inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #LOLOS#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <a
    href="detailSeleksiWawancara?pesertaId=#DETAIL#"
    type="button"
    class="block"
  >
    <span class="px-6 py-1.5">
      <span
        class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
          />
          <path
            d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        Detail
      </span>
    </span>
  </a>
</td>
</tr>
`;

export const seleksiTidakLolos = `
<tr>
<td class="h-px w-px whitespace-nowrap">
  <div class="pl-6 pr-6 py-3">
    <div class="flex items-center gap-x-3">
      <img
        class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
        src="#PROFILEIMAGE#"
        alt="Image Description"
      />
      <div class="grow">
        <span
          class="block text-sm font-semibold text-gray-800"
          >#NAMA#</span
        >
        <span class="block text-sm text-gray-500"
          >#NIM#</span
        >
      </div>
    </div>
  </div>
</td>
<td class="h-px w-72 whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#PERGURUAN#</span
    >
    <span class="block text-sm text-gray-500"
      >#PRODI#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#POSISI#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex justify-center py-3">
    <span
      class="bg-red-200 inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #TIDAKLOLOS#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <a
    href="detailSeleksiWawancara?pesertaId=#DETAIL#"
    type="button"
    class="block"
  >
    <span class="px-6 py-1.5">
      <span
        class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
          />
          <path
            d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        Detail
      </span>
    </span>
  </a>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach((result) => {
    isiRowPending(result);
    isiRowLolos(result);
    isiRowTidakLolos(result);
  });
  hide("skeletonLoader");
}

const defaultImageUrl =
  "https://github.com/intern-monitoring/backend-intermoni/assets/94734096/35299028-25c8-4746-a409-3b1907e6e390";

export function isiRowPending(value) {
  if (!value.seleksiwewancara) {
    const pendingWawancara = "Pending";

    const pending = seleksiPending
      .replace(
        "#PROFILEIMAGE#",
        value.mahasiswa.imageurl ? value.mahasiswa.imageurl : defaultImageUrl
      )
      .replace("#NAMA#", value.mahasiswa.namalengkap)
      .replace("#NIM#", value.mahasiswa.nim)
      .replace("#PRODI#", value.mahasiswa.prodi)
      .replace("#PERGURUAN#", value.mahasiswa.perguruantinggi)
      .replace("#PENDING#", pendingWawancara)
      .replace("#POSISI#", value.magang.posisi)
      .replace("#MITRA#", value.magang.mitra.nama)
      .replace("#TERIMA#", value._id)
      .replace("#TOLAK#", value._id)
      .replace("#DETAIL#", value._id);
    addInner("pendingSeleksiWawancara", pending);
  }
}

export function isiRowLolos(value) {
  if (value.seleksiwewancara === 1) {
    const lolosWawancara = "Lolos";

    const lolos = seleksiLolos
      .replace(
        "#PROFILEIMAGE#",
        value.mahasiswa.imageurl ? value.mahasiswa.imageurl : defaultImageUrl
      )
      .replace("#NAMA#", value.mahasiswa.namalengkap)
      .replace("#NIM#", value.mahasiswa.nim)
      .replace("#PRODI#", value.mahasiswa.prodi)
      .replace("#PERGURUAN#", value.mahasiswa.perguruantinggi)
      .replace("#LOLOS#", lolosWawancara)
      .replace("#POSISI#", value.magang.posisi)
      .replace("#MITRA#", value.magang.mitra.nama)
      .replace("#DETAIL#", value._id);
    addInner("lolosSeleksiWawancara", lolos);
  }
}

export function isiRowTidakLolos(value) {
  if (value.seleksiwewancara === 2) {
    const tidaklolosWawancara = "Tidak Lolos";

    const tidaklolos = seleksiTidakLolos
      .replace(
        "#PROFILEIMAGE#",
        value.mahasiswa.imageurl ? value.mahasiswa.imageurl : defaultImageUrl
      )
      .replace("#NAMA#", value.mahasiswa.namalengkap)
      .replace("#NIM#", value.mahasiswa.nim)
      .replace("#PRODI#", value.mahasiswa.prodi)
      .replace("#PERGURUAN#", value.mahasiswa.perguruantinggi)
      .replace("#TIDAKLOLOS#", tidaklolosWawancara)
      .replace("#POSISI#", value.magang.posisi)
      .replace("#MITRA#", value.magang.mitra.nama)
      .replace("#DETAIL#", value._id);
    addInner("tidakLolosSeleksiWawancara", tidaklolos);
  }
}
