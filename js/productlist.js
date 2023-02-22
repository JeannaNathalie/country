// https://countrysongs-b7f5.restdb.io/rest/country-albums

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

fetch(
  "https://countrysongs-b7f5.restdb.io/rest/country-albums", //https://countrysongs-b7f5.restdb.io/rest/country-albums
  { method: "get", headers: { "x-apikey": "63eab3b5478852088da681f2" } }
)
  .then((response) => response.json())
  .then((data) => showAlbums(data));

function showAlbums(albums) {
  // looper igennem og kalder showAlbum
  albums.forEach(showAlbum);
}

function showAlbum(album) {
  console.log(album);
  //Fange template
  const template = document.querySelector("#regularProductsTemplate").content;
  //Lave en kopi
  const copy = template.cloneNode(true);

  //Ændre indhold
  copy.querySelector("h3").textContent = album.titel;
  copy.querySelector("h4").textContent = album.artist;
  copy.querySelector("p").textContent = album.price;
  copy.querySelector("img").src = album.image;
  copy.querySelector("a").href = `productpage.html?id=${album._id}`;
  //Appende
  document.querySelector(".productlistGrid").appendChild(copy);
}

// {"_id":"63e9f6fbaa8607500004fa40",
// "titel":"Southern Rain",
// "year":2000,
// "tracks":11,
// "artist":"Billy Ray Cyrus",
// "image":"",
// "spotify":"<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/album/1GO5wJHanTLmWL3Ap3zqpw?utm_source=generator&theme=0\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>",
// "price":149},

// "Album" i stedet for "Product"
//Hvordan henter vi vores data fra databasen?

//----------------------Søgebar---------------------
