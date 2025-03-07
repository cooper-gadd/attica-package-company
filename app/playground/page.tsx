import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, School, TreeDeciduous } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "We offer Certified Playground Material that is safe for your kids to play on.",
};

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
                <p className="text-lg text-muted-foreground">
                  We offer Certified Playground Material that is safe for your
                  kids to play on.
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
                      src="/playground-home.jpg"
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
                Where We Distribute
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TreeDeciduous className="h-5 w-5" />
                      Parks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Providing certified playground material for public park
                      playground areas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <School className="h-5 w-5" />
                      Schools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Supplying safe, tested playground material for school
                      playground zones.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      Municipalities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Distributing certified playground material to municipal
                      recreational areas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Residential Homes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Delivering quality playground material for residential
                      backyard play areas.
                    </p>
                  </CardContent>
                </Card>
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
                    How It&apos;s Tested
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The Engineered Wood Fiber has been shipped out to be
                      tested for size, consistency, cushion, compaction and
                      wheelchair accessibility to be safely distributed.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <Image
                      src="/playground-school.jpg"
                      alt="Playground School"
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
                <h2 className="text-3xl font-bold mb-6">Documentation</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We have documentation available upon request for our certified
                  playground mulch.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
