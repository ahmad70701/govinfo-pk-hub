import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  department?: string;
}

const ServiceCard = ({ title, description, slug, department }: ServiceCardProps) => {
  return (
    <Link to={`/services/${slug}`} className="card-gov p-5 block group">
      {department && (
        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded mb-3 inline-block">
          {department}
        </span>
      )}
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {description}
      </p>
      <div className="flex items-center text-sm text-primary font-medium">
        <span>View details</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default ServiceCard;
