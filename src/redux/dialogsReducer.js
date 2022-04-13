const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "yo" },
    { id: 3, message: "hei" },
    { id: 4, message: "abobys" },
    { id: 5, message: "kekw" },
    { id: 6, message: "jijaroad" },
  ],
  dialogs: [
    { id: 1, name: "Denis" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Vlad" },
    { id: 4, name: "Nastya" },
    { id: 5, name: "Dima" },
    { id: 6, name: "Valera" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      // state.newMessageBody = "";
      // state.messages.push({ id: 7, message: body });
      return state;
    default:
      return state;
  }
  // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
  //   state.newMessageBody = action.body;
  // } else if (action.type === SEND_MESSAGE) {
  //   let body = state.newMessageBody;
  // }
};
// export const sendMessageCreator = (body) => {
//   return {
//     type: SEND_MESSAGE,
//     message: body,
//   };
// };
export default dialogsReducer;
