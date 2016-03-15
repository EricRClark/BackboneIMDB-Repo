var templates = {};

templates.movie = [

    "<article data-id='<%= movie.id %>'>",
    "<img src='<%= movie.posterImg %>'>",
    "<div class='title'><h2><%= movie.title %></h2></div>",
    "<p>Plot: <%= movie.plot %><p>",
    "<p>Director: <%= movie.director %><p>",
    "<p>Release Date: <%= movie.release %></p>",
    "<h5>Rating: <%= movie.rating %></h5><button class='delete'>delete</button></div>",
    "</article>"
].join('');

$(document).ready(function() {

    page.init();

});

var movieCollection = new MovieCollection(movies);

var page = {
    movieTmpl: _.template(templates.movie),
    init: function() {
        // page.initStyling();
        page.initEvents();
        page.addAll();
    },


// initStyling: function () {
//   //  page.addAll();
//   //  page.addOne();
// },


initEvents: function(events) {
        $('.submitContainer').on('click', '.delete', page.deleteMovie);
        $('.submitContainer').on('click', '.edit', page.displayEdit);
        $('.submitContainer').on('click', '#submit-edit', page.submitEdit);
        $('#submit').on('click', page.saveMovieEdit);
        $('body').on('dblclick', "h3", page.contentEditable);
        $('body').on('blur', "h3", page.submitContentEditable);

    },


    deleteMovie: function(event) {
        event.preventDefault();
        var movieId = $(this).closest('article').data('id');
        movieCollection.remove(movieId);
        page.addAll();
    },

    submitEdit: function(event) {
        event.preventDefault();
        var newMovie = {
            title: $('.submitContainer input[name="title"]').val(),
            director: $('.submitContainer input[name="director"]').val(),
            release: $('.submitContainer input[name="release"]').val(),
            posterImg: $('.submitContainer input[name="posterImg"]').val(),
            plot: $('.submitContainer input[name="plot"]').val(),
        };
        var myMovie = new MovieModel(newMovie);
        var movieId = $(this).closest('article').data('id');
        movieCollection.add(myMovie);
        console.log(movieCollection);
        page.addAll();
    },

    saveMovieEdit: function(event) {
        event.preventDefault();

        var title = $('input[name="title"]').val();
        var director = $('input[name="director"]').val();
        var release = $('input[name="release"]').val();
        var posterImg = $('input[name="posterImg"]').val();
        var plot = $('input[name="plot"]').val();
        var myMovieEdits = {
            title: title,
            director: director,
            release: release,
            posterImg: img,
            plot: plot
        };

        var movieId = $(this).closest('article').data('id');
        movieCollection.get(movieId).set(myMovieEdits);
        page.addAll();

    },

    displayEdit: function(event) {
      event.preventDefault();
      var cid = $(this).parent().data('id');
      var myModel = MovieCollection.get(cid);
    },

//     contentEditable: function (event) {
//       event.preventDefault ();
//       $(this).attr("contentEditable", true);
//
//     }
// submitContentEditable: function (event) {
//   event.preventDefault();
//   var cid = $(this).parent().data('id');
//   var myObj = {
//     title: $(this).text
//   }
// var myModel =
// }
    addOne: function(element) {
        element.attributes.id = element.cid;
        var markup = page.movieTmpl({
            movie: element.toJSON()
        });
        $('.container').append(markup);
    },

    addAll: function() {
        $('.container').html('');
        _.each(movieCollection.models, page.addOne);
    },
  };
