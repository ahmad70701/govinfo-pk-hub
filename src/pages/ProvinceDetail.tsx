import { useParams, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { getProvinceBySlug } from '@/data/provinces';

const ProvinceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const province = getProvinceBySlug(slug || '');

  if (!province) {
    return <div className="container-gov py-12"><h1>Province not found</h1><Link to="/provinces" className="link-gov">Back to provinces</Link></div>;
  }

  return (
    <>
      <SEOHead title={province.name} description={province.description} />
      <section className="section-spacing">
        <div className="container-gov">
          <div className="mb-4"><Link to="/provinces" className="link-gov text-sm">← Back to Provinces</Link></div>
          <h1 className="mb-4">{province.name}</h1>
          <p className="text-lg text-muted-foreground mb-8">{province.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-gov p-6"><h3 className="font-semibold mb-2">Capital</h3><p>{province.capital}</p></div>
            <div className="card-gov p-6"><h3 className="font-semibold mb-2">Population</h3><p>{province.population}</p></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-gov p-6">
              <h3 className="font-semibold mb-4">Key Schemes</h3>
              <ul className="space-y-2">{province.keySchemes.map((s, i) => <li key={i} className="text-muted-foreground">• {s}</li>)}</ul>
            </div>
            <div className="card-gov p-6">
              <h3 className="font-semibold mb-4">Key Services</h3>
              <ul className="space-y-2">{province.keyServices.map((s, i) => <li key={i} className="text-muted-foreground">• {s}</li>)}</ul>
            </div>
          </div>
          
          <a href={province.officialPortal} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 mt-8">
            Visit Official Portal <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
};
export default ProvinceDetail;
