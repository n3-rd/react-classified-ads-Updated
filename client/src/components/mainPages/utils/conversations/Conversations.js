import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Conversations.css";
import { getUser } from "../../../../api/ChatReq";
import Avatar from "./peacedp.png";

// export default function Conversations({chatRoom, currentUser}) {
//   const [seller, setSeller] = useState(null);
//   // useEffect(() => {
//   //   const friendId = conversation.members.find((id) => id !== currentUser._id);
//   //   const getUser = async () => {
//   //     try {
//   //       const res = await axios("/user/"+ friendId);
//   //       setuser(res.data)
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   //   getUser()
//   // }, [currentUser, conversation]);
//   useEffect(() => {
//     const sellerInfo = chatRoom.membersInfo.find((member) => member._id !== currentUser._id);
//     setSeller(sellerInfo.name);
//   }, [chatRoom.membersInfo, currentUser._id])
//     return (
//       <div className="conversation">
//         {/* <img
//           src={Avatar}
//           alt="dp"
//           className="dp"
//         /> */}
//         <span className="name">{seller}</span>
//       </div>
//     );
// }
// {
//   user?.name;
// }
// 3d44311a528a4c9299baafadf9070010
// 3d44311a528a4c9299baafadf9070010

const Conversations = ({ data, currentUser }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUser._id);
    // console.log(userId)
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  });

  return (
    <div className="follower conversation">
      <div className="online-dot"></div>
      <img src={userData?.profilePicture} alt="" className="dp followerImage" style={{width:'50px', height:'50px'}}/>
      
    </div>
  );
};
export default Conversations;
