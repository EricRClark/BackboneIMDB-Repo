templates.movieDisplay = [

    "<article data-id='<%= movie.id %>'>",
    "<img src='<%= movie.posterImg %>'>",
    "<div class='title'><h2><%= movie.title %></h2></div>",
    "<p>Plot: <%= movie.plot %><p>",
    "<p>Director: <%= movie.director %><p>",
    "<p>Release Date: <%= movie.release %></p>",
    "<h5>Rating: <%= movie.rating %></h5><button class='delete'>delete</button></div>",
    "</article>"
].join('');
