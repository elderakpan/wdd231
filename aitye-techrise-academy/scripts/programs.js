const search = document.getElementById("search");
const items = document.querySelectorAll("#courseList li");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});