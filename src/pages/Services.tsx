import SEOHead from '@/components/SEOHead';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

const Services = () => {
  return (
    <>
      <SEOHead title="Government Services" description="Essential government services in Pakistan including CNIC, Passport, Vehicle Registration, and more." />
      <section className="section-spacing">
        <div className="container-gov">
          <h1 className="mb-2">Government Services</h1>
          <p className="text-muted-foreground mb-8">Essential services for Pakistani citizens</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} title={service.title} description={service.shortDescription} slug={service.slug} department={service.department} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
