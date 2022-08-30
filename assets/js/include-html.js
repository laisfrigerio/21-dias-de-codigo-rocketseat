async function includeFile(filename = "../header.xml", element = "header") {
  fetch(filename)
    .then(response => response.text())
    .then(data => {
      document.querySelector(element).innerHTML = data;
    });
}
