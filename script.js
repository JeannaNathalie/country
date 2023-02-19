fetch("https://countrysongs-b7f5.restdb.io/rest/country-albums", {
  method: "get",
  headers: {
    "x-apikey": "63eab3b5478852088da681f2",
  },
})
  .then((e) => e.json())
  .then(doSomething);

function doSomething(data) {
  console.log(data);
}
