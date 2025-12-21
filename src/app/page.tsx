/* eslint-disable react/no-unescaped-entities */
import _projects from "../../parseddata/projects.json";

export default function Home() {
  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Edward's Projects
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">This site shows the status of all my web and software development projects.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Responsive Design
            </h2>
            <p className="text-gray-400 text-sm">
currently {_projects.length} projects are tracked on this site, with more to come as I continue to develop and refine my portfolio.

            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
