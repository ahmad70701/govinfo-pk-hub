interface EligibilityRow {
  criteria: string;
  requirement: string;
}

interface EligibilityTableProps {
  rows: EligibilityRow[];
  title?: string;
  className?: string;
}

const EligibilityTable = ({ rows, title = 'Eligibility Criteria', className = '' }: EligibilityTableProps) => {
  return (
    <div className={className}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-3 text-sm font-semibold text-foreground border border-border">
                Criteria
              </th>
              <th className="text-left p-3 text-sm font-semibold text-foreground border border-border">
                Requirement
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="bg-card">
                <td className="p-3 text-sm text-muted-foreground border border-border">
                  {row.criteria}
                </td>
                <td className="p-3 text-sm text-foreground border border-border">
                  {row.requirement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EligibilityTable;
