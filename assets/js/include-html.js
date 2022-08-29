async function includeFile(filename = "../header.xml") {
  fetch(filename)
    .then(response => response.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    });
}
