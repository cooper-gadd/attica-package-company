import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Building2, Home, School, TreeDeciduous } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "We offer Certified Playground Material that is safe for your kids to play on.",
};

const distributions = [
  {
    icon: TreeDeciduous,
    iconColor: "text-green-600",
    title: "Parks",
    description:
      "Providing certified playground material for public park playground areas.",
  },
  {
    icon: School,
    iconColor: "text-blue-500",
    title: "Schools",
    description:
      "Supplying safe, tested playground material for school playground zones.",
  },
  {
    icon: Building2,
    iconColor: "text-purple-500",
    title: "Municipalities",
    description:
      "Distributing certified playground material to municipal recreational areas.",
  },
  {
    icon: Home,
    iconColor: "text-orange-500",
    title: "Residential Homes",
    description:
      "Delivering quality playground material for residential backyard play areas.",
  },
];

export default function PlaygroundPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Material For Your Playground
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  We offer Certified Playground Material that is safe for your
                  kids to play on.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us for a Quote</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {distributions.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border-grid border-b",
                  index !== distributions.length - 1 && "md:border-r",
                )}
              >
                <section className="py-24">
                  <div className="container flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className={cn("h-5 w-5", item.iconColor)} />
                      <h2 className="text-2xl font-semibold">{item.title}</h2>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">
                    How It&apos;s Made
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The Certified Playground Material is manufactured from
                      clean chips sent through our 2755 Morbark Chipper. The
                      wood chips are then processed through our Morbark 6400 XT
                      Horizontal Grinder to obtain the desired specification.
                      The material is then sent thru our Star Screener to remove
                      sawdust.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg"
                      alt="Playground Home"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">
                  Certified Playground Material
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Engineered Wood Fiber has been shipped out to be tested
                  for size, consistency, cushion, compaction and wheelchair
                  accessibility to be safely distributed. We have documentation
                  that is available upon request.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us for Documentation</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
