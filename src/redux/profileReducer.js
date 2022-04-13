let initialState = {
  posts: [
    { id: 1, post: "Hi, how are you?", likesCount: "22" },
    { id: 2, post: "It's, my first post?", likesCount: "25" },
  ],
};

const profileReducer = (state = initialState, action) => {
  if (action.type === "ADD-POST") {
    let newPost = {
      id: 5,
      post: action.postMessage,
      likesCount: 0,
    };
    state.posts.push(newPost);
  }

  return state;
};

export const addPostActionCreator = (text) => {
  return {
    type: "ADD-POST",
    postMessage: text,
  };
};

export default profileReducer;
