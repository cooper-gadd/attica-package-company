export function ContactUs() {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-4">
        <article className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Contact Information:
          </span>{" "}
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Phone:
            </span>{" "}
            <a href="tel:585-591-0510">585-591-0510</a>
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Email:
            </span>{" "}
            <a href="mailto:office@atticapackage.com">
              office@atticapackage.com
            </a>
          </p>
          <span className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Fax:
            </span>{" "}
            <a href="fax:5855913655">585-591-3655</a>
          </span>
        </article>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-4">
        <article className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Business Hours:
          </span>{" "}
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Weekdays:
            </span>{" "}
            8:30 AM - 4:30 PM
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Weekends:
            </span>{" "}
            Closed
          </p>
        </article>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Address:
          </span>{" "}
          <a
            target="_blank"
            href="https://www.google.com/maps/search/?api=1&query=45 Windsor St, Attica, NY 14011"
          >
            45 Windsor St, Attica, NY 14011
          </a>
        </p>
      </div>
    </>
  );
}
