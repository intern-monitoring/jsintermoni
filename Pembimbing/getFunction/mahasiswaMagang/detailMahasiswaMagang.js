import { addInner } from "https://jscroot.github.io/element/croot.js";

export const dataMhsMagang = `
<div class="pb-3">
<img
  class="inline-block h-32 w-32 rounded-full ring-2 ring-white"
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
  <p class="text-blue-700">#EMAILMHS#</p>
</div>
<div>
  <span class="block font-semibold"
    >Posisi Magang :</span
  >
  <p class="text-gray-500">#POSISI#</p>
</div>
</div>
`;

export function responseData(results) {
  console.log(results);
  isiRow(results);
}

const defaultImageUrl =
  "https://github.com/intern-monitoring/backend-intermoni/assets/94734096/35299028-25c8-4746-a409-3b1907e6e390";

export function isiRow(value) {
  const content = dataMhsMagang
    .replace(
      "#PROFILEIMAGE#",
      value.mahasiswa.imageurl ? value.mahasiswa.imageurl : defaultImageUrl
    )
    .replace("#NAMAMHS#", value.mahasiswa.namalengkap)
    .replace("#EMAILMHS#", value.mahasiswa.akun.email)
    .replace("#POSISI#", value.magang.posisi);
  addInner("dataMahasiswa", content);
}
