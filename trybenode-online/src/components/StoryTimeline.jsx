import Reveal from "@/components/Reveal";

const milestones = [
  {
    title: "Leadcity University",
    description: "Two engineering students decide to stop building for other people's ideas.",
    done: true,
  },
  {
    title: "TrybeNode registered",
    description: "Made it official — a registered technology studio, not just a side project.",
    done: true,
  },
  {
    title: "TrybeMarket ships",
    description: "The first venture goes live: a marketplace built for students, by students.",
    done: true,
  },
  {
    title: "What's next",
    description: "The next venture is already taking shape.",
    done: false,
  },
];

export default function StoryTimeline() {
  return (
    <div className="relative pl-2">
      {milestones.map((milestone, index) => (
        <Reveal key={milestone.title} delay={index * 100} className="relative flex gap-5 pb-10 last:pb-0">
          <div className="relative shrink-0 flex flex-col items-center">
            <span
              className={`w-3.5 h-3.5 rounded-full border-2 ${
                milestone.done
                  ? "bg-[#725eed] border-[#725eed]"
                  : "bg-white border-gray-300 border-dashed"
              }`}
            />
            {index !== milestones.length - 1 && (
              <span
                className={`w-px flex-1 mt-1.5 ${
                  milestone.done ? "bg-gray-300" : "bg-gray-200"
                }`}
                style={!milestone.done ? { backgroundImage: "linear-gradient(#d1d5db 60%, transparent 0%)", backgroundSize: "1px 8px" } : undefined}
              />
            )}
          </div>
          <div>
            <h3 className={`text-base sm:text-lg font-bold mb-1 ${milestone.done ? "text-gray-900" : "text-gray-400"}`}>
              {milestone.title}
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${milestone.done ? "text-gray-600" : "text-gray-400"}`}>
              {milestone.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
