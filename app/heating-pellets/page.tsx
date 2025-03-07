import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Heating Pellets",
  description: "We offer wood pellets for heating your home.",
};

const pelletFuelPerformance = [
  {
    title: "High BTU Value",
    description: "Over 8200 BTU per pound providing maximum heat output for efficient home heating."
  },
  {
    title: "Low Ash Content",
    description: "Under 0.8% ash content means less maintenance and cleaner operation of your pellet stove."
  },
  {
    title: "Optimal Size",
    description: "Pellets are less than 1.5 inches long to prevent feeder jamming and ensure consistent fuel delivery."
  },
  {
    title: "Minimal Fines",
    description: "Less than 0.5% fines for a smoother, cleaner burn with reduced dust and residue."
  }
];

export default function HeatingPelletsPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Pellets For Your Home
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  We offer wood pellets for heating your home. The pellets are
                  made from locally sourced hardwoods and are PFI certified
                  premium grade pellet fuel. They are sold by the ton.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">
                    Dry Creek Wood Pellets for Fuel
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      These heating pellets are made from locally sourced
                      hardwoods.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="max-w-[75%] mx-auto aspect-[3/4] relative overflow-hidden rounded-lg">
                    <Image
                      src="/pellets-premium.jpg"
                      alt="Pellets Premium"
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
