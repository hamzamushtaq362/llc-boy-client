export default function TimelineCard({ hours, description }) {
  return (
    <div className="flex justify-between items-center bg-white bg-opacity-10 rounded-lg px-6 py-4 shadow-md">
      <h2 className="text-4xl font-bold text-white">{hours}</h2>
      <p className="text-lg text-white">{description}</p>
    </div>
  );
}
