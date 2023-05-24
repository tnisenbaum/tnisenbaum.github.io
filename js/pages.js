jQuery(document).ready(function () {
  jQuery(".main_tabs .tabs a").on("click", function (e) {
    e.preventDefault();
    switch (this.parentNode.id) {
      case "resume_tab":
        window.location.href = "files/Thais Nisenbaum_Resume.pdf";
        break;
        case "samples_tab":
        window.location.href = "samples.html";
        break;
    }
  });
});
