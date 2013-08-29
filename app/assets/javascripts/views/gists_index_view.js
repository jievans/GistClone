SessionsTemplate.Views.GistsIndexView = Backbone.View.extend({
  render: function(){
    var renderedContent = JST["gists/index"]({gists: this.collection});
    this.$el.html(renderedContent);
    return this;
  },
});