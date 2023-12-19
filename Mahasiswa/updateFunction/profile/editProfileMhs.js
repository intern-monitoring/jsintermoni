export const isiDataProfile = (results) => {
  const defaultImageUrl =
    "https://github.com/intern-monitoring/backend-intermoni/assets/94734096/35299028-25c8-4746-a409-3b1907e6e390";
  const inputMapping = [
    { id: "previewImage", path: "imageurl" },
    { id: "namalengkap", path: "namalengkap" },
    { id: "tanggallahir", path: "tanggallahir" },
    { id: "jeniskelamin", path: "jeniskelamin" },
    { id: "nim", path: "nim" },
    { id: "perguruantinggi", path: "perguruantinggi" },
    { id: "prodi", path: "prodi" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    // Check if the element is an image and set the src attribute
    if (inputElement.tagName === "IMG") {
      inputElement.src = value ? value : defaultImageUrl;
    } else {
      inputElement.value = value;
    }
  });
};

const getNestedValue = (obj, path, index, property) => {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
};
