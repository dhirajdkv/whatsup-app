// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // const chatProps = useMultiChatLogic(
  //   "da4e3245-f42c-422b-981e-ac29a1ec72c3",
  //   props.user.username,
  //   props.user.secret
  // );
  // return (
  //   <div style={{ height: "100vh" }}>
  //     <MultiChatSocket {...chatProps} />
  //     <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
  //   </div>
  // );
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="da4e3245-f42c-422b-981e-ac29a1ec72c3"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
