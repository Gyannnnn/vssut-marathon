"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import clsx from "clsx";
import Image from "next/image";
import OdishaPattern from "./OdishaPattern";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Participants", href: "/participants" },
  { label: "Virtual Run", href: "/virtual-run" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* ... header content ... */}
      <div
        className={clsx(
          "w-full transition-all duration-300 bg-white",
          isScrolled ? "shadow-sm" : "shadow-none",
        )}
      >
        {/* Top Pattern */}
        {/* <OdishaPattern height={12} /> */}

        <div
          className={clsx(
            "container mx-auto px-4 md:px-6 flex items-center justify-between",
            isScrolled ? "py-2" : "py-4",
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            {/* Logo */}
            <Image
              src="/vssut-main-logo.png"
              alt="VSSUT Logo"
              width={70}
              height={70}
              priority
              unoptimized
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary leading-none transition-colors">
                VSSUT Marathon
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-wider transition-colors">
                2026 EDITION
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
              <Link href="/register/participant-register">Register Now</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-10 w-10" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-md flex flex-col items-center gap-8 pt-40 border-l border-border/40 z-100"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>

              {/* Centered Brand */}
              <div className="flex flex-col items-center gap-4 w-full">
                <Image
                  src="/vssut-main-logo.png"
                  alt="VSSUT Logo"
                  width={80}
                  height={80}
                  unoptimized
                  priority
                  className="w-auto h-24 drop-shadow-sm"
                />
                <div className="flex flex-col items-center text-center space-y-1">
                  <span className="text-2xl font-bold text-primary tracking-tight">
                    VSSUT Marathon
                  </span>
                  <span className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
                    2026 Edition
                  </span>
                </div>
              </div>

              {/* Animated Nav */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                className="flex flex-col items-center w-full gap-6 mt-4"
              >
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-medium text-foreground hover:text-secondary transition-colors relative group block"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={itemVariants}
                  className="w-full flex justify-center mt-4"
                >
                  <Button className="w-4/5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg py-6 shadow-lg shadow-secondary/20">
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/register/participant-register"
                    >
                      Register Now
                    </Link>
                  </Button>
                </motion.div>
              </motion.nav>

              {/* Decorative Pattern at bottom of menu */}
            </SheetContent>
          </Sheet>
        </div>

        {/* Bottom Pattern */}
        <OdishaPattern height={16} />
      </div>
    </header>
  );
}
