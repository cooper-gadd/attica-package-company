import { cn } from "@/lib/utils";
import { Clock, Mail, MapPinHouse, Phone, Printer } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to us for your questions or inquiries.",
};

const businessHours = [
  {
    title: "Weekdays",
    hours: "8:30 AM - 4:30 PM",
  },
  {
    title: "Weekends",
    hours: "Closed",
  },
];

export default function ContactPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Contact Attica Package Company Inc.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Reach out to us for your questions or inquiries.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {businessHours.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border-grid border-b",
                  index !== businessHours.length - 1 && "md:border-r",
                )}
              >
                <section className="py-24">
                  <div className="container flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5" />
                      <h2 className="text-2xl font-semibold">{item.title}</h2>
                    </div>
                    <p className="text-muted-foreground">{item.hours}</p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-grid border-b md:border-r">
              <section className="py-24">
                <div className="container flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPinHouse className="h-5 w-5" />
                    <h2 className="text-2xl font-semibold">Address</h2>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=45 Windsor St, Attica, NY 14011"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    45 Windsor St, Attica, NY 14011
                  </a>
                </div>
              </section>
            </div>

            <div className="border-grid border-b">
              <section className="py-24">
                <div className="container flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5" />
                    <h2 className="text-2xl font-semibold">Phone</h2>
                  </div>
                  <a
                    href="tel:585-591-0510"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (585) 591-0510
                  </a>
                </div>
              </section>
            </div>

            <div className="border-grid border-b md:border-r">
              <section className="py-24">
                <div className="container flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5" />
                    <h2 className="text-2xl font-semibold">Email</h2>
                  </div>
                  <a
                    href="mailto:office@atticapackage.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    office@atticapackage.com
                  </a>
                </div>
              </section>
            </div>

            <div className="border-grid border-b">
              <section className="py-24">
                <div className="container flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Printer className="h-5 w-5" />
                    <h2 className="text-2xl font-semibold">Fax</h2>
                  </div>
                  <span className="text-muted-foreground">(585) 591-3655</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
