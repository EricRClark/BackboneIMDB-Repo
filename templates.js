var templates = {};

templates.movie = [
  "<img style='' src='<%= posterImg %>'>",
    "<h3><%= title %></h3>",
    "<p><%= desc %></p>",
    "<button class='btn btn-danger delete'>delete</button>",
    "<button class='btn btn-warning showEdit'>Edit</button>",
    "<div class='editSection'>",
      '<div class="form-group">',
    "<input class='form-control editTitle' type='text' value='<%= title %>'>",
    "</div>",
      '<div class="form-group">',
    "<input class='form-control editPosterImg' type='text' value='<%= posterImg %>'>",
    "</div>",
      '<div class="form-group">',
    "<input class='form-control editPlot' type='text' value='<%= desc %>'>",
    "</div>",
    "<button class='editMovie'>Edit Movie</button>",
    "</div>"
].join('');


templates.addMovie = [
  '<form class="">',
    '<div class="form-group">',
      '<label for="title">Title</label>',
    '<input class="form-control" type="text" name="title" placeholder="Title" value="">',
  '</div>',
    '<div class="form-group">',
      '<label for="director">Director</label>',
    '<input class="form-control" type="text" name="director" placeholder="Director" value="">',
  '</div>',
  '<div class="form-group">',
    '<label for="posterImg">Poster Cover</label>',
    '<input class="form-control" type="text" name="coverImg" placeholder="Poster Image URL" value="">',
  '</div>',
  '<div class="form-group">',
'<label for="plot">Plot</label>',
    '<textarea class="form-control" name="desc" rows="8" cols="40" placeholder="Plot"></textarea>',
  '</div>',
    '<button class="btn btn-success" type="submit" name="Submit">Add Movie</button>',
  '</form>'
].join('');


templates.form =
'<button class ="cancel">',
  '<div class="form-group">',
'<form id="newReview">',
          '<input type="text" name="title" value="" placeholder="Movie Title">'
          '<input type="text" name="director" value=""placeholder="Director">'
          '<input type="text" name="posterImg" value="" placeholder="Link to Poster Image">'
          '<input type="text" name="plot" value="" placeholder="Enter Description">'
          '<button class="save-edit">submit</button>'
        '</form>'
      '</div>'
