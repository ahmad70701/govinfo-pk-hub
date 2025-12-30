import { useSearchParams } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import SearchBar from '@/components/SearchBar';
import SchemeCard from '@/components/SchemeCard';
import ServiceCard from '@/components/ServiceCard';
import { schemes } from '@/data/schemes';
import { services } from '@/data/services';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const lowerQuery = query.toLowerCase();

  const matchedSchemes = schemes.filter(s => s.title.toLowerCase().includes(lowerQuery) || s.shortDescription.toLowerCase().includes(lowerQuery));
  const matchedServices = services.filter(s => s.title.toLowerCase().includes(lowerQuery) || s.shortDescription.toLowerCase().includes(lowerQuery));

  return (
    <>
      <SEOHead title={query ? `Search: ${query}` : 'Search'} description="Search government schemes and services in Pakistan" />
      <section className="section-spacing">
        <div className="container-gov">
          <h1 className="mb-6">Search</h1>
          <SearchBar className="max-w-2xl mb-8" />
          
          {query && (
            <p className="text-muted-foreground mb-6">Showing results for "{query}"</p>
          )}
          
          {matchedSchemes.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Schemes ({matchedSchemes.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchedSchemes.map(s => <SchemeCard key={s.slug} title={s.title} description={s.shortDescription} slug={s.slug} category={s.category} />)}
              </div>
            </div>
          )}
          
          {matchedServices.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Services ({matchedServices.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchedServices.map(s => <ServiceCard key={s.slug} title={s.title} description={s.shortDescription} slug={s.slug} department={s.department} />)}
              </div>
            </div>
          )}
          
          {query && matchedSchemes.length === 0 && matchedServices.length === 0 && (
            <p className="text-muted-foreground">No results found for "{query}"</p>
          )}
        </div>
      </section>
    </>
  );
};
export default SearchPage;
