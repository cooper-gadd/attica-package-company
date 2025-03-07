import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, LucideProps, Utensils } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const metadata: Metadata = {
  title: "Pellets",
  description:
    "We offer premium pellets for both BBQ grilling and home heating, providing high-quality options for all your pellet needs.",
};

const pellets: {
  title: string;
  type: "BBQ" | "Heating";
  description: string;
  image: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}[] = [
  {
    title: "Dry Creek Apple Pellets",
    type: "BBQ",
    description:
      "These apple pellets are made from locally source apple hardwoods. The apple pellets infuse your chicken, pork, seafood and more with a sweet and smoky favor combination.",
    image: "/pellets-apple.jpg",
    icon: Utensils,
  },
  {
    title: "Dry Creek Sweet Hickory Pellets",
    type: "BBQ",
    description:
      "These sweet hickory pellets will infuse your meats, veggies, seafood and more with a bold hickory, maple and cherry flavor blended together.",
    image: "/pellets-sweet-hickory.jpg",
    icon: Utensils,
  },
  {
    title: "Dry Creek Northern Hardwoods Pellets",
    type: "BBQ",
    description:
      "These pellets will combine tart cherry and sweet maple hardwoods to add flavor to your meats, veggies, seafood and more.",
    image: "/pellets-northern-hardwoods.jpg",
    icon: Utensils,
  },
  {
    title: "Dry Creek Wood Pellets for Fuel",
    type: "Heating",
    description:
      "These heating pellets are made from locally sourced hardwoods and are PFI certified premium grade pellet fuel. They are sold by the ton.",
    image: "/pellets-premium.jpg",
    icon: Flame,
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
      {/* Header Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Premium Pellets</h1>
                <p className="text-lg text-muted-foreground">
                  Discover our selection of high-quality Dry Creek pellets for
                  both BBQ cooking and home heating. We provide 100%
                  all-natural, locally-sourced options that deliver exceptional
                  performance for all your pellet needs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Pellets Section */}
      {pellets.map((pellet) => (
        <div key={pellet.title} className="border-grid border-b">
          <div className="container-wrapper">
            <section className="py-24">
              <div className="container">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="w-full md:w-[300px] flex-shrink-0">
                    <div className="max-w-[75%] mx-auto aspect-[3/4] relative overflow-hidden rounded-lg">
                      <Image
                        src={pellet.image}
                        alt={pellet.title}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-semibold mb-4">
                      {pellet.title}
                    </h2>
                    <div className="flex items-center gap-2 mb-6">
                      <pellet.icon className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">
                        {pellet.type === "BBQ"
                          ? "Cooking Pellets"
                          : "Heating Pellets"}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {pellet.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ))}

      {/* Pellet Fuel Performance Section */}
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
