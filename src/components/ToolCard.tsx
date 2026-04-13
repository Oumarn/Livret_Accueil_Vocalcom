export default function ToolCard({
  icon,
  name,
  usage,
}: {
  icon: string;
  name: string;
  usage: string;
}) {
  return (
    <div className="bg-vc-bg rounded-lg px-4 py-3.5 flex gap-3 items-start">
      <div className="text-xl mt-0.5 shrink-0">{icon}</div>
      <div>
        <div className="font-bold text-[13px] text-vc-darkblue">{name}</div>
        <div className="text-[11.5px] text-vc-light mt-0.5">{usage}</div>
      </div>
    </div>
  );
}
