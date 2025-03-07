"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Trees } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Mulch",
      href: "/mulch",
    },
    {
      title: "Playground",
      href: "/playground",
    },
    {
      title: "Pellets",
      href: "/pellets",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-dashed border-b border-border/70 dark:border-dashed bg-background">
      <div className="border-grid">
        <div className="container-wrapper">
          <header className="container h-16 flex items-center md:justify-center gap-4">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Trees className="h-6 w-6" />
                <span className="sr-only">Attica Package Company Inc.</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "hover:text-foreground",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                      <Trees className="h-6 w-6" />
                      <span className="sr-only">
                        Attica Package Company Inc.
                      </span>
                    </Link>
                  </SheetClose>
                  {navItems.map((item) => (
                    <SheetClose key={item.title} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "hover:text-foreground",
                          pathname === item.href
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </header>
        </div>
      </div>
    </div>
  );
}
