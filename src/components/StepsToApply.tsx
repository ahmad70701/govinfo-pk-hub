interface Step {
  title: string;
  description: string;
}

interface StepsToApplyProps {
  steps: Step[];
  title?: string;
  className?: string;
}

const StepsToApply = ({ steps, title = 'How to Apply', className = '' }: StepsToApplyProps) => {
  return (
    <div className={className}>
      <h3 className="font-semibold text-foreground mb-6">{title}</h3>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              {index + 1}
            </div>
            <div className="flex-1 pt-1">
              <h4 className="font-medium text-foreground mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToApply;
