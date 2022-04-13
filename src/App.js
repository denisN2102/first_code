import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar/Navbar1";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import StoreContext from "./StoreContext";
import { post, message, dialog } from "./data";
import Users from "./components/Users/UsersCS";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  const [posts, setPosts] = useState([...post]);
  const [messages, setMessages] = useState([...message]);
  const [dialogs, setDialogs] = useState([...dialog]);

  return (
    <StoreContext.Provider
      value={{ posts, setPosts, messages, setMessages, dialogs, setDialogs }}
    >
      <BrowserRouter>
        <div className="app-wrapper">
          {/* <Header /> */}
          <Navbar1 />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/Users" element={<UsersContainer />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route exact path="/dialogs" element={<Dialogs />}></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/music" element={<Music />}></Route>
              <Route path="/setting" element={<Setting />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;
