jQuery(document).ready(function () {
    jQuery(".main_tabs .tabs a").on("click", function (e) {
      e.preventDefault();
      switch (this.parentNode.id) {
        case "solea_senegalensis":
          window.location.href = "files/Analysis of Solea senegalensis DNA Within a Specified Region.pdf";
          break;
          case "proteomics":
          window.location.href = "files/Prediction of Structure and Function of Metagenomic Sequence SUZ71503.pdf";
          break;
          case "amelx":
            window.location.href = "files/Analysis of the Human AMELX Gene.pdf";
            break;
            case "load":
                window.location.href = "files/2023_Nisenbaum_Battle_Macon.pdf";
                break;
      }
    });
  });