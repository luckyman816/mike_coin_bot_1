/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSelector } from "../store";
import { toast, ToastContainer } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "../utils/api";
import "../css/font.css";
// import { CopyToClipboard } from "react-copy-to-clipboard";
export default function QuestList() {
  const username_state = useSelector((state) => state.wallet.user?.username);
  const [username, setUsername] = useState<string>(username_state);
  const [friends, setFriends] = useState<any[]>([]);
  const [textToCopy, setTextToCopy] = useState<string>("");
  useEffect(() => {
    setUsername(username_state);
    setTextToCopy(`https://t.me/monster_mysterybot?start=${username_state}`);
  }, [username_state]);
  const handleCopy = async () => {
    toast.success("Copied to clipboard!");
  };
  useEffect(() => {
    if (username) {
      axios.post(`/friend/${username}`).then((res) => {
        setFriends(res.data);
      });
    }
  });
  console.log("friends", friends);
  console.log("textToCopy", textToCopy);
  return (
    <div className="max-h-[75vh] max-sm:max-h-[75vh] overflow-auto p-5 flex flex-col justify-center items-center gap-2">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-white text-3xl" style={{ fontFamily: "spicy" }}>
          {friends.length} Refferals
        </h1>
        <h1
          className=" text-[#33CC66] text-2xl"
          style={{ fontFamily: "poppins" }}
        >
          + 1000
        </h1>
      </div>
      <div className="flex justify-center items-center align-middle w-full mt-8">
        <div className="w-[90%] bg-gradient-to-r from-[#567481] to-[#2D4047]  text-white rounded-[20px] flex items-center justify-center p-5">
          <div className="flex flex-col justify-center items-center gap-2">
            <span
              className="flex justify-center items-cente text-2xl"
              style={{ fontFamily: "spicy" }}
            >
              My invite link
            </span>
            <span
              className="text-[#00E9F8]"
              style={{
                maxWidth: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {textToCopy}
            </span>
          </div>
          <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
            <div className="bg-gradient-to-r flex justify-center items-center gap-5 from-[#806FC0] to-[#14D6F0] p-3 rounded-[8px]">
              <img src="/image/assets/copy.png" alt="" className="w-4 h-4" />
              <h2
                className="text-sm text-[white]"
                style={{ fontFamily: "poppins" }}
              >
                Copy
              </h2>
            </div>
          </CopyToClipboard>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-start items-center">
          <h2
            className="text-white text-3xl mb-6"
            style={{ fontFamily: "spicy" }}
          >
            My Refferals :
          </h2>
        </div>
        {friends.length == 0 ? (
          <div className="flex flex-col justify-center items-center gap-9">
            <h2
              className="text-[white] text-xl"
              style={{ fontFamily: "poppins" }}
            >
              You don't have refferal!
            </h2>
            <img src="image/assets/noRefferal.png" alt="" className="w-7 h-7" />
          </div>
        ) : (
          <div className="max-h-[40vh] max-sm:max-h-[40vh] overflow-auto">
            {friends.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  index > 0 && "my-3"
                } px-3 py-2 items-center bg-[#363636] rounded-lg w-[70%] text-[white]`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
