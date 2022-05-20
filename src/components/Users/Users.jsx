import React, { useState, useEffect } from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../images/219983.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const [shownPages, setShownPages] = useState(20);
  const [pages, setPages] = useState([]);
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // const array1 = array.map((element) => {
  //   return element + 2;
  // });
  // const array2 = array.forEach((element, index, arr) => {
  //   return element + 1;
  // });

  // [1 2 3 4]

  useEffect(() => {
    for (let i = 1; i <= pagesCount; i++) {
      setPages((prievstate) => [...prievstate, i]);
      pages.push(i);
    }
  }, [pagesCount]);

  return (
    <div>
      <button
        onClick={() => {
          setShownPages(shownPages + 5);
        }}
      >
        Button
      </button>
      <div>
        {pages.slice(0, shownPages).map((p, index) => (
          <span
            className={props.currentPage === p ? classes.numbers : null}
            style={{ marginLeft: "5px" }}
            key={index}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile"}>
                <img
                  className={classes.image}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                ></img>
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
