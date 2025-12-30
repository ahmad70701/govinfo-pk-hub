import SEOHead from '@/components/SEOHead';

const About = () => {
  return (
    <>
      <SEOHead title="About Us" description="Learn about GovInfo PK - Your trusted source for Pakistani government schemes and services information." />
      <article className="section-spacing">
        <div className="container-gov max-w-4xl">
          <h1 className="mb-8">About GovInfo PK</h1>
          
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">GovInfo PK was created with a simple mission: to make information about Pakistani government schemes, services, and welfare programs accessible to every citizen. We believe that access to clear, accurate information is essential for citizens to benefit from government initiatives designed to help them.</p>
            
            <h2 className="text-xl font-semibold mt-8">What We Do</h2>
            <p className="text-muted-foreground">We compile, organize, and present information about various government programs in an easy-to-understand format. Our content covers social protection schemes like Ehsaas and BISP, essential services like CNIC and passport applications, youth development programs, housing initiatives, and province-specific programs.</p>
            
            <h2 className="text-xl font-semibold mt-8">Our Commitment</h2>
            <p className="text-muted-foreground">We are committed to providing accurate, up-to-date, and unbiased information. We regularly update our content to reflect changes in government policies and procedures. Our team researches official sources to ensure the information we provide is reliable.</p>
            
            <h2 className="text-xl font-semibold mt-8">Who We Serve</h2>
            <p className="text-muted-foreground">GovInfo PK serves all Pakistani citizens, both within Pakistan and overseas, who want to understand and access government programs. Whether you're looking for information about cash transfer programs, applying for documents, or exploring youth entrepreneurship opportunities, we're here to help.</p>
            
            <h2 className="text-xl font-semibold mt-8">Independence</h2>
            <p className="text-muted-foreground">GovInfo PK is an independent platform. We are not affiliated with the Government of Pakistan or any of its agencies. We operate independently to provide objective information to our users. For official applications and services, please visit the relevant government departments directly.</p>
            
            <h2 className="text-xl font-semibold mt-8">Contact Us</h2>
            <p className="text-muted-foreground">Have questions, suggestions, or corrections? We'd love to hear from you. Visit our Contact page to get in touch with our team.</p>
          </section>
        </div>
      </article>
    </>
  );
};
export default About;
