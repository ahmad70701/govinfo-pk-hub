declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackPageView = (url: string) => {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }
};
