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

//----------------------Søgebar--------------------- 
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
