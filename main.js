$(document).ready(function() {

    page.init();

});

var movieCollection = new MovieCollection(movies);

var page = {
    movieTmpl: _.template(templates.movie),
    init: function() {
        page.initStyling();
        page.initEvents();
        page.addAll();
    },


    initStyling: function() {
        page.addAll();
        // page.addOne();- either use in addAll
    },


    initEvents: function(events) {
        $('.submitContainer').on('click', '.delete', page.deleteMovie);
        $('.submitContainer').on('click', '.edit', page.saveMovieEdit);
        $('.submitContainer').on('click', '#submit-edit', page.submitEdit);
        $('#submit').on('click', page.saveMovieEdit);
        $('.container').on('click', '.toCreate', page.updateRev);
        $('#newReview').on('click', '.save-edit', page.subNewReview);
        $('#newReview').on('click', '.cancel', page.cancelRev);


    },


    deleteMovie: function(event) {
        event.preventDefault();
        var movieId = $(this).closest('article').data('id');
        movieCollection.remove(movieId);
        page.addAll();
    },

    submitEdit: function(event) {
        event.preventDefault();
        var editSave = {
            title: $('.submitContainer input[name="title"]').val(),
            director: $('.submitContainer input[name="director"]').val(),
            release: $('.submitContainer input[name="release"]').val(),
            posterImg: $('.submitContainer input[name="posterImg"]').val(),
            plot: $('.submitContainer input[name="plot"]').val(),
        };
        var saveEditMovie = new MovieModel(editSave);
        var movieId = $(this).closest('article').data('id');
        movieCollection.get(movieId).set(editSave);
        page.addAll();


    },

    saveMovieEdit: function(event) {
        event.preventDefault();
        var editTmpl = _.template(templates.edit);
        var title = $(this).closest('article').find('h2').text();
        var director = $(this).closest('article').find('.review-director').text();
        var rating = $(this).closest('article').find('.review-rating').text();
        var posterImg = $(this).closest('article').find('img').prop('src');
        var plot = $(this).closest('article').find('.review-plot').text();
        var myMovieEdits = {
            title: title,
            director: director,
            release: release,
            posterImg: img,
            plot: plot
        }
        $(this).closest('article').html(editTmpl({
            movies: myMovieEdits
        }))
    },
    displayEdit: function(event) {
        event.preventDefault();
        var cid = $(this).parent().data('id');
        var myModel = MovieCollection.get(cid);
    },

    updateRev: function(event) {
        event.preventDefault();
        $('#updateRev').removeClass('active');
        $('#newReview').addClass('active');
    },
    cancelRev: function(event) {
        event.preventDefault();
        $('#newReview').removeClass('active');
        $('#updateRev').addClass('active');
    },

    subNewReview: function(event) {
        event.preventDefault();

        var newMovieObj = {
            title: $('input[name="newTitle"]').val(),
            desc: $('input[name="newDesc"]').val(),
            director: $('input[name="newDirector"]').val(),
            posterImg: $('input[name="newPoster"]').val()
        };
        var saveNewMovie = new MovieModel(newMovieObj);
        var movieId = $(this).closest('article').data('id');
        movieCollection.add(newMovieObj);
        page.addAll();

        $('#newReview').removeClass('active');
        $('#updateRev').addClass('active');

    },

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
