export function MulchGarden() {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Mulch for Your Garden.
          </span>{" "}
          We offer both natural brown and dyed black mulch for your garden. The
          natural brown mulch is made from a blend of hardwoods and is quad
          ground to a fine texture. The dyed black mulch is produced from an
          identical blend of hardwoods. It undergoes a triple grinding process
          before being colored with a black colorant. Both are available for
          delivery or pick-up at our facility.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            How is Natural Mulch Made?
          </span>{" "}
          The Natural Brown Mulch is manufactured by using raw bark through a
          Morbark 6400 XT Horizontal Grinder. Once the material is at the
          desired specification it is sent through our Star Screener to remove
          fines and overs.
        </p>
        <img
          src="/images/mulch/brown/house/corner.jpg"
          alt="Natural Mulch"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
        />
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            How is Dyed Mulch Made?
          </span>{" "}
          The Dyed Black Mulch is manufactured from a process of grinding slash
          through a Morbark 6400 XT Horizontal Grinder. Once the material is at
          the desired specification it is sent through our Star Screener to
          remove fines and overs. Finally, the mulch is distributed into the
          Doppstadt Colorizer to add the dyed black colorant to the material.
        </p>
        <img
          src="/images/mulch/black/house/gate.jpg"
          alt="Dyed Mulch"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
        />
      </div>
    </>
  );
}
