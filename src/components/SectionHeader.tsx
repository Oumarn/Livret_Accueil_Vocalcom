export default function SectionHeader({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-center gap-3.5 border-b-2 border-vc-border pb-3.5 mb-7">
      <div className="w-9 h-9 bg-grad-blue text-white rounded-full flex items-center justify-center text-[15px] font-extrabold shrink-0">
        {num}
      </div>
      <h2 className="text-xl font-extrabold text-vc-darkblue">{title}</h2>
    </div>
  );
}
