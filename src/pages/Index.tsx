import { FileText, Building2, MapPin, TrendingUp } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import SchemeCard from '@/components/SchemeCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import LatestArticleBanner from '@/components/LatestArticleBanner';
import { schemes } from '@/data/schemes';
import { services } from '@/data/services';

const Index = () => {
  const featuredSchemes = schemes.slice(0, 3);
  
  const latestUpdates = [
    { title: 'Ehsaas Program Payment Schedule Updated for Q4 2024', date: 'December 28, 2024' },
    { title: 'NADRA Extends CNIC Renewal Deadline for Overseas Pakistanis', date: 'December 25, 2024' },
    { title: 'Kamyab Jawan Loan Applications Now Open for Tier 2', date: 'December 20, 2024' },
    { title: 'New Naya Pakistan Housing Sites Announced in Punjab', date: 'December 18, 2024' },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GovInfo PK",
    "url": "https://pakgovinfo.site",
    "description": "Complete guide to Pakistani government schemes, services, and welfare programs",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pakgovinfo.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEOHead
        title="Government Schemes & Services of Pakistan"
        description="Complete guide to Pakistani government schemes, services, and welfare programs. Find information about Ehsaas, BISP, CNIC, Passport, and more."
        canonicalUrl="https://pakgovinfo.site"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container-gov">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-primary-foreground mb-4">
              Government Schemes & Services of Pakistan
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Find complete information about Pakistani government schemes, services, and welfare programs. 
              Your trusted guide to Ehsaas, BISP, CNIC, Passport, and more.
            </p>
            <SearchBar size="large" placeholder="Search schemes, services, or topics..." className="max-w-2xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Latest Article Banner */}
      <section className="section-spacing">
        <div className="container-gov">
          <LatestArticleBanner />
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-spacing pt-0">
        <div className="container-gov">
          <h2 className="mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CategoryCard
              title="Government Schemes"
              description="Welfare programs, cash transfers, loans, and social protection initiatives for Pakistani citizens."
              href="/schemes"
              icon={FileText}
              count={schemes.length}
            />
            <CategoryCard
              title="Government Services"
              description="CNIC, Passport, Vehicle Registration, Birth Certificates, and other essential services."
              href="/services"
              icon={Building2}
              count={services.length}
            />
            <CategoryCard
              title="Provinces"
              description="Province-specific schemes and services for Punjab, Sindh, KP, Balochistan, and more."
              href="/provinces"
              icon={MapPin}
              count={7}
            />
          </div>
        </div>
      </section>

      <AdPlaceholder format="horizontal" className="container-gov my-8" />

      {/* Featured Schemes */}
      <section className="section-spacing bg-muted/30">
        <div className="container-gov">
          <div className="flex items-center justify-between mb-6">
            <h2>Featured Schemes</h2>
            <a href="/schemes" className="link-gov text-sm font-medium">
              View all schemes →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.slug}
                title={scheme.title}
                description={scheme.shortDescription}
                slug={scheme.slug}
                category={scheme.category}
                isNew={scheme.isNew}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="section-spacing">
        <div className="container-gov">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2>Latest Updates</h2>
          </div>
          <div className="card-gov divide-y divide-border">
            {latestUpdates.map((update, index) => (
              <div key={index} className="p-4 hover:bg-muted/50 transition-colors">
                <h3 className="text-base font-medium text-foreground mb-1">
                  {update.title}
                </h3>
                <p className="text-sm text-muted-foreground">{update.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdPlaceholder 
        format="horizontal"
        className="container-gov my-8" />

      {/* Quick Links */}
      <section className="section-spacing bg-accent">
        <div className="container-gov">
          <h2 className="text-center mb-8">Popular Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['CNIC Application', 'Passport Renewal', 'Ehsaas Program', 'Driving License'].map((service) => (
              <a
                key={service}
                href={`/search?q=${encodeURIComponent(service)}`}
                className="card-gov p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <span className="font-medium text-sm">{service}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
