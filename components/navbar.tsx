"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@heroui/navbar";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="url(#logoGrad)"
    />
  </svg>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isVisible, setIsVisible]     = useState(true);
  const lastScrollY                   = useRef(0);
  const pathname                      = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 12);
      if (y > lastScrollY.current && y > 80) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else if (y < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Services",     href: "/#services",     id: "services"      },
    { label: "Case Studies", href: "/#case-studies", id: "case-studies"  },
    { label: "Contact",      href: "/#contact",      id: "contact"       },
  ];

  return (
    <NextUINavbar
      classNames={{
        base: clsx(
          "fixed top-4 inset-x-0 mx-auto w-[96%] sm:w-[88%] max-w-4xl rounded-full transition-all duration-300 ease-in-out z-50",
          isVisible ? "translate-y-0" : "-translate-y-[200%] opacity-0",
          isScrolled
            ? "bg-[rgba(6,9,15,0.88)] backdrop-blur-xl border border-white/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
            : "bg-transparent",
        ),
        wrapper: "px-5 w-full max-w-full",
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Mobile: toggle + brand */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="ml-2.5 font-bold tracking-tight text-foreground">Traysyz</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop: brand + nav */}
      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        <NavbarBrand className="mr-6">
          <Link className="flex items-center gap-2.5" href="/">
            <Logo />
            <p className="font-bold tracking-tight text-foreground">Traysyz</p>
          </Link>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              className="rounded-full px-4 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white/90"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* CTA */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full bg-violet-600 px-5 text-sm font-semibold text-white shadow-glow-sm hover:bg-violet-500 transition-colors"
            href="/#contact"
            size="sm"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Get in Touch
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="bg-[#06090F]/95 backdrop-blur-xl pt-8 pb-6 px-6">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              className="w-full py-2 text-lg font-medium text-white/70 hover:text-white transition-colors"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-4">
          <Button
            as={Link}
            className="w-full rounded-full bg-violet-600 font-semibold text-white shadow-glow-sm"
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Get in Touch
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
