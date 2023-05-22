jQuery(document).ready(function () {
    jQuery(".main_tabs .tabs a").on("click", function (e) {
      e.preventDefault();
      switch (this.parentNode.id) {
        case "python_examples":
          window.location.href = "python_examples.html";
          break;
        case "SQL_examples":
          window.location.href = "sql_examples.html";
          break;
      }
    });
  });