import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(banner.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold  text-blue-200">
            Pure Water for a Healthier Life
          </h1>
          <p className="mb-5 md:text-xl text-sm">
            Discover the power of our advanced water filters, designed to
            provide you with clean, refreshing water every day.
          </p>
          <button className="btn bg-blue-100 text-black border-none outline-none hover:bg-blue-200 md:text-base text-sm ">
            Browse Now
          </button>
        </div>
      </div>
    </section>
    //   <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/banner.png')] bg-cover bg-center">
    //   <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6 text-center">
    //     <div className="space-y-2">
    //       <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
    //         Pure Water for a Healthier Life
    //       </h1>
    //       <p className="max-w-[600px] text-muted-foreground md:text-xl">
    //
    //       </p>
    //     </div>
    //     <Link
    //       href="#"
    //       className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    //       prefetch={false}
    //     >
    //       Shop Filters
    //     </Link>
    //   </div>
    // </section>
  );
};

export default Banner;
