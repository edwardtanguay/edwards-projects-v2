import { Code2, Smartphone, Zap, Lock, BarChart3, Headphones } from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: <Code2 size={32} />,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Responsive Design",
    description:
      "Beautifully designed interfaces that work flawlessly on all devices.",
  },
  {
    icon: <Zap size={32} />,
    title: "Performance",
    description:
      "Optimized applications that load fast and respond instantly to user interactions.",
  },
  {
    icon: <Lock size={32} />,
    title: "Security",
    description:
      "Industry-standard security practices to protect your data and user information.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Analytics",
    description: "Track and measure user engagement with comprehensive analytics.",
  },
  {
    icon: <Headphones size={32} />,
    title: "Support",
    description: "Ongoing technical support and maintenance for your applications.",
  },
];

export default function Services() {
  return (
    <div className="p-8 md:p-12 max-w-6xl">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 border border-gray-300 rounded-lg p-6 hover:border-gray-400 transition"
            >
              <div className="text-gray-700 mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}