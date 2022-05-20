import React, { createContext, useState } from "react";

export const Provider = (props) => {
  console.log(props);
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};

const StoreContext = createContext({
  posts: [],
  setPosts: null,
  dialogs: [],
  setDialogs: null,
  messages: [],
  setMessages: null,
  store: [],
  setStore: null,
});

export default StoreContext;
