interface AdPlaceholderProps {
  format?: 'horizontal' | 'vertical' | 'square';
  className?: string;
}

const AdPlaceholder = ({ format = 'horizontal', className = '' }: AdPlaceholderProps) => {
  const sizeClasses = {
    horizontal: 'h-24 md:h-28',
    vertical: 'h-64 w-full max-w-xs mx-auto',
    square: 'h-64 w-full max-w-xs mx-auto'
  };

  return (
    <div className={`ad-placeholder ${sizeClasses[format]} ${className}`}>
      <span>Advertisement</span>
    </div>
  );
};

export default AdPlaceholder;
