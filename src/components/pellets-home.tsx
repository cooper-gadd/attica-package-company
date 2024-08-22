export function PelletsHome() {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Pellets for your home.
          </span>{" "}
          We offer wood pellets for heating your home. The pellets are made from
          locally sourced hardwoods and are PFI certified premium grade pellet
          fuel. They are sold by the ton.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Dry Creek Wood Pellets for Fuel.
          </span>{" "}
          These heating pellets are made from locally sourced hardwoods.
        </p>
        <img
          src="/images/pellets/premium.jpg"
          alt="Premium Pellets"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
        />
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The pellet fuel excels in performance.
          </span>{" "}
          With a BTU value over 8200 per pound, it provides maximum heat output.
          The ash content is under 0.8%, meaning less maintenance for you. The
          pellets are less than 1.5 inches long to prevent feeder jamming, and
          fines are kept under 0.5% for a smoother, cleaner burn. Simply put,
          the pellet fuel is designed for optimal efficiency.
        </p>
      </div>
    </>
  );
}
