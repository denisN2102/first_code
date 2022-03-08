import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        uptadeNewPostText={props.uptadeNewPostText}
      />
    </div>
  );
}

export default Profile;
