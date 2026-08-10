"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Lenis keeps its own scroll state across route changes, so without this
// a new page opens at the previous page's scroll position.
const ScrollToTop = () => {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
};

const GlobalWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root>
      <ScrollToTop />
      {children}
    </ReactLenis>
  );
};

export default GlobalWrapper;
