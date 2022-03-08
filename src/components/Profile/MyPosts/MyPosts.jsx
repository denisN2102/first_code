import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  console.log(props);
  let postsElements = props.posts.map((post) => (
    <Post message={post.post} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  return (
    <div className="area">
      <div className={classes.Posts}>
        <h2>My post</h2>
        <div>
          <div>
            <textarea ref={newPostElement} value={props.newPostText}></textarea>
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
