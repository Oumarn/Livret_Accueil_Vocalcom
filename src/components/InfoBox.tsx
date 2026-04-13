import type { ReactNode } from "react";

const variants = {
  blue: "bg-[#EAF8F9] border-vc-blue [&_strong]:text-vc-blue",
  orange: "bg-[#FEF3EC] border-vc-orange [&_strong]:text-vc-orange",
};

export default function InfoBox({
  variant = "blue",
  children,
}: {
  variant?: "blue" | "orange";
  children: ReactNode;
}) {
  return (
    <div
      className={`border-l-4 rounded-r-md px-4 py-3 text-[13px] leading-relaxed mt-4 ${variants[variant]}`}
    >
      {children}
    </div>
  );
}
