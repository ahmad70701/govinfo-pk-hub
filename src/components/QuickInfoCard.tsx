interface QuickInfoItem {
  label: string;
  value: string;
}

interface QuickInfoCardProps {
  items: QuickInfoItem[];
  title?: string;
  className?: string;
}

const QuickInfoCard = ({ items, title = 'Quick Information', className = '' }: QuickInfoCardProps) => {
  return (
    <div className={`card-gov p-5 ${className}`}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span className="text-sm font-medium text-foreground text-right max-w-[60%]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickInfoCard;
