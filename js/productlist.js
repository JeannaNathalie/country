// https://countrysongs-b7f5.restdb.io/rest/country-albums

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

fetch("https://countrysongs-b7f5.restdb.io/rest/country-albums" + id)
  .then((response) => response.json())
  .then((data) => showAlbum(data));