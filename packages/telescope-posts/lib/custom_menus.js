Posts.getRoute = function () {
  FlowRouter.watchPathChange()
  var viewName = this.label;
  var currentQuery = _.clone(FlowRouter.current().queryParams);
  var newQuery = _.extend(currentQuery, {view: viewName});
  return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);
};

// array containing items in the views menu
Telescope.menuItems.add("viewsMenu", [
  {
    route: Posts.getRoute,
    label: 'My Posts',
    description: 'user_posts'
  },
  {
    route: Posts.getRoute,
    label: 'My Bookmarks',
    description: 'user_bookmarks'
  },
]);
