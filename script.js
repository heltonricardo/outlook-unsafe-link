const origin = document.getElementById("origin");
const target = document.getElementById("target");

const decoder = () => {
  const encoded = origin.value;
  const regex = /(?<=url=)[^&]*/g;
  const error = "Paste a valid SafeLink URL";
  const decoded = encoded.match(regex)?.[0] || error;
  target.value = decodeURIComponent(decoded);
};

origin.addEventListener("input", decoder);
