// Fungsi untuk menampilkan/menyembunyikan dropdown profil
const toggleProfileDropdown = () => {
  const dropdown = document.getElementById("profile-dropdown");
  dropdown.classList.toggle("opacity-100");
  dropdown.classList.toggle("hidden");
};

// Menggunakan event listener untuk mendengarkan klik pada elemen dengan ID "profile-btn"
const profileBtn = document.getElementById("profile-btn");
profileBtn.addEventListener("click", toggleProfileDropdown);
