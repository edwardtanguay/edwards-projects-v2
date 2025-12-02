import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Edward's Projects
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            This is a clean, professional Next.js application with a responsive
            design, TypeScript support, and a minimalist aesthetic. Navigate
            through the menu to explore different sections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Responsive Design
            </h2>
            <p className="text-gray-400 text-sm">
              Works seamlessly on mobile, tablet, and desktop devices with a
              responsive hamburger menu.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              TypeScript
            </h2>
            <p className="text-gray-400 text-sm">
              Built with full TypeScript support for type safety and better
              development experience.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Modern Stack
            </h2>
            <p className="text-gray-400 text-sm">
              Powered by Next.js 14+ with React 18, Tailwind CSS, and Lucide
              icons.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Clean Code
            </h2>
            <p className="text-gray-400 text-sm">
              Professional, maintainable code with proper structure and best
              practices.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 pt-4">
          <span>Explore the menu to get started</span>
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
}
