import axios from "../utils/api";
import { useSelector, dispatch } from "../store";
import { updateBalance, updateDailyCoins } from "../store/reducers/wallet";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../component/modal";
import moment from "moment";
import Footer from "../component/Footer";
export default function Task() {
  const [colorTag, setColorTag] = useState<boolean>(false);
  const username_state = useSelector((state) => state.wallet.user?.username);
  const balance_state = useSelector((state) => state.wallet.user?.balance);
  const daily_coins_state = useSelector(
    (state) => state.wallet.user?.daily_coins
  );
  const [username, setUsername] = useState<string>(username_state);
  const [balance, setBalance] = useState<number>(balance_state);
  const [daily_coins, setDailyCoins] = useState<moment.Moment | null>(
    daily_coins_state ? moment(daily_coins_state) : null
  );
  const [diffDays, setDiffDays] = useState<number>(0);
  const [diffHours, setDiffHours] = useState<number>(0);
  const [diffMinutes, setDiffMinutes] = useState<number>(0);
  const [diffSeconds, setDiffSeconds] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      calculateDifference(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const calculateDifference = (currentDateTime: moment.Moment) => {
    if (daily_coins) {
      const dateDiff = daily_coins
        ? currentDateTime.diff(daily_coins, "seconds")
        : 0;
      setDiffDays(Math.floor(dateDiff / (60 * 60 * 24)));
      setDiffHours(Math.floor((dateDiff % (60 * 60 * 24)) / (60 * 60)));
      setDiffMinutes(Math.floor((dateDiff % (60 * 60)) / 60));
      setDiffSeconds(Math.floor(dateDiff % 60));
    }
  };
  console.log(
    `${moment()} ${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`
  );
  useEffect(() => {
    setUsername(username_state);
    setBalance(balance_state);
    setDailyCoins(daily_coins_state ? moment(daily_coins_state) : null);
  }, [username_state, balance_state, daily_coins_state, setDailyCoins]);
  const telegramGroupLink = "https://t.me/MikeToken";
  const telegramChannelLink = "https://t.me/MikeTokenAnn";
  const twitterChannelLink = "https://twitter.com/MikeTokenio";
  const handleLetsGoTelegramGroup = () => {
    window.open(telegramGroupLink, "_blank");
  };
  const handleJoinTelgramGroup = () => {
    window.open(telegramGroupLink, "_blank");
  };
  const handleJoinTelegramChannel = () => {
    window.open(telegramChannelLink, "_blank");
  };
  const handleTwitterChannel = () => {
    window.open(twitterChannelLink, "_blank");
  };
  const handleJoinTelegramGroupCheck = async () => {
    try {
      fetch("https://relaxing-dane-lively.ngrok-free.app/joinTG", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username: username }),
      }).then(async () => {
        await axios.post(`/earnings/${username}`).then((res) => {
          if (res.data.joinTelegram.status) {
            if (!res.data.joinTelegram.earned) {
              dispatch(updateBalance(username, balance + 1000)).then(() => {
                axios.post(`/earnings/update/joinTelegram/${username}`, {
                  status: true,
                  earned: true,
                });
                toast.success("You have received +1000 coins successfully!");
              });
            } else {
              toast.warning("You have already received bonus!");
            }
          } else {
            toast.warning(
              "You didn't join Telegram Channel yet! Please join again"
            );
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubscribeTelegramChannelCheck = async () => {
    try {
      fetch("https://relaxing-dane-lively.ngrok-free.app/joinTC", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username: username }),
      }).then(async () => {
        await axios.post(`/earnings/${username}`).then((res) => {
          if (res.data.subscribeTelegram.status) {
            if (!res.data.subscribeTelegram.earned) {
              dispatch(updateBalance(username, balance + 1000)).then(() => {
                axios.post(`/earnings/update/subscribeTelegram/${username}`, {
                  status: true,
                  earned: true,
                });
                toast.success("You have received +1000 coins successfully!");
              });
            } else {
              toast.warning("You have already received bonus!");
            }
          } else {
            toast.warning(
              "You didn't subscribe Telegram Channel yet! Please join again"
            );
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleTwitterChannelCheck = async () => {
    await axios.post(`/earnings/${username}`).then((res) => {
      if (!res.data.followTwitter.earned) {
        dispatch(updateBalance(username, balance + 1000)).then(() => {
          axios.post(`/earnings/update/followTwitter/${username}`, {
            status: true,
            earned: true,
          });
          toast.success("You have received +1000 coins successfully!");
        });
      } else {
        toast.warning("You have already received bonus!");
      }
    });
  };

  const handleDailyTask = () => {
    setColorTag(!colorTag);
  };
  const handleOtherTask = () => {
    setColorTag(!colorTag);
  };
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
  const handleOpenReceiveModal = () => {
    setIsReceiveModalOpen(true);
  };
  const handleCloseReceiveModal = () => {
    setIsReceiveModalOpen(false);
  };
  const receivedCoins = () => {
    if (diffDays > 0) {
      dispatch(updateBalance(username, balance + diffDays * 1000)).then(() => {
        dispatch(updateDailyCoins(username, moment())).then(() => {
          toast.success("You have received " + diffDays * 1000 + " coins!");
          setIsReceiveModalOpen(false);
        });
      });
    } else {
      toast.warning("Please wait for the next day!");
    }
  };
  const handleLetsGoTelegramGroupCheck = async () => {
    try {
      await axios.post(`/vibe/${username}`).then((res) => {
        if (
          Math.floor(
            moment().diff(res.data[0]["vibe_date"], "seconds") / (60 * 60 * 24)
          ) >= 1 &&
          res.data[0]["message"]
        ) {
          dispatch(updateBalance(username, balance + 1000)).then(() => {
            axios.post(`/vibe/updateVibe/${username}`, {
              vibe_date: moment(),
            });
            axios.post(`/vibe/updateMessage/${username}`, { message: false });
            toast.success("You have received +1000 coins successfully!");
          });
        } else {
          toast.warning("Did you post a vibe in Channel? \n Or please wait for 24 hours!");
        }
      });
    } catch (err) {
      console.log(err);
      toast.warning(" Please join Telegram Channel");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-4 w-full mt-11">
          <div className="flex flex-col justify-center items-center">
            <img src="image/assets/task.png" alt="" className=" w-28 h-28" />
          </div>
          <div className="flex justify-center items-center w-[90%] h-11 rounded-[10px] bg-[#394A50]">
            <div
              className={`h-full cursor-pointer flex items-center justify-center w-[50%] text-[white] rounded-[10px] ${!colorTag
                  ? "bg-gradient-to-r from-[#8977C8] to-[#06E2F4]"
                  : "bg-[#394A50]"
                }`}
              onClick={handleDailyTask}
            >
              Daily Tasks
            </div>
            <div
              className={`h-full cursor-pointer flex items-center w-[50%] justify-center text-[white] rounded-[10px] ${colorTag
                  ? "bg-gradient-to-r from-[#8977C8] to-[#06E2F4]"
                  : "bg-[#394A50]"
                }`}
              onClick={handleOtherTask}
            >
              Other Tasks
            </div>
          </div>

          {!colorTag && (
            <div className="flex flex-col justify-center items-center w-[90%] rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
              <h2
                className="text-[white] text-[xl]"
                style={{ fontFamily: "poppins" }}
              >
                Send your vibe to Mike's TG group and earn some coins
              </h2>
              <div className="flex justify-center items-center  w-full gap-3">
                <button
                  className="bg-[#3C4648] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-[#33CC66] border-solid"
                  onClick={handleLetsGoTelegramGroup}
                >
                  Let's Go
                </button>
                <button
                  className="bg-[#33CC66] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid"
                  onClick={handleLetsGoTelegramGroupCheck}
                >
                  Check
                </button>
              </div>
            </div>
          )}
          {!colorTag && (
            <div className="flex justify-center items-center w-[90%] rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
              <h2
                className="text-[white] text-[xl]"
                style={{ fontFamily: "poppins" }}
              >
                Receive your daily coins
              </h2>
              <button
                className="bg-[#F8B219] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid"
                onClick={handleOpenReceiveModal}
              >
                Receive
              </button>
            </div>
          )}
          {colorTag && (
            <div className="flex flex-col justify-center items-center gap-3 w-[90%]">
              <div className="flex flex-col justify-center items-center w-full rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
                <h2
                  className="text-[white] text-[xl]"
                  style={{ fontFamily: "poppins" }}
                >
                  Join Mike's TG Group
                </h2>
                <div className="flex justify-center items-center  w-full gap-3">
                  <button
                    className="bg-[#3C4648] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-[#33CC66] border-solid"
                    onClick={handleJoinTelgramGroup}
                  >
                    Join
                  </button>
                  <button
                    className="bg-[#33CC66] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid"
                    onClick={handleJoinTelegramGroupCheck}
                  >
                    Check
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
                <h2
                  className="text-[white] text-[xl]"
                  style={{ fontFamily: "poppins" }}
                >
                  Subscribe Mike's TC Channel
                </h2>
                <div className="flex justify-center items-center  w-full gap-3">
                  <button
                    className="bg-[#3C4648] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-[#33CC66] border-solid"
                    onClick={handleJoinTelegramChannel}
                  >
                    Join
                  </button>
                  <button
                    className="bg-[#33CC66] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid"
                    onClick={handleSubscribeTelegramChannelCheck}
                  >
                    Check
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full rounded-[10px] bg-gradient-to-r from-[#556165] to-[#293135] p-3 gap-2">
                <h2
                  className="text-[white] text-[xl]"
                  style={{ fontFamily: "poppins" }}
                >
                  Follow Mike's Twitter
                </h2>
                <div className="flex justify-center items-center  w-full gap-3">
                  <button
                    className="bg-[#3C4648] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-[#33CC66] border-solid"
                    onClick={handleTwitterChannel}
                  >
                    Join
                  </button>
                  <button
                    className="bg-[#33CC66] text-[white] w-[40%] rounded-[10px] flex justify-center items-center text-[16px] gap-2 border-[1px] border-white border-solid"
                    onClick={handleTwitterChannelCheck}
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer/>
        <Modal isOpen={isReceiveModalOpen} onClose={handleCloseReceiveModal}>
          <div className="flex flex-col items-center align-middle gap-3">
            <img
              src="image/assets/sand-timer.png"
              alt=""
              className=" w-12 h-12"
            />
            <h1 className="text-2xl text-white">Daily Coins</h1>
            <p className=" text-sm ngtext-white">You can get the Daily Coins!</p>
            <h2 className=" text-xl text-white">
              Remaining Time:{" "}
              <span className="text-2xl text-[red]">{diffDays}</span> &nbsp;d{" "}
              <span className="text-2xl text-[green]">{diffHours}</span> &nbsp;h{" "}
              <span className="text-2xl text-[yellow]">{diffMinutes}</span>{" "}
              &nbsp;m <span className="text-2xl text-[white]">{diffSeconds}</span>{" "}
              &nbsp;s
            </h2>
            <div
              className="w-full h-9 bg-indigo-600 text-white rounded-[20px] flex justify-center items-center hover:bg-indigo-400"
              onClick={receivedCoins}
            >
              <span className="flex justify-center items-center">Receive</span>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
