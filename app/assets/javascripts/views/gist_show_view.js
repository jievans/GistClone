SessionsTemplate.Views.GistShowView = Backbone.View.extend({

  events: {
    "click .tag": "editTags",
  },

  render: function(){
    var theModel = this.model;
    var strappedTags = JSON.parse($('script[type="javascript/json"]').html());
    var tagsCollection = new SessionsTemplate.Collections.Tags(strappedTags);
    var checkedIDs = theModel.get("tags").pluck("id");

    tagsCollection.each(function(tag){
      if (_.contains(checkedIDs, parseInt(tag.get("id")))){
        tag.checkedVal = "checked";
      }
      else {
        tag.checkedVal = "";
      }
    });

    var renderedContent = JST["gists/show"]({gist: theModel,
                                             allTags: tagsCollection,
                                            });
    this.$el.html(renderedContent);
    return this;
  },

  editTags: function(event){
    var ids = $(event.target).parent().serializeJSON().tag_ids;
    debugger
    this.model.set("tag_ids", ids);
    var that = this;
    this.model.save({
      success: function(model){
        model.fetch({
          success: function(){
            that.render();
          }
        });
      },
    });
  },

});