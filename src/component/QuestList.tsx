import { ChangeEvent, useEffect, useState } from "react";
import { dispatch, useSelector } from "../store";
import { toast, ToastContainer } from "react-toastify";
import { updateBalance, addFriend } from "../store/reducers/wallet";
export default function QuestList() {
  const username_state = useSelector((state) => state.wallet.user?.username);
  const balance_state = useSelector((state) => state.wallet.user?.balance);
  const friend_state = useSelector((state) => state.wallet.friend);
  const [balance, setBalance] = useState<number>(balance_state);
  const [username, setUsername] = useState<string>(username_state);
  const [friendName, setFriendName] = useState<string>("");
  const handleInvite = async () => {
    if (friendName != username) {
      if (friend_state) {
        if (balance < 801) {
          dispatch(updateBalance(username, balance + 200));
        } else {
          dispatch(updateBalance(username, 1000));
          toast.error("Your balance is over 1000 coins");
        }
        toast.success("Invite Friend succesfully!");
      } else {
        toast.error("Friend is invalid");
      }
    } else {
      toast.error("Friend is you, please enter friend name again");
    }
    //
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addFriend(e.target.value));
    setFriendName(e.target.value);
  };
  useEffect(() => {
    setUsername(username_state);
    setBalance(balance_state);
  }, [username_state, balance_state, friend_state]);
  const [isCopied, setIsCopied] = useState(false);
  const text = `https://t.me/monster_mysterybot?start=${username}`;
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Copied to clipboard!"); // optional, for displaying a success notification
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <div className="max-h-[75vh] max-sm:max-h-[75vh] overflow-auto p-5">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-white text-3xl">Invite friends!</h1>
        <p className=" text-white">You and your friend will receive bonuses</p>
      </div>
      <div className="flex items-center h-24 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] rounded-[20px]">
        <div className="flex justify-start items-center">
          <img src="image/bonus.png" alt="" className=" w-14 h-14" />
          <div className=" flex flex-col justify-start">
            <div className="text-left justify-start items-center text-white ml-3 font-bold">
              Invite a friend
            </div>
            <div className="flex justify-start items-center ml-2">
              <img src="image/dollar.png" alt="" className=" w-5 h-5" />
              <span className=" text-amber-400">+200</span>
              <span>&nbsp;&nbsp;&nbsp;for you and your friend</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center h-24 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] rounded-[20px]">
        <div className="flex justify-start items-center">
          <img src="image/bonus.png" alt="" className=" w-14 h-14" />
          <div className=" flex flex-col justify-start">
            <div className="text-left justify-start items-center text-white font-bold ml-3">
              Invite a friend with Telegram premium
            </div>
            <div className="flex justify-start items-center ml-2">
              <img src="image/dollar.png" alt="" className=" w-5 h-5" />
              <span className=" text-amber-400">+500</span>
              <span>&nbsp;&nbsp;&nbsp;for you and your friend</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <h2 className="text-white text-sm">List of your friends</h2>
        <div className=" rounded-[20px] bg-[#525252] w-full h-16 flex justify-center items-center">
          <input
            type="text"
            placeholder="You haven't invited anyone yet"
            className=" border-none bg-[#525252] text-sm w-[100%] mx-9 focus:border-none focus:outline-none"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="w-[80%] h-12 bg-indigo-600 text-white rounded-[20px] flex justify-center items-center mt-8 hover:bg-indigo-400"
          onClick={handleInvite}
        >
          <span className="flex justify-center items-center">
            Invite a friend
          </span>
        </div>
        <div className="h-12" onClick={handleCopy}>
          {isCopied ? (
            <img src="image/checked.png" alt="" className=" w-10 h-10" />
          ) : (
            <img src="image/link.png" alt="" className=" w-10 h-10" />
          )}
        </div>
      </div>
    </div>
  );
}
