/* eslint-disable react/no-unescaped-entities */
import tasks from "../../../parseddata/tasks.json";

const currentTasks = [
	...tasks.filter((task) => task.stage === "current"),
	...tasks.filter((task) => task.stage === "paused"),
];

export default function Company() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-8">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
						Current Tasks
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						I'm currently working on the following tasks from my
						software projects.
					</p>
				</div>

				<div className="space-y-4">
					{currentTasks.map((task) => (
						<div
							key={task.suuid}
							className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition"
						>
							<div className="flex items-start justify-between mb-2">
								<h2 className="text-xl font-semibold text-gray-100">
									{task.title}
								</h2>
								<span className="inline-block px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 border-l-2 border-blue-500">
									{task.kind}
								</span>
							</div>
							<p className="text-sm text-gray-400">
								Project:{" "}
								<span className="text-gray-300 font-medium">
									{task.projectIdCode}
								</span>
							</p>
							{task.beginDateTime && (
								<p className="text-sm text-gray-400">
									Started on{" "}
									<span className="text-gray-300 font-medium">
										{new Date(
											task.beginDateTime
										).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
										})}
									</span>
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
