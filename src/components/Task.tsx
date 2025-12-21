

interface TaskData {
	suuid: string;
	title: string;
	projectIdCode: string;
	beginDateTime?: string;
	kind: string;
	stage: string;
	rank?: number;
}

interface TaskProps {
	task: TaskData;
}

export default function Task({ task }: TaskProps) {
	return (
		<div
			className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-4 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition"
		>
			<h2 className="text-xl font-semibold text-blue-100 mb-3">
				{task.title}
			</h2>
			<div className="flex justify-between items-end gap-3">
				<div className="flex flex-col gap-1">
					<p className="text-sm text-gray-300">
						Project:{" "}
						<span className="text-purple-300 font-medium">
							{task.projectIdCode}
						</span>
					</p>
					{task.stage === "current" && task.beginDateTime && (
						<p className="text-sm text-gray-300">
							Started on{" "}
							<span className="text-emerald-300 font-medium">
								{new Date(task.beginDateTime).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								})}
							</span>
						</p>
					)}
					{task.stage === "upcoming" && task.rank && (
						<p className="text-sm text-gray-300">
							Rank: <span className="text-red-300 font-medium">{task.rank}</span>
						</p>
					)}
				</div>
				<span className="inline-block px-2 py-1 text-xs font-medium bg-blue-950 text-blue-200 border-l-2 border-blue-400">
					{task.kind}
				</span>
			</div>
		</div>
	);
}
