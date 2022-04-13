import React, { useEffect } from "react";
import StoreContext from "../../StoreContext";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
  const array = [
    { id: 1, name: "babis" },
    { id: 2, name: "FHs" },
    { id: 3, name: "rERE" },
  ];
  let maps = () => {
    array.map((user) => {
      console.log(user.id);
    });
  };

  useEffect(() => {
    // array.map();
    // console.log(array);
    maps();
    return () => {};
  }, []);

  return (
    <div>
      <ProfileInfo />
      <MyPosts />;
    </div>
  );
}

export default Profile;
