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
  const [isCopied, setIsCopied] = useState(false);
  const [friends, setFriends] = useState<any[]>([]);
  const [textToCopy, setTextToCopy] = useState<string>("");
  useEffect(() => {
    setUsername(username_state);
    setTextToCopy(`https://t.me/monster_mysterybot?start=${username_state}`);
  }, [username_state]);
  const handleCopy = async () => {
    setIsCopied(true);
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
    <div className="max-h-[75vh] max-sm:max-h-[75vh] overflow-auto p-5">
      <ToastContainer />
      <div className="flex justify-center items-center">
        <h1 className=" text-white text-2xl">{friends.length} Refferals</h1>
      </div>
      <div className="flex justify-center items-center align-middle w-full h-12 mt-8">
        <div className="w-[90%] h-12bg-gradient-to-r from-[#567481] to-[#2D4047] text-white rounded-[20px] flex items-center justify-center hover:bg-indigo-400">
          <div className="flex flex-col justify-center items-center">
            <span className="flex justify-center items-center">
              My invite link
            </span>
            <span className="text-[#00E9F8]">
              {textToCopy}
            </span>
          </div>
          <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
            <div
              style={{
                backgroundImage: isCopied
                  ? "url('image/checked.png')"
                  : "url('image/link.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "40px",
                height: "40px",
              }}
            ></div>
          </CopyToClipboard>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <h2 className="text-white text-sm">List of your friends</h2>
        <div className=" rounded-[20px] bg-[#525252] w-full h-16 flex justify-center items-center">
          <select
            name="choice"
            className=" border-none bg-[#525252] text-sm w-[100%] mx-9 focus:border-none focus:outline-none"
          >
            {friends.map((it) => {
              return <option value={it.friend}>{it.friend}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
