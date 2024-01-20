import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const dataApply = `
<div class="bg-white rounded-xl border shadow-md p-4 sm:p-7">
  <div class="p-5">
    <div class="space-y-4">
      <div>
        <div>
          <div class="flex items-center gap-x-4">
            <img
              class="rounded-full w-20 h-20"
              src="#PROFILEIMAGE#"
              alt="Image Description"
            />
            <div class="grow">
              <h3 class="text-xl font-semibold text-gray-800">
                #POSISI#
              </h3>
              <p class="text-xl font-normal text-gray-800">#MITRA#</p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-200"></div>
      <h3
        class="text-lg font-semibold text-gray-800 dark:text-white"
      >
        Lokasi Perusahaan : #LOKASI#
      </h3>
      <div>
        <h3
          class="text-lg font-semibold text-gray-800 dark:text-white"
        >
          Tentang Perusahaan
        </h3>
        <ul class="pl-5">
          <li class="mt-1 text-gray-800">#TENTANG#</li>
        </ul>
      </div>

      <div>
        <h3
          class="text-lg font-semibold text-gray-800 dark:text-white"
        >
          Deskripsi Magang
        </h3>
        <ul class="pl-5">
          <li class="mt-1 text-gray-800">#DESKRIPSI#</li>
        </ul>
      </div>

      <div>
        <h3
          class="text-lg font-semibold text-gray-800 dark:text-white"
        >
          Info Tambahan Magang
        </h3>
        <ul class="pl-5">
          <li class="mt-1 text-gray-800">#INFO#</li>
        </ul>
      </div>
      <div class="border-t border-gray-200 pt-2"></div>
      <div class="grid grid-cols-2">
        <p
          class="inline-flex items-center gap-x-2 text-center font-semibold text-gray-800"
        >
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
          Expired : #EXPIRED#
        </p>
        <div class="mt-2 flex justify-end gap-x-2">
          <a
            href="applyMagang.html"
            class="py-2 px-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
          >
            Kembali
          </a>
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

export function isiRow(value) {
  let deskripsi = value.magang.deskripsimagang;
  let info = value.magang.infotambahanmagang;

  deskripsi = deskripsi.replace(/<li>/g, '<li style="list-style-type: disc;">');
  info = info.replace(/<li>/g, '<li style="list-style-type: disc;">');
  const content = dataApply
    .replace(
      "#PROFILEIMAGE#",
      value.magang.mitra.imageurl
        ? value.magang.mitra.imageurl
        : defaultImageUrl
    )
    .replace("#POSISI#", value.magang.posisi)
    .replace("#LOKASI#", value.magang.lokasi)
    .replace("#MITRA#", value.magang.mitra.nama)
    .replace("#TENTANG#", value.magang.mitra.tentang)
    .replace("#DESKRIPSI#", deskripsi)
    .replace("#INFO#", info)
    .replace("#EXPIRED#", value.magang.expired);
  addInner("detailApply", content);
}
