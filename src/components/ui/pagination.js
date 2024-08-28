import React from 'react';

export function Pagination({ children }) {
  return (
    <nav className="flex items-center justify-center space-x-2">
      {children}
    </nav>
  );
}

export function PaginationContent({ children }) {
  return <ul className="flex">{children}</ul>;
}

export function PaginationItem({ children }) {
  return <li>{children}</li>;
}

export function PaginationPrevious({ href, onClick, disabled }) {
  return (
    <PaginationLink
      href={href}
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous"
    >
      &laquo;
    </PaginationLink>
  );
}

export function PaginationNext({ href, onClick, disabled }) {
  return (
    <PaginationLink
      href={href}
      onClick={onClick}
      disabled={disabled}
      aria-label="Next"
    >
      &raquo;
    </PaginationLink>
  );
}

export function PaginationLink({ href, onClick, children, disabled, isActive }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        if (!disabled) onClick();
      }}
      className={`inline-block px-3 py-1 text-sm font-medium transition-colors rounded ${isActive ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'} ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
    >
      {children}
    </a>
  );
}
