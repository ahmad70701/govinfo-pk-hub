import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
        <Analytics />
        <SpeedInsights />
    </div>
  );
};

export default Layout;
