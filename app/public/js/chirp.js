// get all chirps
$.get("/api/all", function(data) {
  if (data.length !== 0) {
    for (i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("chirp");
      row.append("<p>" + data[i].author + " chirped </p>");
      row.append(
        "<p>At " + moment(data[i].created_at).format("YYYY-MM-DD HH:mm:ss") + "</p>"
      );

      $("#chirp-area").prepend(row);
    }
  }
});

// add a new chirp
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  var newChirp = {
    author: $("#author")
      .val()
      .trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  $.post("/api/new", newChirp).then(function() {
    location.reload();
  });
});