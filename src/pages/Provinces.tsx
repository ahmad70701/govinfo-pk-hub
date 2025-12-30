import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { provinces } from '@/data/provinces';

const Provinces = () => {
  return (
    <>
      <SEOHead title="Provinces of Pakistan" description="Government schemes and services by province - Punjab, Sindh, KP, Balochistan, Islamabad, GB, AJK." />
      <section className="section-spacing">
        <div className="container-gov">
          <h1 className="mb-2">Provinces & Territories</h1>
          <p className="text-muted-foreground mb-8">Find government information by region</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {provinces.map((province) => (
              <Link key={province.slug} to={`/provinces/${province.slug}`} className="card-gov p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-accent-foreground" /></div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">{province.name}</h3>
                    <p className="text-sm text-muted-foreground">Capital: {province.capital}</p>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{province.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Provinces;
