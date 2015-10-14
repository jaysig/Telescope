//My Posts view
Posts.views.add("My Posts", function (terms) {
  return {
    find: {userId: terms.userId},
    options: {limit: 5, sort: {postedAt: -1}}
  };
});
//My Bookmarks
Posts.views.add("My Bookmarks", function (terms) {
  var user = Meteor.users.findOne(terms.userId);
  var postsIds = _.pluck(user.telescope.upvotedPosts, "itemId");
  return {
    find: {_id: {$in: postsIds}, userId: {$ne: terms.userId}}, // exclude own posts
    options: {limit: 5, sort: {postedAt: -1}}
  };
});
