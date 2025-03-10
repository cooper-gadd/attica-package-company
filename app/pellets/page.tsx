import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Apple, Flame, Leaf, TreeDeciduous } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pellets",
  description:
    "We offer premium pellets for both BBQ grilling and home heating, providing high-quality options for all your pellet needs.",
};

const pelletTypes = [
  {
    icon: Apple,
    iconColor: "text-green-500",
    title: "Apple Wood",
    description:
      "Made from locally source apple hardwoods, infusing your chicken, pork, seafood and more with a sweet and smoky favor combination.",
  },
  {
    icon: TreeDeciduous,
    iconColor: "text-amber-500",
    title: "Sweet Hickory",
    description:
      "A bold blend of hickory, maple and cherry flavors perfect for meats, veggies, seafood and more.",
  },
  {
    icon: Leaf,
    iconColor: "text-red-500",
    title: "Northern Hardwoods",
    description:
      "A combination of tart cherry and sweet maple hardwoods to add unique flavor to your cooking.",
  },
  {
    icon: Flame,
    iconColor: "text-orange-500",
    title: "Premium Heating",
    description:
      "PFI certified premium grade pellet fuel made from locally sourced hardwoods, sold by the ton.",
  },
];

const pelletFuelPerformance = [
  {
    title: "High BTU Value",
    description:
      "Over 8200 BTU per pound providing maximum heat output for efficient home heating.",
  },
  {
    title: "Low Ash Content",
    description:
      "Under 0.8% ash content means less maintenance and cleaner operation of your pellet stove.",
  },
  {
    title: "Optimal Size",
    description:
      "Pellets are less than 1.5 inches long to prevent feeder jamming and ensure consistent fuel delivery.",
  },
  {
    title: "Minimal Fines",
    description:
      "Less than 0.5% fines for a smoother, cleaner burn with reduced dust and residue.",
  },
];

export default function PelletsPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Premium Pellets</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  High-quality Dry Creek pellets for BBQ and heating, made from
                  100% local hardwoods.
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
          <div className="grid grid-cols-1 md:grid-cols-4">
            {pelletTypes.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border-grid border-b",
                  index !== pelletTypes.length - 1 && "md:border-r",
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
                    Pellets for your BBQ
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We carry a variety of Dry Creek BBQ pellets that are
                      perfect for your grill or smoker. These pellets are 100%
                      All-Natural premium-grade BBQ Pellets, locally sourced for
                      a next-level, rich flavor. They are available in a variety
                      of flavors. Whether you are grilling chicken, pork, beef,
                      seafood or veggies, these pellets will add a delicious
                      flavor to your food. They are sold by the bag.
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
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">
                    Pellets for your home
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We offer wood pellets for heating your home. The pellets
                      are made from locally sourced hardwoods and are PFI
                      certified premium grade pellet fuel. They are sold by the
                      ton.
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
              <h2 className="text-3xl font-semibold text-center mb-12">
                Pellet Fuel Performance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pelletFuelPerformance.map((feature, index) => (
                  <Card key={index} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
