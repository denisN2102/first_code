import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
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
      newMessageBody: "",
    },
    sidebar: {},
  },
  _rerenderEntireTree() {
    console.log("State  changed");
  },

  getState() {
    return this._state;
  },

  // addPost(postMessage) {
  //   let newPost = {
  //     id: 5,
  //     post: postMessage,
  //     likesCount: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._rerenderEntireTree(this._state);
  // },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._rerenderEntireTree(this._state);

    // if (action.type === "ADD-POST") {
    //   let newPost = {
    //     id: 5,
    //     post: action.postMessage,
    //     likesCount: 0,
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._rerenderEntireTree(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.dialogsPage.newMessageBody = action.body;
    //   this._rerenderEntireTree(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let body = (this._state.dialogsPage.newMessageBody = action.body);
    //   this._state.dialogsPage.newMessageBody = "";
    //   this._state.dialogsPage.messages.push({ id: 7, message: body });
    //   this._rerenderEntireTree(this._state);
    // }
  },
};

export default store;

window.store = store;
