import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import AdPlaceholder from '@/components/AdPlaceholder';
import { getArticleBySlug } from '@/data/articles';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <div className="section-spacing">
        <div className="container-gov text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/articles" className="btn-primary">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishedDate,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "PakGovInfo",
      "url": "https://pakgovinfo.site"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pakgovinfo.site/articles/${article.slug}`
    }
  };

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inTable = false;
    let tableRows: string[] = [];

    lines.forEach((line, index) => {
      // Table handling
      if (line.startsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        tableRows.push(line);
        return;
      } else if (inTable) {
        // End of table
        inTable = false;
        elements.push(renderTable(tableRows, elements.length));
        tableRows = [];
      }

      // Images - markdown format: ![alt](src)
      const imageMatch = line.match(/^!\[(.+?)\]\((.+?)\)$/);
      if (imageMatch) {
        elements.push(
          <img
            key={index}
            src={imageMatch[2]}
            alt={imageMatch[1]}
            className="w-full rounded-lg my-6 shadow-md"
            loading="lazy"
          />
        );
        return;
      }

      // Headers
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={index} className="font-semibold text-foreground mt-4 mb-2">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="text-muted-foreground ml-4 mb-1">
            {renderInlineFormatting(line.replace('- ', ''))}
          </li>
        );
      } else if (line.match(/^\d+\. /)) {
        elements.push(
          <li key={index} className="text-muted-foreground ml-4 mb-1 list-decimal">
            {renderInlineFormatting(line.replace(/^\d+\. /, ''))}
          </li>
        );
      } else if (line.trim() === '') {
        elements.push(<br key={index} />);
      } else {
        elements.push(
          <p key={index} className="text-muted-foreground mb-4">
            {renderInlineFormatting(line)}
          </p>
        );
      }
    });

    // Handle table at end of content
    if (inTable && tableRows.length > 0) {
      elements.push(renderTable(tableRows, elements.length));
    }

    return elements;
  };

  const renderTable = (rows: string[], key: number) => {
    const headerRow = rows[0];
    const dataRows = rows.slice(2); // Skip header and separator

    const headers = headerRow.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
    const data = dataRows.map(row => 
      row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
    );

    return (
      <div key={key} className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              {headers.map((header, i) => (
                <th key={i} className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-muted/50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-border px-4 py-2 text-muted-foreground">
                    {renderInlineFormatting(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderInlineFormatting = (text: string) => {
    // Handle bold text
    let result = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Handle links
    result = result.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="section-spacing">
      <SEOHead
        title={article.title}
        description={article.excerpt}
        canonicalUrl={`https://pakgovinfo.site/articles/${article.slug}`}
        jsonLd={jsonLd}
      />

      <div className="container-gov">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <article className="max-w-4xl">
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </span>
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
          </header>

          <AdPlaceholder format="horizontal" className="my-6" />

          <div className="prose prose-lg max-w-none">
            {renderContent(article.content)}
          </div>

          <AdPlaceholder format="horizontal" className="my-6" />

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> PakGovInfo is an independent information resource and is not affiliated with any government agency. 
              Always verify information on official government portals before taking action.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
