SessionsTemplate.Models.Gist = Backbone.Model.extend({

  initialize: function(options){
    var collection = new SessionsTemplate
                        .Collections.Gistfiles(options.gistfiles);
    this.set("gistfiles", collection);
  },

  parse: function(data){
    data.gistfiles = new SessionsTemplate.Collections.Gistfiles(data.gistfiles);
    return data;
  },

  toJSON: function(){
    var json = Backbone.Model.prototype.toJSON.call(this);
    debugger;
    json.gistfiles = this.get("gistfiles").toJSON();
    delete json.favorite;

    return json;
  },

});