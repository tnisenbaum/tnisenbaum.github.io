jQuery(document).ready(function () {
  jQuery(".main_tabs .tabs a").on("click", function (e) {
    e.preventDefault();
    switch (this.parentNode.id) {
      case "python_examples":
        window.location.href = "python_examples.html";
        break;
      case "sql_examples":
        window.location.href = "sql_examples.html";
        break;
      case "r_examples":
        window.location.href = "r_examples.html";
        break;
      case "cgi_examples":
        window.location.href = "cgi_examples.html";
        break;
      case "genome_examples":
        window.location.href = "genome_examples.html";
        break;
      case "files_examples":
        window.location.href = "files_examples.html";
        break;
      case "ngs_examples":
        window.location.href = "ngs_examples.html";
        break;
      case "manuscripts_examples":
        window.location.href = "manuscripts_examples.html";
        break;
    }
  });
});
