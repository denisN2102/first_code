import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { addPost } from "./redux/state";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  posts={props.state.profilePage.posts}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            ></Route>
            <Route
              exact
              path="/dialogs"
              element={
                <Dialogs
                  messages={props.state.dialogsPage.messages}
                  dialogs={props.state.dialogsPage.dialogs}
                />
              }
            ></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
