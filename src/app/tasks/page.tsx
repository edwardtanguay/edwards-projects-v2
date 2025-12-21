
export default function Company() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-8">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
						Tasks
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
					This is the status of tasks from all my software projects.
					</p>
				</div>

				<div className="space-y-6">
					<section>
						<h2 className="text-2xl font-semibold text-gray-100 mb-3">
						Current Tasks:
						</h2>
						<p className="text-gray-400 leading-relaxed">test</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-gray-100 mb-3">
						Upcoming Tasks:
						</h2>
						<p className="text-gray-400 leading-relaxed">test</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-gray-100 mb-3">
						Finished Tasks:
						</h2>
						<p className="text-gray-400 leading-relaxed">test</p>
					</section>
					
				</div>
			</div>
		</div>
	);
}
