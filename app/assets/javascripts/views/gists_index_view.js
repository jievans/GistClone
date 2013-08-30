SessionsTemplate.Views.GistsIndexView = Backbone.View.extend({

  initialize: function(){
    var renderCallback = this.render;
   // debugger
    this.listenTo(this.collection, 'change', renderCallback);
  //  this.listenTo(this.collection, 'sync', renderCallback);
    this.listenTo(this.collection, 'sync', renderCallback);
  },

  events: {
    "click button" : "toggleFavorite",
    "submit form" : "submitGist"
  },

  render: function(){
    console.log("rendering");
    var $ul = $("<ul>");
    var $form = $(JST["gists/form"]());
    var $fileForm = JST["gistfiles/form_part"]();
    $form.find("input[type='text']").last().after($fileForm);
    this.collection.each(function(gist){
      var renderedContent = JST["gists/detail"]({gist: gist})
      $ul.append(renderedContent);
    });
    // var renderedContent = JST["gists/index"]({gists: this.collection});
    this.$el.html($ul);
    this.$el.append($form);
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

  submitGist: function(event){
    event.preventDefault();
    var data = $(event.target).serializeJSON();
    // var newGist = new SessionsTemplate.Models.Gist(data["gist"]).save();
    this.collection.create(data["gist"]);

    // var model = this.collection.at(this.collection.length - 1);
  //   model.set("favorite", "false");
  //   console.log(model);
  },
});