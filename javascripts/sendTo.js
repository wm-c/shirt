function postToGoogle() {
    var text = $('#textContainer').val();
    
    $.ajax({
      url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfKePSLaSTuXDx6iKv4yESu3clU1f7Cf2eoTxdEUxUuN9doNQ/formResponse",
      data: {
         "entry.970992871": text
      },
      type: "POST",
      dataType: "xml",
    });
 }