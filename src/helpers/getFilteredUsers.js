export const getFilteredUsers = (users, filter, followingUsers) => {
  switch (filter) {
    case 'show all':
      return users;
    case 'follow':
      return users.filter(
        user =>
          !followingUsers.some(followingUserId => followingUserId === user.id)
      );
    case 'followings':
      return users.filter(user =>
        followingUsers.some(followingUserId => followingUserId === user.id)
      );
    default:
      return users;
  }
};
