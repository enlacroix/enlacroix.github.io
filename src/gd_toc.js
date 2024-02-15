let ToC =
  "<nav role='navigation' class='table-of-contents'>" +
  "<h2>Содержание статьи:</h2>" +
  "<ul>";

let headings = document.querySelectorAll('h3');

headings.forEach(function (heading) {
    let headingText = heading.textContent;
    let headingId = heading.id || headingText.toLowerCase().replace(/\s/g, '-');
    let listItem =
        "<li>" +
        "<a href='#" + headingId + "'>" + headingText + "</a>" +
        "</li>";
    ToC += listItem;
});

ToC += "</ul>" + "</nav>";

document.getElementById("toc-container").innerHTML = ToC;
