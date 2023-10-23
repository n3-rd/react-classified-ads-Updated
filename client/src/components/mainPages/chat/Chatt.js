import "./chatt.css";
import { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../../globalState";
import { userChat } from "../../../api/ChatReq";
import Conversations from "../utils/conversations/Conversations";

const Chatt = () => {
  const state = useContext(GlobalState);
  const [user] = state.userAPI.user;
  console.log(user);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChat(user._id);
        setChats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div>
                <Conversations data={chat} currentUser={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="Right-side-chat">
        <h2>Right</h2>
      </div>
    </div>
  );
};
export default Chatt;
