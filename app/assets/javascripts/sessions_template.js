window.SessionsTemplate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    var $rootEl = $("#root");

    var gists = new SessionsTemplate.Collections.Gists();

    var IndexViewFunction = SessionsTemplate.Views.GistsIndexView;

    gists.fetch({
      success: function(collection){
        var indexView = new IndexViewFunction({collection: gists });
        $rootEl.html(indexView.render().$el);
      },
    });

    // make our router, pass in $rootEl to router as root
    // href="/#/asdasdasdasd"
    // ""
    // build out initial after initializing router
  }
};

$(document).ready(function(){
  SessionsTemplate.initialize();
});
