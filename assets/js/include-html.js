async function includeFile(filename = "../header.xml", element = "header") {
  fetch(filename)
    .then(response => response.text())
    .then(data => {
      document.querySelector(element).innerHTML = data;
    });
}

async function includeHeader(filename = "../header.xml") {
  includeFile(filename, "header")
}

async function includeFooter(filename = "../footer.html") {
  includeFile(filename, "footer")
}
