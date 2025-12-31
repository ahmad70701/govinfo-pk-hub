import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { getArticlesSortedByDate } from '@/data/articles';

const Articles = () => {
  const articles = getArticlesSortedByDate();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Articles - PakGovInfo",
    "description": "Latest articles and guides on Pakistani government schemes, services, and welfare programs",
    "url": "https://pakgovinfo.site/articles"
  };

  return (
    <div className="section-spacing">
      <SEOHead
        title="Articles & Guides - Pakistani Government Programs"
        description="Read the latest articles and comprehensive guides on Pakistani government schemes, BISP, Ehsaas, and other welfare programs."
        canonicalUrl="https://pakgovinfo.site/articles"
        jsonLd={jsonLd}
      />

      <div className="container-gov">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Articles & Guides</h1>
          <p className="text-muted-foreground">
            Stay informed with our latest articles on Pakistani government programs and services.
          </p>
        </header>

        <div className="grid gap-6">
          {articles.map((article) => (
            <article key={article.slug} className="card-gov p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    {article.category}
                  </span>
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    <Link to={`/articles/${article.slug}`} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.publishedDate).toLocaleDateString('en-PK', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/articles/${article.slug}`}
                  className="flex items-center gap-2 text-primary font-medium hover:underline whitespace-nowrap"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
