// import axios from "../utils/api";
// import { useSelector, dispatch } from "../store";
// import { updateBalance } from "../store/reducers/wallet";
// import { useEffect, useState } from "react";

import { useState } from "react";

// import { ToastContainer, toast } from "react-toastify";
export default function Task() {
  const [colorTag, setColorTag] = useState<boolean>(false);
  // const username_state = useSelector((state) => state.wallet.user?.username);
  // const balance_state = useSelector((state) => state.wallet.user?.balance);
  // const [username, setUsername] = useState<string>(username_state);
  // const [balance, setBalance] = useState<number>(balance_state);
  // useEffect(() => {
  //   setUsername(username_state);
  //   setBalance(balance_state);
  // }, [username_state, balance_state]);
  const telegramGroupLink = "https://t.me/MikeToken";
  //   const handleJoinTelegramGroup = async () => {
  //   try {
  //     await axios.post(`/earnings/${username}`).then((res) => {
  //       if (res.data.joinTelegram.status) {
  //         if (!res.data.joinTelegram.earned) {
  //           dispatch(updateBalance(username, balance + 1000)).then(() => {
  //             axios.post(`/earnings/update/joinTelegram/${username}`, {
  //               status: true,
  //               earned: true,
  //             });
  //             toast.success("You have received +1000 coins successfully!");
  //           });
  //         } else {
  //           toast.warning("You have already received bonus!");
  //         }
  //       } else {
  //         window.open(telegramGroupLink, "_blank");
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleJoinTelgramChannel = () => {
    window.open(telegramGroupLink, "_blank");
  }
  // const handleSubscribeTelegramChannel = async() => {
  //   try {
  //     await axios.post(`/earnings/${username}`).then((res) => {
  //       if(res.data.subscribeTelegram.status) {
  //         if(!res.data.subscribeTelegram.earned) {
  //           dispatch(updateBalance(username, balance + 1000)).then(() => {
  //             axios.post(`/earnings/update/subscribeTelegram/${username}`, {
  //               status: true,
  //               earned: true,
  //             });
  //             toast.success("You have received +1000 coins successfully!");
  //           })
  //         } else {
  //           toast.warning("You have already received bonus!");
  //         }
  //       } else {
  //         toast.warning("You didn't subscribe Telegram Channel yet! Please join again");
  //       }
  //     })
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }
  const handleDailyTask = () => {
    setColorTag(!colorTag);
  };
  const handleOtherTask = () => {
    setColorTag(!colorTag);
  };
  return (
    <div className="Ranking max-w-full mx-auto text-white max-sm:h-[78vh] mt-12">
      {/* <ToastContainer /> */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <img src="image/assets/task.png" alt="" className=" w-28 h-28" />
        </div>
        <div className="flex justify-center items-center w-[80%] h-11 rounded-[10px] bg-[#394A50]">
          <div
            className={`h-full flex items-center justify-center w-[50%] text-[white] rounded-[10px] ${
              !colorTag
                ? "bg-gradient-to-r from-[#8977C8] to-[#06E2F4]"
                : "bg-[#394A50]"
            }`}
            onClick={handleDailyTask}
          >
            Daily Tasks
          </div>
          <div
            className={`h-full flex items-center w-[50%] justify-center text-[white] rounded-[10px] ${
              colorTag
                ? "bg-gradient-to-r from-[#8977C8] to-[#06E2F4]"
                : "bg-[#394A50]"
            }`}
            onClick={handleOtherTask}
          >
            Other Tasks
          </div>
        </div>

        {!colorTag && (
          <div className="flex flex-col justify-center items-center w-[80%] rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
            <h2
              className="text-[white] text-[xl]"
              style={{ fontFamily: "poppins" }}
            >
              Send your vibe to Mike's TG group and earn some coins
            </h2>
            <div className="flex justify-center items-center  w-full gap-3">
              <button className="bg-[#3C4648] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-[#33CC66] border-solid">
                Let's Go
              </button>
              <button className="bg-[#33CC66] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid">
                Check
              </button>
            </div>
          </div>
        )}
        {!colorTag && (
          <div className="flex justify-center items-center w-[80%] rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
            <h2
              className="text-[white] text-[xl]"
              style={{ fontFamily: "poppins" }}
            >
              Receive your daily coins
            </h2>
            <button className="bg-[#F8B219] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid">
              Receive
            </button>
          </div>
        )}
        {colorTag && (
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <div className="flex flex-col justify-center items-center w-[80%] rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
              <h2
                className="text-[white] text-[xl]"
                style={{ fontFamily: "poppins" }}
              >
                Join Mike's TG Group and Channel
              </h2>
              <div className="flex justify-center items-center  w-full gap-3">
                <button className="bg-[#3C4648] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-[#33CC66] border-solid" onClick={handleJoinTelgramChannel}>
                  Join
                </button>
                <button className="bg-[#33CC66] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid">
                  Check
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[80%] rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
              <h2
                className="text-[white] text-[xl]"
                style={{ fontFamily: "poppins" }}
              >
                Follow Mike's Twitter
              </h2>
              <div className="flex justify-center items-center  w-full gap-3">
                <button className="bg-[#3C4648] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-[#33CC66] border-solid">
                  Join
                </button>
                <button className="bg-[#33CC66] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid">
                  Check
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[80%] rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
              <h2
                className="text-[white] text-[xl]"
                style={{ fontFamily: "poppins" }}
              >
                Subscribe to Mike's YT Channel
              </h2>
              <div className="flex justify-center items-center  w-full gap-3">
                <button className="bg-[#3C4648] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-[#33CC66] border-solid">
                  Join
                </button>
                <button className="bg-[#33CC66] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid">
                  Check
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="flex flex-col justify-center p-7">
        <div
          className="flex items-center h-24 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] hover:bg-zinc-500 rounded-[20px]"
          onClick={handleJoinTelegramGroup}
        >
          <div className="flex justify-start items-center">
            <img src="image/telegram.png" alt="" className=" w-14 h-14" />
            <div className=" flex flex-col justify-start">
              <div className="text-left justify-start items-center text-white ml-3 font-bold">
                Join Our TG Group
              </div>
              <div className="flex justify-start items-center ml-2">
                <img src="image/dollar.png" alt="" className=" w-5 h-5" />
                <span className=" text-amber-400">+1000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-24 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] hover:bg-zinc-500 rounded-[20px]" onClick={handleSubscribeTelegramChannel}>
          <div className="flex justify-start items-center">
            <img src="image/telegram.png" alt="" className=" w-14 h-14" />
            <div className=" flex flex-col justify-start">
              <div className="text-left justify-start items-center text-white ml-3 font-bold">
                Subscribe Our TG Channel
              </div>
              <div className="flex justify-start items-center ml-2">
                <img src="image/dollar.png" alt="" className=" w-5 h-5" />
                <span className=" text-amber-400">+1000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-24 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] hover:bg-zinc-500 rounded-[20px]">
          <div className="flex justify-start items-center">
            <img src="image/twitter.png" alt="" className=" w-14 h-14" />
            <div className=" flex flex-col justify-start">
              <div className="text-left justify-start items-center text-white ml-3 font-bold">
                Follow our X account
              </div>
              <div className="flex justify-start items-center ml-2">
                <img src="image/dollar.png" alt="" className=" w-5 h-5" />
                <span className=" text-amber-400">+1000</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
