export default function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto -mx-2 px-2 mb-5">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr className="bg-grad-header text-white">
            {headers.map((h) => (
              <th
                key={h}
                className="px-3.5 py-2.5 text-left font-semibold text-xs whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3.5 py-2.5 border-b border-vc-border align-top ${
                    i % 2 === 1 ? "bg-vc-bg" : ""
                  } ${i === rows.length - 1 ? "border-b-0" : ""}`}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
