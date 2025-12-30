import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SchemeCardProps {
  title: string;
  description: string;
  slug: string;
  category?: string;
  isNew?: boolean;
}

const SchemeCard = ({ title, description, slug, category, isNew }: SchemeCardProps) => {
  return (
    <Link to={`/schemes/${slug}`} className="card-gov p-5 block group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          {category && (
            <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded">
              {category}
            </span>
          )}
          {isNew && (
            <span className="text-xs font-medium text-success-foreground bg-success px-2 py-1 rounded">
              New
            </span>
          )}
        </div>
      </div>
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {description}
      </p>
      <div className="flex items-center text-sm text-primary font-medium">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default SchemeCard;
