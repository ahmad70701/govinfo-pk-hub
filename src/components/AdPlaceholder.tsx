import { useEffect } from 'react';

interface AdPlaceholderProps {
  format?: 'horizontal' | 'vertical' | 'square';
  className?: string;
  provider?: 'placeholder' | 'adsterra-native';
}

const ADSTERRA_CONTAINER_ID =
  'container-39cfd9623bc707dfbcde117906b98e10';

const AdPlaceholder = ({
  format = 'horizontal',
  className = '',
  provider = 'placeholder'
}: AdPlaceholderProps) => {
  const sizeClasses = {
    horizontal: 'h-24 md:h-28',
    vertical: 'h-64 w-full max-w-xs mx-auto',
    square: 'h-64 w-full max-w-xs mx-auto'
  };

  useEffect(() => {
    if (provider !== 'adsterra-native') return

    // Prevent script duplication
    if (document.getElementById('adsterra-native-script')) return;

    const script = document.createElement('script');
    script.id = 'adsterra-native-script';
    script.src =
      'https://pl28380194.effectivegatecpm.com/39cfd9623bc707dfbcde117906b98e10/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    document.body.appendChild(script);
  }, [provider]);

  return (
    <div
      className={`ad-placeholder ${sizeClasses[format]} ${className}`}
    >
      {provider === 'adsterra-native' ? (
        <div id={ADSTERRA_CONTAINER_ID} />
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default AdPlaceholder;
