SessionsTemplate.Routers.GistsRouter = Backbone.Router.extend({

  initialize: function(options){
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "gists/:id": "show",
  },

  index: function(){
    var IndexViewFunction = SessionsTemplate.Views.GistsIndexView;
    var indexView = new IndexViewFunction({collection: this.collection});
    this.$rootEl.html(indexView.render().$el);
  },

  show: function(id){
    console.log("you're arriving where you want");
    var model = this.collection.get(id);
    var showView = new SessionsTemplate
                       .Views
                       .GistShowView({model: model});
    this.$rootEl.html(showView.render().$el);
  },

});