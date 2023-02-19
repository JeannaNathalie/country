// https://countrysongs-b7f5.restdb.io/rest/country-albums/

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://countrysongs-b7f5.restdb.io/rest/country-albums/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63eab3b5478852088da681f2",
  },
})
  .then((response) => response.json())
  .then((data) => showAlbum(data));

//henter class'er og sætter det på den skal hente ind på produktet (fx: textContent = product.productdisplayname;)
function showAlbum(album) {
  console.log(album);
  document.querySelector(".produktinfo h1").textContent = album.artist;
  document.querySelector(".produktinfo h2").textContent = album.titel;
  document.querySelector(".produktinfo .year").textContent = album.year;
  document.querySelector(".produktinfo .tracks").textContent = album.tracks + " tracks";
  document.querySelector(".produktinfo .price").textContent = "Pris " + album.price + ",-";
  document.querySelector(".spotify").innerHTML = album.spotify;
  //   document.querySelector("img").src = ``;
}

// {"_id":"63e9f6fbaa8607500004fa40",
// "titel":"Southern Rain",
// "year":2000,
// "tracks":11,
// "artist":"Billy Ray Cyrus",
// "image":"",
// "spotify":"<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/album/1GO5wJHanTLmWL3Ap3zqpw?utm_source=generator&theme=0\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>",
// "price":149},
