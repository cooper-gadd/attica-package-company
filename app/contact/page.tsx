import { Clock, Mail, MapPinHouse, Phone, Printer } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call to get a quote",
};
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
                  Reach out to us for a quote.
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
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=45 Windsor St, Attica, NY 14011"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPinHouse className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <span className="text-lg">
                        45 Windsor St, Attica, NY 14011
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:585-591-0510"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <span className="text-lg">(585) 591-0510</span>
                    </div>
                  </a>

                  <a
                    href="mailto:office@atticapackage.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <span className="text-lg">office@atticapackage.com</span>
                    </div>
                  </a>

                  <a
                    href="fax:585-591-3655"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Printer className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Fax</p>
                      <span className="text-lg">(585) 591-3655</span>
                    </div>
                  </a>

                  <div className="pt-6 border-t">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Clock className="h-5 w-5" />
                      <p className="font-medium">Business Hours</p>
                    </div>
                    <div className="mt-2 ml-8 space-y-1 text-muted-foreground">
                      <p className="text-lg">Weekdays: 8:30 AM - 4:30 PM</p>
                      <p className="text-lg">Weekends: Closed</p>
                    </div>
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
