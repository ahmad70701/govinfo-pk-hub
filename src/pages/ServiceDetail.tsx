import { useParams, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import QuickInfoCard from '@/components/QuickInfoCard';
import EligibilityTable from '@/components/EligibilityTable';
import DocumentsList from '@/components/DocumentsList';
import StepsToApply from '@/components/StepsToApply';
import FAQAccordion from '@/components/FAQAccordion';
import { getServiceBySlug } from '@/data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return <div className="container-gov py-12"><h1>Service not found</h1><Link to="/services" className="link-gov">Back to services</Link></div>;
  }

  return (
    <>
      <SEOHead title={service.title} description={service.shortDescription} />
      <article className="section-spacing">
        <div className="container-gov">
          <div className="mb-4"><Link to="/services" className="link-gov text-sm">← Back to Services</Link></div>
          <h1 className="mb-4">{service.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{service.overview}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <EligibilityTable rows={service.eligibility} />
              <DocumentsList documents={service.documents} />
              <StepsToApply steps={service.steps} />
              <section>
                <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
                <FAQAccordion faqs={service.faqs} />
              </section>
              <a href={service.officialLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                Visit Official Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <aside><QuickInfoCard items={service.quickInfo} /></aside>
          </div>
        </div>
      </article>
    </>
  );
};
export default ServiceDetail;
