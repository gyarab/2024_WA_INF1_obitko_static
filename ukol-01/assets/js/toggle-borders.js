function toggleBorders() {
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    table.classList.toggle("show-borders");
  });
}
