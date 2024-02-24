# Test Task

## Goal:

Create tweet cards and add interactivity when the button is clicked.

![Card](https://textbook.edu.goit.global/lms-career-homework/uk/img/image-1.jpg)

The general appearance of the card in two states - Follow and Following.

## Execution Criteria:

- Layout is fixed in pixels, semantic, and valid.
- No errors in the browser console.
- Work is done in native JS using bundlers or in React.
- Interactivity works according to the technical task.
- Code is formatted and without comments.
- README.md is described in the repository.

## Technical Task:

1. According to the layout, implement user cards.
2. When clicking the Follow button, the text changes to Following. The button
   color also changes. Additionally, your followers count increases. Initially,
   there are 100,500 followers. Clicking the button increases it to 100,501.
3. After refreshing the page, the final result of the user's actions should be
   fixed. If you click the button and refresh the page, the button remains in
   the Following state with the corresponding color, and the followers count
   does not decrease to the initial value.
4. Upon a second click on the button, its text and color change to the initial
   state. The followers count also decreases by 1 (100,500).
5. The number 100,500 in the code should be specified as a single value
   (100500). In the UI, it should be displayed with a comma (100,500).

Create your personal backend for development using the UI service
[Mocapi](https://mocapi.io/) Create a "users" resource. Use the resource
constructor and describe the user object as specified below.

## User:

1. Create a user in Mockapi with the following fields: id, user, tweets,
   followers, avatar (see screenshot below).
2. Avatar images should have separate URLs in the "avatar" property. You can
   choose them yourself.
3. There should be 12 users with different values (at your discretion) in the
   database. Implement pagination. On one pagination page, display 3 tweets, and
   the rest should be loaded when clicking Load More.
4. Other requirements are similar to the above technical task.

[Maket](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1)

## Additional Task:

Create routing using React Router.

The application should have the following routes. If a user enters a
non-existent route, they should be redirected to the home page.

'/' - Home component, the main page. Styling and design are at your discretion.
'/tweets' - Tweets component, a page displaying tweets. On the tweets page,
there should be a Back button that leads to the main page.

## Add filtering. This should be a dropdown with 3 options (style it as you wish):

- **show all**: Display all tweets.
- **follow**: Display tweets where the state is follow.
- **followings**: Display tweets where the state is following.
