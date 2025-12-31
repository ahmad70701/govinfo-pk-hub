import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Privacy Policy for GovInfo PK - Learn how we collect, use, and protect your personal information." />
      <article className="section-spacing">
        <div className="container-gov max-w-4xl">
          <h1 className="mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: December 30, 2024</p>
          
          <section className="prose prose-gray max-w-none space-y-6">
            <h2 className="text-xl font-semibold mt-8">1. Introduction</h2>
            <p className="text-muted-foreground">Welcome to GovInfo PK. We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            
            <h2 className="text-xl font-semibold mt-8">2. Information We Collect</h2>
            <p className="text-muted-foreground">We may collect personal information that you voluntarily provide when using our contact form, including your name, email address, and message content. We also automatically collect certain information when you visit our website, including IP address, browser type, pages visited, and time spent on pages.</p>
            
            <h2 className="text-xl font-semibold mt-8">3. Use of Cookies</h2>
            <p className="text-muted-foreground">We use cookies and similar tracking technologies to enhance your browsing experience. These include essential cookies for website functionality, analytics cookies (Google Analytics) to understand how visitors use our site, and advertising cookies (Google AdSense) to display relevant advertisements.</p>
            
            <h2 className="text-xl font-semibold mt-8">4. Third-Party Advertising</h2>
            <p className="text-muted-foreground">We use Google AdSense to display advertisements on our website. Google and its partners may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.</p>
            
            <h2 className="text-xl font-semibold mt-8">5. Data Security</h2>
            <p className="text-muted-foreground">We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2 className="text-xl font-semibold mt-8">6. Your Rights</h2>
            <p className="text-muted-foreground">You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided on our Contact page.</p>
            
            <h2 className="text-xl font-semibold mt-8">7. Changes to This Policy</h2>
            <p className="text-muted-foreground">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated revision date.</p>
            
            <h2 className="text-xl font-semibold mt-8">8. Contact Us</h2>
            <p className="text-muted-foreground">If you have questions about this Privacy Policy, please contact us through our Contact page or email us at privacy@pakgovinfo.site.</p>
          </section>
        </div>
      </article>
    </>
  );
};
export default PrivacyPolicy;
