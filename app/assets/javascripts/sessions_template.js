window.SessionsTemplate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    var $rootEl = $("#root");
   // var $tasks
    var gists = new SessionsTemplate.Collections.Gists();
    var router = new SessionsTemplate
                    .Routers
                    .GistsRouter({collection: gists, $rootEl: $rootEl});

    gists.fetch({
      success: function(collection){
        Backbone.history.start();
      },
    });
  }
};

$(document).ready(function(){
  SessionsTemplate.initialize();
});
