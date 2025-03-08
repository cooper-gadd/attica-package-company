import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarFront, Leaf, TreeDeciduous, Truck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mulch",
  description:
    "We offer both natural brown and dyed black mulch for your garden.",
};

const mulchTypes = [
  {
    icon: Leaf,
    title: "Natural Brown",
    description:
      "Made from a blend of hardwoods, quad ground to a fine texture.",
  },
  {
    icon: TreeDeciduous,
    title: "Dyed Black",
    description: "Triple ground hardwoods colored with black colorant.",
  },
];

const pickupOptions = [
  {
    icon: Truck,
    title: "Delivery",
    description: "Available for delivery to your location with our trucks.",
  },
  {
    icon: CarFront,
    title: "Self Pick-up",
    description: "Bring your truck or trailer to load mulch at our facility.",
  },
];

export default function MulchPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Mulch For Your Garden
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  We offer both natural brown and dyed black mulch for your
                  garden.
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
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-semibold text-center mb-12">
                Our Mulch Types
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {mulchTypes.map((item, index) => (
                  <Card key={index} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
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
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">
                    How Natural Mulch is Made
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The Natural Brown Mulch is manufactured by using raw bark
                      through a Morbark 6400 XT Horizontal Grinder. Once the
                      material is at the desired specification it is sent
                      through our Star Screener to remove fines and overs.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <Image
                      src="/mulch-brown-house-corner.jpg"
                      alt="Mulch Brown House Corner"
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
                    How Dyed Mulch is Made
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The Dyed Black Mulch is manufactured from a process of
                      grinding slash through a Morbark 6400 XT Horizontal
                      Grinder. Once the material is at the desired specification
                      it is sent through our Star Screener to remove fines and
                      overs. Finally, the mulch is distributed into the
                      Doppstadt Colorizer to add the dyed black colorant to the
                      material.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <Image
                      src="/mulch-black-house-gate.jpg"
                      alt="Mulch Black House Gate"
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
                Pickup Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {pickupOptions.map((item, index) => (
                  <Card key={index} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
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
