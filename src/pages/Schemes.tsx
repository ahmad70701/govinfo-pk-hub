import SEOHead from '@/components/SEOHead';
import SchemeCard from '@/components/SchemeCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import { schemes } from '@/data/schemes';

const Schemes = () => {
  return (
    <>
      <SEOHead
        title="Government Schemes"
        description="Complete list of Pakistani government welfare schemes including Ehsaas, BISP, Kamyab Jawan, and housing programs."
      />
      <section className="section-spacing">
        <div className="container-gov">
          <h1 className="mb-2">Government Schemes</h1>
          <p className="text-muted-foreground mb-8">Welfare programs and financial assistance for Pakistani citizens</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schemes.map((scheme) => (
              <SchemeCard key={scheme.slug} title={scheme.title} description={scheme.shortDescription} slug={scheme.slug} category={scheme.category} isNew={scheme.isNew} />
            ))}
          </div>
          <AdPlaceholder provider="adsterra-native" format="horizontal" className="mt-8" />
        </div>
      </section>
    </>
  );
};
export default Schemes;
