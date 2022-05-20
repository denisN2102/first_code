const SET_USER_PROFILE = "SET_USER_PROFILE";
const ADD_POST = "ADD_POST";

let initialState = {
  posts: [
    { id: 1, post: "Hi, how are you?", likesCount: "22" },
    { id: 2, post: "It's, my first post?", likesCount: "25" },
  ],
  profile: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: action.postMessage,
        likesCount: 0,
      };
      state.posts.push(newPost);
      return state;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
  }
  return state;
};

export const addPostActionCreator = (text) => {
  return {
    type: "ADD-POST",
    postMessage: text,
  };
};
export const setUserProfile = (profile) => ({
  type: "SET_USER_PROFILE",
  profile,
});

export default profileReducer;
