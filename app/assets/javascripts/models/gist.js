SessionsTemplate.Models.Gist = Backbone.Model.extend({

  // initialize: function(attributes, options){
    //     var collection = new SessionsTemplate
    //                         .Collections.Gistfiles(attributes.gistfiles);
    //
    //     this.set("gistfiles", collection);
    //   },

  // initialize: function(){
 //    // options = options || {};
 //  //   options.parse = true;
 //    // console.log(this.attributes);
 //  },

  parse: function(data){
    data.gistfiles = new SessionsTemplate.Collections.Gistfiles(data.gistfiles);
    data.tags = new SessionsTemplate.Collections.Tags(data.tags);
    return data;
  },

  toJSON: function(){
    var json = Backbone.Model.prototype.toJSON.call(this);
    json.gistfiles = this.get("gistfiles").toJSON();
    if(!json.tag_ids){
      json.tag_ids = this.get("tags").pluck("id");
    }
    delete json.favorite;
    delete json.tags;
    return json;
  },

});

////// TODO: incorporate Tags into toJSON, also into initialize