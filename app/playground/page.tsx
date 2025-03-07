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
                  kids to play on. We have documentation that is available upon
                  request to support our Certified Playground Material.
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
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">
                    How It&apos;s Tested
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The Engineered Wood Fiber has been shipped out to be
                      tested for size, consistency, cushion, compaction and
                      wheelchair accessibility to be safely distributed at
                      parks, schools, municipalities and residential homes.
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
    </main>
  );
}
