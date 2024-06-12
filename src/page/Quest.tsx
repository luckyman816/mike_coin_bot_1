import QuestList from "../component/QuestList";

export default function Quest() {
  return (
    <div className="max-w-full mx-auto text-white h-[75vh] max-sm:h-[82vh] mt-8">
      <h1 className="text-3xl mb-3 mx-auto text-start flex justify-center">Quest</h1>
      <QuestList />
    </div>
  );
}
