export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      className={`brand-logo ${className}`}
      src="/brand/product-icode/01_Primary_Horizontal.png"
      alt="Product iCode"
      width={1413}
      height={363}
    />
  );
}