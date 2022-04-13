import React, { useContext, useEffect, useState } from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import StoreContext from "../../StoreContext";

function Dialogs(props) {
  const myContext = useContext(StoreContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, message: "hi" },
    { id: 2, message: "yo" },
    { id: 3, message: "hei" },
    { id: 4, message: "abobys" },
    { id: 5, message: "kekw" },
    { id: 6, message: "jijaroad" },
  ]);

  // let state = props.store.getState().dialogsPage;
  let dialogsElements = myContext.dialogs.map((dialog, index) => (
    <DialogItem key={index} name={dialog.name} id={dialog.id} />
  ));

  // let messagesElements = messages.map((message) => (
  //   <Message message={message.message} />
  // ));

  let newPostsElement = React.createRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  let onSendMessageClick = () => {
    setMessages([...messages, { id: 7, message: value }]);
    // messages.push({ id: 7, message: "text" });
    // let body = newPostsElement.current.value;
    // let action = sendMessageCreator(body);
    // props.dispatch(action.type);

    // newPostsElement.current.value = "";
    setValue("");
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>
          {messages.map((message, index) => (
            <Message key={index} message={message.message} />
          ))}
        </div>
      </div>
      <div className={classes.area}>
        <div>
          <textarea
            ref={newPostsElement}
            onChange={handleChange}
            value={value}
            placeholder="Enter your message"
          ></textarea>
          <button onClick={onSendMessageClick}>
            <span className={classes.txt}>Add post</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
