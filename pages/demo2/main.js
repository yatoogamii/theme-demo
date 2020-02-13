// assign focus into input when click to button search //
const inputSearch = document.querySelector(".nav-tool-search input");
const buttonSearch = document.querySelector(".nav-tool-search svg");

buttonSearch.onclick = () => {
  inputSearch.focus();
};
