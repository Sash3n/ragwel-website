"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS } from "@/lib/constants";
import { NAV_SCROLL_THRESHOLD } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // navBlur: bg fades to rgba(10,10,10,0.85) once past the threshold.
  const bgOpacity = useTransform(scrollY, [0, NAV_SCROLL_THRESHOLD], [1, 0.85]);
  const background = useMotionTemplate`rgba(10,10,10,${bgOpacity})`;
  const blur = useTransform(scrollY, [0, NAV_SCROLL_THRESHOLD], [0, 12]);
  const backdropBlur = useMotionTemplate`blur(${blur}px)`;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      style={{ backgroundColor: background, backdropFilter: backdropBlur }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white-faint"
    >
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
        aria-label="Primary"
      >
        <Link href="/" aria-label="Ragwel home" className="flex h-[40px] items-center md:h-[52px]">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-white/90",
                isActive(link.href) ? "text-white" : "text-white-dim"
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              aria-label="Open menu"
              className="rounded-md p-2 text-white focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex h-full flex-col">
            <SheetTitle className="micro-label text-gold">Menu</SheetTitle>
            <div className="mt-10 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-lg transition-colors hover:text-white/90",
                      isActive(link.href) ? "text-white" : "text-white-dim"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-4 w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
