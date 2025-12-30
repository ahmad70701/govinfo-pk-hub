import { CheckCircle } from 'lucide-react';

interface DocumentsListProps {
  documents: string[];
  title?: string;
  className?: string;
}

const DocumentsList = ({ documents, title = 'Required Documents', className = '' }: DocumentsListProps) => {
  return (
    <div className={className}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {documents.map((doc, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{doc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsList;
