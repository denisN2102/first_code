import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Hi, how are you?", likesCount: "22" },
      { id: 2, post: "It's, my first post?", likesCount: "25" },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "hi" },
      { id: 2, message: "yo" },
      { id: 3, message: "hei" },
      { id: 4, message: "abobys" },
      { id: 5, message: "kekw" },
      { id: 6, message: "jijaroad" },
    ],
    dialogs: [
      { id: 1, name: "Denis" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Vlad" },
      { id: 4, name: "Nastya" },
      { id: 5, name: "Dima" },
      { id: 6, name: "Valera" },
    ],
  },
};
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    post: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
