import {
    Mail,
    MapPin,
    Phone,
    Printer,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-grid border-t">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-balance text-sm leading-loose text-muted-foreground">
              Attica Package Company Inc.
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=45 Windsor St, Attica, NY 14011"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5" />
              </a>
              <a
                href="tel:585-591-0510"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:office@atticapackage.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="fax:585-591-3655"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Printer className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
