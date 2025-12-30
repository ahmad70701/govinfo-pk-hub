import SEOHead from '@/components/SEOHead';

const TermsOfService = () => {
  return (
    <>
      <SEOHead title="Terms of Service" description="Terms of Service for GovInfo PK - Read our terms and conditions for using this website." />
      <article className="section-spacing">
        <div className="container-gov max-w-4xl">
          <h1 className="mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: December 30, 2024</p>
          
          <section className="space-y-6">
            <h2 className="text-xl font-semibold mt-8">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">By accessing and using GovInfo PK, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
            
            <h2 className="text-xl font-semibold mt-8">2. Description of Service</h2>
            <p className="text-muted-foreground">GovInfo PK is an informational website that provides details about Pakistani government schemes, services, and welfare programs. We aggregate publicly available information to help citizens understand and access government programs.</p>
            
            <h2 className="text-xl font-semibold mt-8">3. Accuracy of Information</h2>
            <p className="text-muted-foreground">While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, or accuracy of the information on this website. Government policies and programs may change without notice. Always verify information with official government sources.</p>
            
            <h2 className="text-xl font-semibold mt-8">4. User Responsibilities</h2>
            <p className="text-muted-foreground">You agree to use this website only for lawful purposes. You will not use this site to transmit harmful content, attempt to gain unauthorized access, or interfere with the website's functionality.</p>
            
            <h2 className="text-xl font-semibold mt-8">5. Intellectual Property</h2>
            <p className="text-muted-foreground">All content on GovInfo PK, including text, graphics, logos, and software, is the property of GovInfo PK or its content suppliers and is protected by Pakistani and international copyright laws.</p>
            
            <h2 className="text-xl font-semibold mt-8">6. Third-Party Links</h2>
            <p className="text-muted-foreground">Our website contains links to official government websites and other third-party sites. We are not responsible for the content or practices of these external sites.</p>
            
            <h2 className="text-xl font-semibold mt-8">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">GovInfo PK shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided.</p>
            
            <h2 className="text-xl font-semibold mt-8">8. Modifications</h2>
            <p className="text-muted-foreground">We reserve the right to modify these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
            
            <h2 className="text-xl font-semibold mt-8">9. Governing Law</h2>
            <p className="text-muted-foreground">These terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan.</p>
          </section>
        </div>
      </article>
    </>
  );
};
export default TermsOfService;
