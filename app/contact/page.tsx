import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Clock, Mail, MapPinHouse, Phone, Printer } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to us for your questions or inquiries.",
};

const contactInfo = [
  {
    icon: MapPinHouse,
    title: "Address",
    content: "45 Windsor St, Attica, NY 14011",
    href: "https://www.google.com/maps/search/?api=1&query=45 Windsor St, Attica, NY 14011",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "(585) 591-0510",
    href: "tel:585-591-0510",
  },
  {
    icon: Mail,
    title: "Email",
    content: "office@atticapackage.com",
    href: "mailto:office@atticapackage.com",
  },
  {
    icon: Printer,
    title: "Fax",
    content: "(585) 591-3655",
    href: "fax:585-591-3655",
  },
];

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
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-semibold text-center mb-12">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <info.icon className="h-5 w-5" />
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={info.href}
                        target={info.target}
                        rel={info.rel}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
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
