import { cn } from "@/lib/utils";

// Gold overline rule + all-caps micro-label, used before section headlines.
export function Overline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="overline-rule" aria-hidden="true" />
      <span className="micro-label text-gold">{children}</span>
    </div>
  );
}
