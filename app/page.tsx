import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Flame, Leaf, TreeDeciduous } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    icon: Leaf,
    iconColor: "text-amber-600",
    title: "Garden Mulch",
    description:
      "Premium natural brown and dyed black mulch for your landscaping needs.",
    link: "/mulch",
  },
  {
    icon: TreeDeciduous,
    iconColor: "text-green-600",
    title: "Playground Material",
    description:
      "Certified safe playground material for parks, schools, and residential areas.",
    link: "/playground",
  },
  {
    icon: Flame,
    iconColor: "text-orange-500",
    title: "Premium Pellets",
    description:
      "High-quality BBQ and heating pellets made from local hardwoods.",
    link: "/pellets",
  },
];

export default function Home() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Attica Package Company Inc.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Your premier source for your landscaping needs.
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
              <h2 className="text-3xl font-semibold text-center mb-12">
                Our Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card key={index} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <product.icon
                          className={cn("h-5 w-5", product.iconColor)}
                        />
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {product.description}
                      </p>
                      <Button asChild>
                        <Link href={product.link}>Learn More</Link>
                      </Button>
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
                    About Our Business
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We are a multi-generational family-owned business with a
                      commitment to excellence in wood processing. We use
                      advanced equipment like the Morbark 6400 XT Horizontal
                      Grinder and Star Screener to produce high-quality wood
                      products. We maintain strict quality control standards and
                      are committed to environmental sustainability in our
                      operations.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <Image
                      src="/yard.jpg"
                      alt="Yard"
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
                <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Reach out to discuss your needs or request a quote for any of
                  our products.
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
