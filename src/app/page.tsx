/* eslint-disable react/no-unescaped-entities */
import _projects from "../../parseddata/projects.json";

const activeProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "active")
);
const upcomingProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "upcoming")
);
const liveProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "live")
);
const showcaseProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "showcase")
);
const startProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "start")
);

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
          {activeProjects.map((project) => (
            <div
              key={project.suuid ?? project.idCode}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6"
            >
              <h2 className="text-lg font-semibold text-gray-100 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm">{project.status}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
