import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Flame, Leaf, TreeDeciduous } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pellets",
  description:
    "We offer premium pellets for both BBQ grilling and home heating, providing high-quality options for all your pellet needs.",
};

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
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="border-grid border-b md:border-r">
              <section className="py-24">
                <div className="container">
                  <div className="flex items-center gap-2 mb-2">
                    <Apple className="h-5 w-5" />
                    <h2 className="text-2xl font-semibold">Apple Wood</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Made from locally source apple hardwoods, infusing your
                    chicken, pork, seafood and more with a sweet and smoky favor
                    combination.
                  </p>
                </div>
              </section>
            </div>

            <div className="border-grid border-b md:border-r">
              <section className="py-24">
                <div className="container">
                  <div className="flex items-center gap-2 mb-2">
                    <TreeDeciduous className="h-5 w-5" />
                    <h2 className="text-2xl font-semibold">Sweet Hickory</h2>
                  </div>
                  <p className="text-muted-foreground">
                    A bold blend of hickory, maple and cherry flavors perfect
                    for meats, veggies, seafood and more.
                  </p>
                </div>
              </section>
            </div>

            <div className="border-grid border-b md:border-r">
              <section className="py-24">
                <div className="container">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="h-5 w-5" />
                    <h2 className="text-2xl font-semibold">
                      Northern Hardwoods
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    A combination of tart cherry and sweet maple hardwoods to
                    add unique flavor to your cooking.
                  </p>
                </div>
              </section>
            </div>

            <div className="border-grid border-b">
              <section className="py-24">
                <div className="container">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="h-5 w-5" />
                    <h2 className="text-2xl font-semibold">Premium Heating</h2>
                  </div>
                  <p className="text-muted-foreground">
                    PFI certified premium grade pellet fuel made from locally
                    sourced hardwoods, sold by the ton.
                  </p>
                </div>
              </section>
            </div>
          </div>
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

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Contact us to place an order for our premium pellets.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
