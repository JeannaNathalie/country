// https://countrysongs-b7f5.restdb.io/rest/country-albums

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

fetch("https://countrysongs-b7f5.restdb.io/rest/country-albums" + id)
  .then((response) => response.json())
  .then((data) => showAlbum(data));

function showAlbums(albums){
  // looper igennem og kalder showAlbum
  albums.forEach(showAlbum)
    
  }

  function showAlbum(album){
    console.log(album);
    //Fange template
    const template = document.querySelector("regularProductsTemplate").textContent;
    //Lave en kopi
    const copy = template.cloneNode(true);
    //Ændre indhold
    copy.querySelector("h3").textContent=album.titel;
    //Appende
    document.querySelector("main").appendChild(copy);
  }

 // "Album" i stedet for "Product"
 //Hvordan henter vi vores data fra databasen?