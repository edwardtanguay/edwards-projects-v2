export default function About() {
  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            About
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Learn more about this project and what it represents.
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-3">
              Project Overview
            </h2>
            <p className="text-gray-400 leading-relaxed">
              This is a professional, production-ready Next.js template that
              demonstrates best practices for building modern web applications.
              It combines a clean aesthetic with functional design, ensuring
              both usability and visual appeal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-3">
              Design Philosophy
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The design follows minimalist principles with a light gray color
              palette. This approach reduces visual clutter while maintaining
              professional aesthetics and ensuring excellent readability and
              user experience across all devices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-3">
              Key Features
            </h2>
            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Responsive navigation with mobile hamburger menu</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Full TypeScript implementation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Six main pages with icons</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Tailwind CSS for styling</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Lucide React icons</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}