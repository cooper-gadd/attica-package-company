import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mulch",
  description:
    "We offer both natural brown and dyed black mulch for your garden.",
};

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
                <p className="text-lg text-muted-foreground">
                  We offer both natural brown and dyed black mulch for your
                  garden. The natural brown mulch is made from a blend of
                  hardwoods and is quad ground to a fine texture. The dyed black
                  mulch is produced from an identical blend of hardwoods. It
                  undergoes a triple grinding process before being colored with
                  a black colorant. Both are available for delivery or pick-up
                  at our facility.
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
                    How is Dyed Mulch Made?
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
    </main>
  );
}
