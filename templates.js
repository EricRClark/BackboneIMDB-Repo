var templates = {};

templates.movie = [

    "<article data-id='<%= movie.id %>'>",
    "<div class='review-img'><img src='<%= movie.posterImg %>'></div>",
    "<div class= 'review-film'>",
    "<h2><%= movie.title %></h2>",
    "<p class = 'review-plot'><%= movie.plot %><p>",
    "<p class = 'review-director'><%= movie.director %><p>",
    "<p class = 'review-rating'<%= movie.rating %></p>",
    "</div>",
    "<h5>Rating: <%= movie.rating %></h5><button class='delete'>delete</button></div>",
    "</article>"
].join('');

templates.edit = [
  '<form id="edit-review">',
    '<input type="text" name="poster" placeholder="poster" value="<%= movies.posterImg %>">',
    '<input type="text" name="title" placeholder="movie title" value="<%= movies.title %>">',
    '<input type="text" name="director" placeholder="director" value="<%= movies.director %>">',
    '<input placeholder="plot review" name="plot" value="<%= movies.plot %>">',
    '<button class="save-edit">save</button>',
  '</form>',
].join("");
