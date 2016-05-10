var FormView = Backbone.View.extend({
 collection: null,
 model: null,
 template: _.template(templates.addMovie),
 events: {
   'submit form': 'addMovie'
 },
 addMovie: function (event) {
   event.preventDefault();
   this.model.set({
     title: this.$el.find('input[name="title"]').val(),
     author: this.$el.find('input[name="author"]').val(),
     posterImg: this.$el.find('input[name="posterImg"]').val(),
     plot: this.$el.find('textarea').val()
   });
   this.$el.find('input').val('');
   this.$el.find('textarea').val('');
   this.collection.add(this.model);
   console.log(this.collection);
   this.model = new MovieModel({});

 },
 initialize: function () {
   if(!this.model) {
     this.model = new MovieModel({});
   }
 },
 render: function () {
   var markup = this.template(this.model.toJSON());
   this.$el.html(markup);
   return this;
 }
});
var MovieView = Backbone.View.extend({
   model: null,
   tagName: 'article',
   template: _.template(templates.movie),
   events: {
     'click .delete': 'removeMovie',
     'click .showEdit': 'toggleEdit',
     'click .editMovie': 'editMovie'
   },
   editMovie: function (event) {
     event.preventDefault();

     this.model.set({
     title: this.$el.find('.editTitle').val(),
       coverImg: this.$el.find('.editPosterImg').val(),
       desc: this.$el.find('.editPlot').val()
     });


   },
   toggleEdit: function () {
     this.$el.find('.editSection').toggleClass('editing');
   },
   removeMovie: function () {
     this.model.destroy();

   },
   alertMe: function (event) {
     // event.preventDefault();
     alert(this.model.toJSON().title);
   },
   initialize: function () {
     console.log(this.model);
     this.listenTo(this.model, 'change', this.render);
   },
   render: function () {
     var markup = this.template(this.model.toJSON());
     this.$el.html(markup);
     return this;
   }
 });

var ListView = Backbone.View.extend({
   collection: null,
   el: '.submitContainer',
   initialize: function () {
     this.addAll();
     this.listenTo(this.collection, 'update', this.addAll);

   },
   addOne: function (el) {
     var modelView = new MovieView({model: el});
     this.$el.append(modelView.render().el);
   },
   addAll: function () {
       $('.content').html('');
       _.each(this.collection.models, this.addOne, this);
   }
 });
