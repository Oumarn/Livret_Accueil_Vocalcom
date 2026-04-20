export default function OrgChart() {
  return (
    <div className="overflow-x-auto -mx-2 px-2">
      <svg
        className="w-full min-w-[600px]"
        viewBox="0 0 680 360"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}
      >
        {/* Chairman */}
        <rect x="240" y="10" width="200" height="50" rx="8" fill="#6B4090" />
        <text x="340" y="31" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="700" fill="#fff">Anthony Dinis</text>
        <text x="340" y="49" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#e0d0f5">Chairman</text>

        <line x1="340" y1="60" x2="340" y2="85" stroke="#ccc" strokeWidth="1" />
        <line x1="20" y1="85" x2="660" y2="85" stroke="#ccc" strokeWidth="1" />

        {/* Vertical lines to rank 1 */}
        {[50, 160, 270, 380, 490, 610].map((x) => (
          <line key={x} x1={x} y1="85" x2={x} y2="105" stroke="#ccc" strokeWidth="1" />
        ))}

        {/* Rank 1 */}
        {([
          { x: 5, w: 90, name1: "Myriam", name2: "Ghedas", role: "Chief Customer Ops" },
          { x: 115, w: 90, name1: "Claudine", name2: "Cherfan", role: "Chief Revenue Officer" },
          { x: 225, w: 90, name1: "Oumar", name2: "Ndiaye", role: "Head of Growth" },
          { x: 335, w: 90, name1: "Bruno", name2: "Dignimont", role: "Chief Revenue Officer" },
          { x: 445, w: 90, name1: "Etienne", name2: "Venot", role: "Chief Technical Officer" },
          { x: 560, w: 100, name1: "Nicolas", name2: "Mestchersky", role: "General Manager" },
        ] as const).map((p) => (
          <g key={p.name2}>
            <rect x={p.x} y="105" width={p.w} height="54" rx="8" fill="#1D9E75" />
            <text x={p.x + p.w / 2} y="123" textAnchor="middle" dominantBaseline="central" fontSize="10" fontWeight="700" fill="#fff">{p.name1}</text>
            <text x={p.x + p.w / 2} y="136" textAnchor="middle" dominantBaseline="central" fontSize="10" fontWeight="700" fill="#fff">{p.name2}</text>
            <text x={p.x + p.w / 2} y="150" textAnchor="middle" dominantBaseline="central" fontSize="9" fill="#d0f0e8">{p.role}</text>
          </g>
        ))}

        {/* Lines to rank 2 */}
        <line x1="340" y1="159" x2="340" y2="220" stroke="#ccc" strokeWidth="1" />
        <line x1="98" y1="220" x2="582" y2="220" stroke="#ccc" strokeWidth="1" />
        {[98, 340, 582].map((x) => (
          <line key={x} x1={x} y1="220" x2={x} y2="245" stroke="#ccc" strokeWidth="1" />
        ))}

        {/* Rank 2 */}
        {([
          { cx: 98, name1: "Andres", name2: "Braceras", role: "Mgr Spain & Latam" },
          { cx: 340, name1: "Karim", name2: "Helali", role: "Mgr Middle East" },
          { cx: 582, name1: "Hamid", name2: "El Mejjad", role: "Mgr Africa" },
        ] as const).map((p) => (
          <g key={p.name2}>
            <rect x={p.cx - 70} y="245" width="140" height="54" rx="8" fill="#EE783B" />
            <text x={p.cx} y="263" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#fff">{p.name1}</text>
            <text x={p.cx} y="278" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#fff">{p.name2}</text>
            <text x={p.cx} y="291" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#ffe8d8">{p.role}</text>
          </g>
        ))}

        {/* Legend */}
        <rect x="20" y="330" width="14" height="14" rx="3" fill="#6B4090" />
        <text x="40" y="340" fontSize="11" fill="#2A2A2A">Direction générale</text>
        <rect x="200" y="330" width="14" height="14" rx="3" fill="#1D9E75" />
        <text x="220" y="340" fontSize="11" fill="#2A2A2A">Comité de direction</text>
        <rect x="400" y="330" width="14" height="14" rx="3" fill="#EE783B" />
        <text x="420" y="340" fontSize="11" fill="#2A2A2A">Management régional</text>
      </svg>
    </div>
  );
}
