import Footer from "../component/Footer";
import QuestList from "../component/QuestList";

export default function Quest() {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center mt-11">
      <QuestList />
      <Footer/>
    </div>
  );
}
