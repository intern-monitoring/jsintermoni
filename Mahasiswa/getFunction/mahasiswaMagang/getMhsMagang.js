import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetMahasiswaMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

export const dataPembimbing = `
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
    Nama Pembimbing :
  </h3>
  <p class="text-gray-500">#PEMBIMBING#</p>
</div>
<div>
  <span class="block font-semibold">Email :</span>
  <p class="text-blue-700">#EMAILPEMBIMBING#</p>
</div>
<div>
  <span class="block font-semibold"
    >Dosen Prodi :</span
  >
  <p class="text-gray-500">#PRODI#</p>
</div>
</div>
  `;

export const dataMentor = `
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
    Nama Mentor :
  </h3>
  <p class="text-gray-500">#MENTOR#</p>
</div>
<div>
  <span class="block font-semibold">Email :</span>
  <p class="text-blue-700">#EMAILMENTOR#</p>
</div>
<div>
  <span class="block font-semibold"
    >Mentor Perusahaan :</span
  >
  <p class="text-gray-500">#PERUSAHAAN#</p>
</div>
</div>
`;

export function responseDataDailyReport(results) {
  results.forEach((result) => {
    isiRowPembimbing(result);
    isiRowMentor(result);
  });
}

const defaultImageUrl =
  "https://github.com/intern-monitoring/backend-intermoni/assets/94734096/35299028-25c8-4746-a409-3b1907e6e390";

export function isiRowPembimbing(value) {
  if (value.status === 1) {
    const pembimbing = dataPembimbing
      .replace(
        "#PROFILEIMAGE#",
        value.pembimbing.imageurl ? value.pembimbing.imageurl : defaultImageUrl
      )
      .replace("#PEMBIMBING#", value.pembimbing.namalengkap)
      .replace("#EMAILPEMBIMBING#", value.pembimbing.akun.email)
      .replace("#PRODI#", value.pembimbing.prodi);
    addInner("dataPembimbing", pembimbing);
  }
}

export function isiRowMentor(value) {
  if (value.status === 1) {
    const mentor = dataMentor
      .replace(
        "#PROFILEIMAGE#",
        value.mentor.imageurl ? value.mentor.imageurl : defaultImageUrl
      )
      .replace("#MENTOR#", value.mentor.namalengkap)
      .replace("#EMAILMENTOR#", value.mentor.akun.email)
      .replace("#PERUSAHAAN#", value.magang.mitra.nama);
    addInner("dataMentor", mentor);
  }
}
