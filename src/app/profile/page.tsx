import { Award, Briefcase, GraduationCap } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Profile
          </h1>
          <p className="text-lg text-gray-400">
            Learn about our team and expertise.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gray-700 rounded-lg flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-100 mb-1">
                Professional Team
              </h2>
              <p className="text-gray-400 mb-4">
                Dedicated to delivering excellence
              </p>
              <p className="text-gray-400">
                With over a decade of combined experience in web development and
                digital solutions, our team is committed to bringing your vision
                to life.
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-2">
            <Briefcase size={24} />
            Experience
          </h2>
          <div className="space-y-4">
            {[
              {
                role: "Senior Developer",
                company: "Tech Company Inc.",
                duration: "2020 - Present",
              },
              {
                role: "Full Stack Developer",
                company: "Digital Solutions Ltd.",
                duration: "2018 - 2020",
              },
              {
                role: "Junior Developer",
                company: "StartUp Co.",
                duration: "2016 - 2018",
              },
            ].map((job) => (
              <div
                key={job.role}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4"
              >
                <h3 className="font-semibold text-gray-100">{job.role}</h3>
                <p className="text-gray-400 text-sm">{job.company}</p>
                <p className="text-gray-500 text-xs mt-1">{job.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-2">
            <GraduationCap size={24} />
            Education
          </h2>
          <div className="space-y-4">
            {[
              {
                degree: "Bachelor of Science in Computer Science",
                school: "University of Technology",
                year: "2016",
              },
              {
                degree: "Full Stack Web Development Certification",
                school: "Code Academy",
                year: "2015",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4"
              >
                <h3 className="font-semibold text-gray-100">{edu.degree}</h3>
                <p className="text-gray-400 text-sm">{edu.school}</p>
                <p className="text-gray-500 text-xs mt-1">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-2">
            <Award size={24} />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "React & Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Database Design",
              "UI/UX Design",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}