import { useParams, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import QuickInfoCard from '@/components/QuickInfoCard';
import EligibilityTable from '@/components/EligibilityTable';
import DocumentsList from '@/components/DocumentsList';
import StepsToApply from '@/components/StepsToApply';
import FAQAccordion from '@/components/FAQAccordion';
import AdPlaceholder from '@/components/AdPlaceholder';
import { getSchemeBySlug } from '@/data/schemes';

const SchemeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const scheme = getSchemeBySlug(slug || '');

  if (!scheme) {
    return <div className="container-gov py-12"><h1>Scheme not found</h1><Link to="/schemes" className="link-gov">Back to schemes</Link></div>;
  }

  return (
    <>
      <SEOHead title={scheme.title} description={scheme.shortDescription} />
      <article className="section-spacing">
        <div className="container-gov">
          <div className="mb-4"><Link to="/schemes" className="link-gov text-sm">← Back to Schemes</Link></div>
          <h1 className="mb-4">{scheme.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{scheme.overview}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <EligibilityTable rows={scheme.eligibility} />
              <DocumentsList documents={scheme.documents} />
              <AdPlaceholder format="horizontal" />
              <StepsToApply steps={scheme.steps} />
              <section>
                <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
                <FAQAccordion faqs={scheme.faqs} />
              </section>
              <a href={scheme.officialLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                Visit Official Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <aside><QuickInfoCard items={scheme.quickInfo} /></aside>
          </div>
        </div>
      </article>
    </>
  );
};
export default SchemeDetail;
