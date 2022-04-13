import React, { useContext, useEffect, useState } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "./../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

function MyPosts() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const myContext = useContext(StoreContext);

  let postsElements = myContext.posts.map((post, index) => (
    <Post key={index} message={post.post} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    myContext.setPosts([
      ...myContext.posts,
      { id: null, post: value, likesCount: 10 },
    ]);
    setValue("");
    // let text = newPostElement.current.value;
    // let action = addPostActionCreator(text);
    // myContext.dispatch(action);
    // newPostElement.current.value = "";
  };
  // useEffect(() => {
  //   console.log(myContext);

  //   return () => {};
  // }, []);
  return (
    <div className="area">
      <div className={classes.Posts}>
        <h2>My post</h2>
        <div>
          <div>
            <textarea
              onChange={handleChange}
              ref={newPostElement}
              value={value}
            ></textarea>
          </div>
          <div>
            <button onClick={addPost} className={classes.buttonPosts}>
              <div className={classes.txtPosts}>Add post</div>
            </button>
          </div>
        </div>
        <div className={classes.Posts}>{postsElements}</div>
      </div>
    </div>
  );
}

export default MyPosts;

const babak = () => {
  return <footer></footer>;
};
