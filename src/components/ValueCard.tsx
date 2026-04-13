const borderColors: Record<string, string> = {
  blue: "border-t-vc-blue",
  orange: "border-t-vc-orange",
  red: "border-t-vc-red",
  purple: "border-t-vc-purple",
  green: "border-t-vc-green",
  yellow: "border-t-vc-yellow",
};

export default function ValueCard({
  emoji,
  name,
  desc,
  color = "blue",
}: {
  emoji: string;
  name: string;
  desc: string;
  color?: string;
}) {
  return (
    <div
      className={`bg-vc-bg rounded-lg p-4 border-t-[3px] ${borderColors[color] ?? "border-t-vc-blue"}`}
    >
      <div className="text-xl mb-1">{emoji}</div>
      <div className="font-bold text-[13px] text-vc-darkblue mb-1">{name}</div>
      <div className="text-xs text-vc-light leading-relaxed">{desc}</div>
    </div>
  );
}
