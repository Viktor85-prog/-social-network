import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  removeMessageCreator,
  sendMessageCreator,
  updateNewMessageBadyCreator,
} from "./../../Redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBadyCreator(body));
  };
  let onMessageRemove = () => {
    props.store.dispatch(removeMessageCreator());
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>
          <div>
            <textarea
              className={classes.textatea}
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="сюда жиши"
            ></textarea>
          </div>
          <div>
            <button onClick={onMessageClick}>Send</button>
            <button onClick={onMessageRemove}>Remove</button>
          </div>
          {messagesElements}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
