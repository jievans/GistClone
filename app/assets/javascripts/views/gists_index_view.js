SessionsTemplate.Views.GistsIndexView = Backbone.View.extend({

  initialize: function(){
    var renderCallback = this.render.bind(this);
    this.listenTo(this.collection, 'change', renderCallback);
  },

  events: {
    "click button" : "toggleFavorite",
  },

  render: function(){
    var $ul = $("<ul>");
    this.collection.each(function(gist){
      var renderedContent = JST["gists/detail"]({gist: gist})
      $ul.append(renderedContent);
    });
    // var renderedContent = JST["gists/index"]({gists: this.collection});
    this.$el.html($ul);
    return this;
  },

  toggleFavorite: function(event){
    var gistID = $(event.target).attr('data-gistID');
    // alert($(event.target).attr('data-gistID'));
    var model = this.collection.get({id: gistID});
    console.log(model.get('favorite'));
    if(model.get('favorite') == false)
    $.ajax({
      type: "POST",
      url: "/gists/" + model.get("id") + "/" + "favorite",
      success: function(){
        model.fetch({
          success: function(model){
            console.log(model);
          },
        });
      },
    });
    else{
      $.ajax({
        type: "DELETE",
        url: "/gists/" + model.get("id") + "/" + "favorite",
        success: function(){
          model.fetch();
        },
      });
    }
  },
});