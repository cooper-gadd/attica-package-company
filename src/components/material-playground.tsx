export function MaterialPlayground() {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Material for your playground.
          </span>{" "}
          We offer Certified Playground Material that is safe for your kids to
          play on. We have documentation that is available upon request to
          support our Certified Playground Material.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            How is it Made?
          </span>{" "}
          The Certified Playground Material is manufactured from clean chips
          sent through our 2755 Morbark Chipper. The wood chips are then
          processed through our Morbark 6400 XT Horizontal Grinder to obtain the
          desired specification. The material is then sent thru our Star
          Screener to remove sawdust.
        </p>
        <img
          src="/images/playground/home.jpg"
          alt="Certified Playground Material"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
        />
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            How is it Tested?
          </span>{" "}
          The Engineered Wood Fiber has been shipped out to be tested for size,
          consistency, cushion, compaction and wheelchair accessibility to be
          safely distributed at parks, schools, municipalities and residential
          homes.
        </p>
        <img
          src="/images/playground/school.jpg"
          alt="Certified Playground Material"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
        />
      </div>
    </>
  );
}
