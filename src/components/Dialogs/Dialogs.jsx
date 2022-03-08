import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink, Link } from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

function Dialogs(props) {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newPostElem = React.createRef();
  let addPost = () => {
    let text1 = newPostElem.current.value;
    alert(text1);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      <div className={classes.area}>
        <div>
          <textarea ref={newPostElem}></textarea>
          <button onClick={addPost}>
            <span className={classes.txt}>Add post</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
