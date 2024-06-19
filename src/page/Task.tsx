export default function Task() {
  return (
    <div className="Ranking max-w-full mx-auto text-white h-[75vh] max-sm:h-[82vh] mt-8">
      <div className="flex justify-center">
        <img src="image/dollar.png" alt="" className=" w-20 h-20" />
      </div>

      <div className="flex flex-col justify-center p-7">
        <div className="flex items-center h-24 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] rounded-[20px]">
          <div className="flex justify-start items-center">
            <img src="image/telegram.png" alt="" className=" w-14 h-14" />
            <div className=" flex flex-col justify-start">
              <div className="text-left justify-start items-center text-white ml-3 font-bold">
                Join Our TG Group
              </div>
              <div className="flex justify-start items-center ml-2">
                <img src="image/dollar.png" alt="" className=" w-5 h-5" />
                <span className=" text-amber-400">+5000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-24 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] rounded-[20px]">
          <div className="flex justify-start items-center">
            <img src="image/telegram.png" alt="" className=" w-14 h-14" />
            <div className=" flex flex-col justify-start">
              <div className="text-left justify-start items-center text-white ml-3 font-bold">
                Subscribe Our TG Channel
              </div>
              <div className="flex justify-start items-center ml-2">
                <img src="image/dollar.png" alt="" className=" w-5 h-5" />
                <span className=" text-amber-400">+5000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-24 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] rounded-[20px]">
          <div className="flex justify-start items-center">
            <img src="image/twitter.png" alt="" className=" w-14 h-14" />
            <div className=" flex flex-col justify-start">
              <div className="text-left justify-start items-center text-white ml-3 font-bold">
                Follow our X account
              </div>
              <div className="flex justify-start items-center ml-2">
                <img src="image/dollar.png" alt="" className=" w-5 h-5" />
                <span className=" text-amber-400">+5000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
