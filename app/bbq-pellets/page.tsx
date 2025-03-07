import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BBQ Pellets",
  description:
    "We carry a variety of Dry Creek BBQ pellets that are perfect for your grill or smoker.",
};

export default function BBQPelletsPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Pellets For Your BBQ
                </h1>
                <p className="text-lg text-muted-foreground">
                  We carry a variety of Dry Creek BBQ pellets that are perfect
                  for your grill or smoker. These pellets are 100% All-Natural
                  premium-grade BBQ Pellets, locally sourced for a next-level,
                  rich flavor. They are available in a variety of flavors.
                  Whether you are grilling chicken, pork, beef, seafood or
                  veggies, these pellets will add a delicious flavor to your
                  food. They are sold by the bag.
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
                    Dry Creek Apple Pellets
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      These apple pellets are made from locally source apple
                      hardwoods. The apple pellets infuse your chicken, pork,
                      seafood and more with a sweet and smoky favor combination.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="max-w-[75%] mx-auto aspect-[3/4] relative overflow-hidden rounded-lg">
                    <Image
                      src="/pellets-apple.jpg"
                      alt="Pellets Apple"
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
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">
                    Dry Creek Sweet Hickory Pellets
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      These sweet hickory pellets will infuse your meats,
                      veggies, seafood and more with a bold hickory, maple and
                      cherry flavor blended together.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="max-w-[75%] mx-auto aspect-[3/4] relative overflow-hidden rounded-lg">
                    <Image
                      src="/pellets-sweet-hickory.jpg"
                      alt="Pellets Sweet Hickory"
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
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">
                    Dry Creek Northern Hardwoods Pellets
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      These pellets will combine tart cherry and sweet maple
                      hardwoods to add flavor to your meats, veggies, seafood
                      and more.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="max-w-[75%] mx-auto aspect-[3/4] relative overflow-hidden rounded-lg">
                    <Image
                      src="/pellets-northern-hardwoods.jpg"
                      alt="Pellets Northern Hardwoods"
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
