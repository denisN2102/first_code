import React, { createContext } from "react";

const StoreContext = createContext({
  posts: [],
  setPosts: null,
  dialogs: [],
  setDialogs: null,
  messages: [],
  setMessages: null,
});

export default StoreContext;
