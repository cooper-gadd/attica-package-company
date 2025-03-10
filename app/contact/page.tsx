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
    external: true,
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
  },
];

const businessHours = [
  {
    icon: Clock,
    title: "Weekdays",
    content: "8:30 AM - 4:30 PM",
  },
  {
    icon: Clock,
    title: "Weekends",
    content: "Closed",
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
                      <item.icon className="h-5 w-5" />
                      <h2 className="text-2xl font-semibold">{item.title}</h2>
                    </div>
                    <p className="text-muted-foreground">{item.content}</p>
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
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border-grid border-b",
                  index % 2 === 0 && "md:border-r",
                )}
              >
                <section className="py-24">
                  <div className="container flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="h-5 w-5" />
                      <h2 className="text-2xl font-semibold">{item.title}</h2>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        {...(item.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">
                        {item.content}
                      </span>
                    )}
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
