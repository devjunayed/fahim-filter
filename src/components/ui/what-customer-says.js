import React from 'react'

const Reviews = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:gap-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    What Our Customers Say
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear from our satisfied customers and see why they love our
                    water filters.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                <div className="flex flex-col items-start gap-4 p-6 rounded-lg bg-muted">
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      alt="Customer 1"
                      width={48}
                      height={48}
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">
                        Satisfied Customer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    "I've been using the Pure Water Filter for a few months\n
                    now, and I'm so impressed with the difference it's made in\n
                    the taste and quality of my water. Highly recommended!"
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 p-6 rounded-lg bg-muted">
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      alt="Customer 2"
                      width={48}
                      height={48}
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground">
                        Satisfied Customer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    "I was hesitant to try a water filter at first, but the\n
                    Pure Water Filter has exceeded my expectations. It's easy\n
                    to use and has made a noticeable difference in the\n
                    cleanliness and taste of my water."
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 p-6 rounded-lg bg-muted">
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      alt="Customer 3"
                      width={48}
                      height={48}
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-semibold">Michael Johnson</h4>
                      <p className="text-sm text-muted-foreground">
                        Satisfied Customer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    "I've tried several water filters in the past, but the
                    Pure\n Water Filter is by far the best. It's easy to
                    install, and\n the water tastes amazing. I highly recommend
                    it to anyone\n looking for a reliable and effective water
                    filtration\n solution."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Reviews
