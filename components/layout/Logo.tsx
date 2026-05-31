import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export function Logo({ size = 52 }: { size?: number }) {
  return (
    <Image
      src="/images/ragwel-logo.webp"
      alt={`${COMPANY.name} logo`}
      width={size}
      height={size}
      className="h-full w-auto object-contain drop-shadow-[0_0_12px_rgba(191,160,96,0.25)]"
      priority
    />
  );
}
