Template.user_posts.helpers({
  arguments: function () {
    var user = Meteor.user();
    return {
      terms: {
        view: 'userPosts',
        userId: user._id,
        limit: 5
      }
    }
  }
});
