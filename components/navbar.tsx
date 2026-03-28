// components/navbar.tsx
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
import { useEffect, useState, useRef } from "react";

// A simple placeholder logo component. Replace with your actual SVG or Image.
const Logo = () => (
  <svg
    fill="none"
    height="32"
    viewBox="0 0 24 24"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // New state for hide/show
  const lastScrollY = useRef(0); // Ref to track previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Handle the blur/background styling (same as before)
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Handle the hide/show logic based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN & past the top buffer: Hide navbar
        setIsVisible(false);
        setIsMenuOpen(false); // Optional: close mobile menu if they scroll down
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP: Show navbar
        setIsVisible(true);
      }

      // Update the tracked scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Stats", href: "#stats" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <NextUINavbar
      classNames={{
        base: clsx(
          "fixed top-4 inset-x-0 mx-auto w-[95%] sm:w-[85%] max-w-4xl rounded-full transition-all duration-300 ease-in-out z-50",
          {
            // Toggle visibility using CSS transform
            "translate-y-0": isVisible,
            "-translate-y-[150%] opacity-0": !isVisible, // Slides up and fades slightly

            // Toggle background styles
            "bg-background/80 backdrop-blur-md shadow-lg border border-default-200/50":
              isScrolled,
            "bg-transparent": !isScrolled && isVisible,
          },
        ),
        wrapper: "px-4 w-full max-w-full",
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left side: Mobile Menu Toggle & Brand */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit ml-2">Traysyz</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Center: Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="mr-4">
          <Link className="flex items-center gap-2" href="/">
            <Logo />
            <p className="font-bold text-inherit">Traysyz</p>
          </Link>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link
              className="text-sm font-medium"
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right side: Theme Switch & CTA */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full font-medium"
            color="primary"
            href="YOUR_CALENDLY_LINK_HERE" // <-- IMPORTANT: Add your link
            target="_blank"
            variant="solid"
          >
            Schedule a Call
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
