import SEOHead from '@/components/SEOHead';

const Disclaimer = () => {
  return (
    <>
      <SEOHead title="Disclaimer" description="Disclaimer for GovInfo PK - Important information about the nature of content on this website." />
      <article className="section-spacing">
        <div className="container-gov max-w-4xl">
          <h1 className="mb-8">Disclaimer</h1>
          <p className="text-muted-foreground mb-6">Last updated: December 30, 2024</p>
          
          <section className="space-y-6">
            <div className="card-gov p-6 bg-warning/10 border-warning">
              <h2 className="text-lg font-semibold mb-2">Important Notice</h2>
              <p className="text-muted-foreground">GovInfo PK is an independent informational website and is NOT affiliated with, endorsed by, or connected to the Government of Pakistan or any of its departments, ministries, or agencies.</p>
            </div>
            
            <h2 className="text-xl font-semibold mt-8">1. Informational Purpose Only</h2>
            <p className="text-muted-foreground">The information provided on GovInfo PK is for general informational purposes only. It should not be considered as official government communication or legal advice. Always refer to official government sources for authoritative information.</p>
            
            <h2 className="text-xl font-semibold mt-8">2. No Government Affiliation</h2>
            <p className="text-muted-foreground">This website is independently operated and maintained. We compile publicly available information about government schemes and services to help citizens. We do not represent any government entity and cannot process applications or provide official services.</p>
            
            <h2 className="text-xl font-semibold mt-8">3. Accuracy and Completeness</h2>
            <p className="text-muted-foreground">While we make every effort to ensure the information is accurate and current, government policies, eligibility criteria, and procedures may change at any time. We recommend verifying all information with the relevant government department before taking any action.</p>
            
            <h2 className="text-xl font-semibold mt-8">4. External Links</h2>
            <p className="text-muted-foreground">We provide links to official government websites for your convenience. These links are provided as-is, and we are not responsible for the content, accuracy, or availability of external sites.</p>
            
            <h2 className="text-xl font-semibold mt-8">5. No Liability</h2>
            <p className="text-muted-foreground">GovInfo PK and its operators shall not be held liable for any losses, damages, or inconvenience arising from the use of information on this website. Users rely on this information at their own risk.</p>
            
            <h2 className="text-xl font-semibold mt-8">6. Professional Advice</h2>
            <p className="text-muted-foreground">For specific questions about eligibility, applications, or legal matters related to government schemes, please consult with relevant government offices or seek professional legal advice.</p>
          </section>
        </div>
      </article>
    </>
  );
};
export default Disclaimer;
