import "./Loading.css";
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
        <img src="/image/title.png" alt="" className=" w-[500px] h-[100px]"/>
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
    </div>
  );
};

export default Loading;
