import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { getLatestArticle } from '@/data/articles';

const LatestArticleBanner = () => {
  const latestArticle = getLatestArticle();

  if (!latestArticle) return null;

  return (
    <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center gap-3 text-primary">
          <Newspaper className="w-8 h-8" />
          <span className="text-sm font-semibold uppercase tracking-wide">Latest Article</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {latestArticle.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {latestArticle.excerpt}
          </p>
        </div>
        <Link
          to={`/articles/${latestArticle.slug}`}
          className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
        >
          Read Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default LatestArticleBanner;
