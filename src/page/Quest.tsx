import QuestList from "../component/QuestList";

export default function Quest() {
  return (
    <div className="max-w-full mx-auto text-white h-[70vh]">
      <h1 className="text-3xl mb-3 mx-auto text-start flex justify-center">Quest</h1>
      <QuestList />
    </div>
  );
}
