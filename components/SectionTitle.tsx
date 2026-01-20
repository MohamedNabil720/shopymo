import React from "react";

export default function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center py-36 ">
      <h2 className="text-4xl font-bold mb-2 inline-flex items-center gap-1">
        {title}
      </h2>

      <div className="w-12 h-1 bg-primary mx-auto text-left mb-4"></div>
      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
