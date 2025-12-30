import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  count?: number;
}

const CategoryCard = ({ title, description, href, icon: Icon, count }: CategoryCardProps) => {
  return (
    <Link to={href} className="card-gov p-6 block group">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-accent-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {count !== undefined && (
              <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {count}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
