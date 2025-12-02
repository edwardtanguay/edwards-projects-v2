export default function Personal() {
  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Personal
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to my personal page. Here you can learn more about my
            interests, hobbies, and personal journey.
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This is a space where I share personal insights, experiences, and
              reflections. Feel free to explore and get to know me better.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Interests
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I enjoy exploring various topics and activities that enrich my life
              and broaden my perspective.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

