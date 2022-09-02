const origin = document.getElementById("origin");
const target = document.getElementById("target");
const button = document.getElementById("clear");

const decoder = () => {
  const encoded = origin.value;
  const regex = /(?<=url=)[^&]*/g;
  const error = "Paste a valid SafeLink URL";
  const decoded = encoded.match(regex)?.[0] || error;
  target.value = decodeURIComponent(decoded);
};

const clear = () => {
  origin.value = target.value = "";
  origin.focus();
};

origin.addEventListener("input", decoder);
button.addEventListener("click", clear);
