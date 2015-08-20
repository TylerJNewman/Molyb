Molyb.Views.NotesIndex = Backbone.View.extend({
  template: JST["notes/index"],

  // className: "container col-sm-12",
  comparator: "updated_at",

  initialize: function () {
    // this.listenTo(this.collection, "sync", this.render);
  },


  render: function () {
    // console.log(this.collection);
    // this.collection.each(function (note){
    //   console.log(note);
    // });
    this.$el.html(this.template());
    this.collection.forEach(this.renderNote.bind(this));
    return this;
  },

  renderNote: function (note) {
     view = new Molyb.Views.NotesIndexItem({model: note, collection: this.collection, tagName: 'li'});
     this.$('#notes-index').prepend(view.render().el);
  }
});
