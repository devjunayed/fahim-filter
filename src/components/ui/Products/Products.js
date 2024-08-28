import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../pagination";
import Link from "next/link";

const Products = ({
  paginate,
  currentProducts,
  currentPage,
  products,
  productsPerPage,
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Water Filter Products
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our selection of high-quality water filters and find the
                perfect solution for your home or office.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            {currentProducts.map((product) => (
              <div key={product.id} className="relative group">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-none text-muted-foreground">
                    {product.description}
                  </p>
                  <h4 className="font-semibold">${product.price}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                </PaginationItem>
                {[...Array(Math.ceil(products.length / productsPerPage))].map(
                  (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        onClick={() => paginate(index + 1)}
                        isActive={index + 1 === currentPage}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={
                      currentPage ===
                      Math.ceil(products.length / productsPerPage)
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
