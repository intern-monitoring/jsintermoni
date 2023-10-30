const toggleProfileDropdown = () => {
  const dropdown = document.getElementById("profile-dropdown");
  dropdown.classList.toggle("opacity-100");
  dropdown.classList.toggle("hidden");
};

const toggleNotifikasiDropdown = () => {
  const notifDropdown = document.getElementById("notif-dropdown");
  notifDropdown.classList.toggle("opacity-100");
  notifDropdown.classList.toggle("hidden");
};
