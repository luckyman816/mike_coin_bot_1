import "./Loading.css";
const Loading = () => {
    const imgURL: string[] = ["/image/social/instagram.png", "/image/social/telegram.png", "/image/social/twitter.png", "/image/social/youtubu.png"];
  return (
    <div className="flex flex-col justify-around items-center ">
      <img src="/image/title.png" alt="" className=" w-[60vw] h-auto" />
      <div className="loadingspinner">
        <div
          id="square1"
          style={{
            backgroundImage: "url('image/mike_1.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="square2"
          style={{
            backgroundImage: "url('image/mike_2.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="square3"
          style={{
            backgroundImage: "url('image/mike_3.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="square4"
          style={{
            backgroundImage: "url('image/mike_4.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="square5"
          style={{
            backgroundImage: "url('image/mike_5.png')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-white">Meet The Worldwide Community</h3>
        <div className="flex gap-2">
            {imgURL.map((item) => {
                return (
                    <img src={item} alt="" className=" w-8 h-8"/>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Loading;
