import { useEffect, useRef } from "react";

/** Decorative motion only; demo values remain available to assistive technology. */
export function RollingMetric({ value }: { value: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        element.classList.add("metric-visible");
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const formatted = value.toLocaleString("en-US");
  return (
    <strong ref={ref} className="rolling-metric" aria-label={formatted}>
      <span aria-hidden="true" className="metric-digits">
        {Array.from(formatted).map((char, index) => /\d/.test(char) ? (
          <span className="metric-digit" key={index}>
            <span className={`metric-digit-strip digit-${char}`}>
              {Array.from({ length: 10 }, (_, digit) => <span key={digit}>{digit}</span>)}
            </span>
          </span>
        ) : <span key={index}>{char}</span>)}
      </span>
    </strong>
  );
}

export function SiteMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 800px), (pointer: coarse)");
    const sections = document.querySelectorAll("main section.section, main .company-section, main .legal-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    sections.forEach((section) => {
      if (!reduced.matches) section.classList.add("reveal-ready");
      observer.observe(section);
    });
    const workflow = document.querySelector(".home-workflow");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!workflow) return;
      const rect = workflow.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.85 - rect.top) / (window.innerHeight * 0.65)));
      workflow.querySelectorAll(".workflow-step").forEach((step, index) => {
        step.classList.toggle("step-lit", reduced.matches || mobile.matches || progress >= (index + 1) / 6);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      sections.forEach((section) => section.classList.remove("reveal-ready"));
    };
  }, []);
  return null;
}