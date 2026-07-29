import React from 'react';

interface PageHeadingProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-bold font-inter mb-2">{title}</h1>
      <p className="text-gray-500 text-sm">
        {description}
      </p>
    </div>
  );
}
