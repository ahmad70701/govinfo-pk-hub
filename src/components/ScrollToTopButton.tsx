import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg p-2 md:p-3 h-10 w-10 md:h-12 md:w-12"
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
    </Button>
  );
};

export default ScrollToTopButton;
