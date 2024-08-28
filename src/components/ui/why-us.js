import React from 'react'
import { DropletIcon, FilterIcon, LeafIcon } from '../icons/icons'

const WhyUs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 md:gap-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Our Water Filters?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our advanced water filters are designed to remove impurities, improve taste, and provide you with
              the cleanest, healthiest water possible.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          <div className="flex flex-col items-center gap-4">
            <FilterIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Effective Filtration</h3>
            <p className="text-muted-foreground text-sm">
              Our filters use advanced technology to remove up to 99.9% of contaminants, ensuring you have clean,
              safe water.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <DropletIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Improved Taste</h3>
            <p className="text-muted-foreground text-sm">
              Enjoy the refreshing taste of pure, filtered water with our advanced technology.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <LeafIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Eco-Friendly</h3>
            <p className="text-muted-foreground text-sm">
              Our filters are designed to be sustainable and environmentally friendly, reducing plastic waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyUs
