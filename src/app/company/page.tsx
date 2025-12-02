export default function Company() {
  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Company
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Learn more about our company and our mission.
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are a forward-thinking company dedicated to delivering excellence
              in everything we do. Our journey began with a simple vision: to
              create meaningful solutions that make a difference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide exceptional value to our clients while
              maintaining the highest standards of quality and integrity. We
              believe in building lasting relationships based on trust and
              mutual respect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Values
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Commitment to excellence</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Innovation and creativity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Integrity and transparency</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>Customer-centric approach</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

