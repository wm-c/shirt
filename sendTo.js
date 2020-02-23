function postToGoogle() {
    var text = $('#textContainer').val();
    
    $.ajax({
      url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScvWGXg4CvGfyA2fbzPpDJnzhLtFzhL1ImhGerH-iyeOLMefw/formResponse",
      data: {
         "entry.36277984": text
      },
      type: "POST",
      dataType: "xml",
    });
 }