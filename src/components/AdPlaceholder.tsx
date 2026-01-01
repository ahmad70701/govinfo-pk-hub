import { useEffect, useState } from 'react';

interface AdPlaceholderProps {
  format?: 'horizontal' | 'vertical' | 'square';
  className?: string;
}

const DESKTOP_CONTAINER_ID = 'container-39cfd9623bc707dfbcde117906b98e10';
const MOBILE_SCRIPT_ID = 'adsterra-mobile-script';
const DESKTOP_SCRIPT_ID = 'adsterra-desktop-script';

const AdPlaceholder = ({
  format = 'horizontal',
  className = ''
}: AdPlaceholderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Clean up any existing ad scripts first
    const existingDesktop = document.getElementById(DESKTOP_SCRIPT_ID);
    const existingMobile = document.getElementById(MOBILE_SCRIPT_ID);
    
    if (isMobile) {
      // Remove desktop script if exists
      if (existingDesktop) existingDesktop.remove();
      
      // Load mobile ad if not already loaded
      if (!existingMobile) {
        // Set atOptions on window
        (window as any).atOptions = {
          'key': '17c62f70d2fca4838b99241f140dfac3',
          'format': 'iframe',
          'height': 50,
          'width': 320,
          'params': {}
        };

        const script = document.createElement('script');
        script.id = MOBILE_SCRIPT_ID;
        script.src = 'https://www.highperformanceformat.com/17c62f70d2fca4838b99241f140dfac3/invoke.js';
        script.async = true;
        
        const container = document.getElementById('mobile-ad-container');
        if (container) {
          container.appendChild(script);
        }
      }
    } else {
      // Remove mobile script if exists
      if (existingMobile) existingMobile.remove();
      
      // Load desktop ad if not already loaded
      if (!existingDesktop) {
        const script = document.createElement('script');
        script.id = DESKTOP_SCRIPT_ID;
        script.src = 'https://pl28380194.effectivegatecpm.com/39cfd9623bc707dfbcde117906b98e10/invoke.js';
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        document.body.appendChild(script);
      }
    }
  }, [isMobile]);

  const sizeClasses = {
    horizontal: 'min-h-[60px] md:min-h-[90px]',
    vertical: 'min-h-64 w-full max-w-xs mx-auto',
    square: 'min-h-64 w-full max-w-xs mx-auto'
  };

  return (
    <div className={`ad-placeholder ${sizeClasses[format]} ${className} flex items-center justify-center`}>
      {isMobile ? (
        <div id="mobile-ad-container" className="flex items-center justify-center w-[320px] h-[50px]" />
      ) : (
        <div id={DESKTOP_CONTAINER_ID} className="w-full" />
      )}
    </div>
  );
};

export default AdPlaceholder;
