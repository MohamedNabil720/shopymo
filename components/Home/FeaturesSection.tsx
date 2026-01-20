import { Truck, Headphones, RotateCcw } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "When order over $75",
      color: "text-primary",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get support all day",
      color: "text-primary",
    },
    {
      icon: RotateCcw,
      title: "Refund",
      description: "Get refund within 3 days!",
      color: "text-primary",
    },
  ];

  return (
    <div className="w-full bg-bg-gray py-20">
      <div className="max-w-6xl mx-auto px-4 flex justify-center md:block ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                  <feature.icon
                    className={`w-8 h-8 ${feature.color}`}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
