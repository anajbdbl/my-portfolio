import Image from 'next/image';

export default function EditorialSection() {
  return (
    <section className="relative grid grid-cols-12 gap-y-16 px-8 py-20 font-sans">
      <h2 className="col-span-7 text-5xl sm:text-6xl font-extrabold leading-none tracking-tight">
        An Editorial Layout
      </h2>
      <p className="col-start-9 col-span-4 text-lg font-light leading-relaxed">
        Playing with an asymmetric grid and generous white space gives this layout a print-inspired feel.
      </p>

      <p className="col-start-2 col-span-5 text-base font-medium leading-relaxed">
        Tailwind&apos;s utility classes allow for rapid experimentation. Here we mix font weights and let blocks breathe through wide gaps.
      </p>

      <p className="col-start-7 col-span-4 text-xl font-bold leading-snug">
        Notice how each block aligns differently, breaking the predictable rhythm of strict grids.
      </p>

      <p className="col-start-4 col-span-5 text-sm font-light leading-loose">
        The board from Pinterest served as inspiration for the interplay of type and negative space.
      </p>

      <div className="col-start-2 col-span-6 row-start-2 row-span-2 relative mt-10">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={500}
          height={400}
          className="border-4 border-black border-dashed relative z-10"
        />
        <Image
          src="/portfolio-redesign.png"
          alt="Portfolio redesign"
          width={300}
          height={200}
          className="absolute -top-12 left-1/2 w-1/2 border-4 border-black border-dashed rotate-2"
        />
      </div>

      <svg
        className="pointer-events-none absolute -top-10 right-10 h-24 w-24 text-black"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M10 80 C30 10, 70 10, 90 80" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </section>
  );
}
