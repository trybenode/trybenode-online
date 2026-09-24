const HUB = { x: 100, y: 232 };
const TRYBEMARKET = { x: 306, y: 108 };
const VENTURE_A = { x: 366, y: 262 };
const VENTURE_B = { x: 262, y: 382 };

const pct = (v) => `${(v / 440) * 100}%`;

export default function NodeNetwork() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto select-none">
      <svg
        viewBox="0 0 440 440"
        className="absolute inset-0 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {/* Dormant connections — the ventures still to come */}
        <path
          d="M100,232 Q240,244 366,262"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />
        <path
          d="M100,232 Q190,330 262,382"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />

        {/* Live connection to TrybeMarket */}
        <path
          d="M100,232 Q200,150 306,108"
          fill="none"
          stroke="#725eed"
          strokeWidth="2"
          strokeDasharray="1 9"
          strokeLinecap="round"
          className="animate-dash-flow"
        />

        {/* Pulsing hub ring */}
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r="46"
          fill="none"
          stroke="#725eed"
          strokeWidth="1.5"
          className="animate-node-pulse"
          style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
        />

        {/* Hub node — TrybeNode */}
        <circle cx={HUB.x} cy={HUB.y} r="34" fill="#2d236d" />
        <circle cx={HUB.x} cy={HUB.y} r="5" fill="#fbeb78" />

        {/* Traveling signal toward TrybeMarket */}
        <circle
          r="4"
          fill="#fbeb78"
          className="animate-travel"
          style={{ offsetPath: "path('M100 232 Q200 150 306 108')" }}
        />

        {/* TrybeMarket node */}
        <circle cx={TRYBEMARKET.x} cy={TRYBEMARKET.y} r="18" fill="#725eed" />
        <circle cx={TRYBEMARKET.x} cy={TRYBEMARKET.y} r="18" fill="none" stroke="#fff" strokeWidth="2" />

        {/* Future venture nodes */}
        <circle cx={VENTURE_A.x} cy={VENTURE_A.y} r="10" fill="#fff" stroke="#d1d5db" strokeWidth="1.5" />
        <circle cx={VENTURE_B.x} cy={VENTURE_B.y} r="10" fill="#fff" stroke="#d1d5db" strokeWidth="1.5" />
      </svg>

      {/* Labels */}
      <div
        className="absolute -translate-x-1/2 -translate-y-[130%] text-center"
        style={{ left: pct(HUB.x), top: pct(HUB.y) }}
      >
        <span className="text-xs font-semibold text-[#2d236d] bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-sm whitespace-nowrap">
          TrybeNode
        </span>
      </div>

      <div
        className="absolute translate-x-4 -translate-y-1/2"
        style={{ left: pct(TRYBEMARKET.x), top: pct(TRYBEMARKET.y) }}
      >
        <span className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#2d236d] px-2.5 py-1 rounded-full whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fbeb78]" />
          TrybeMarket
        </span>
      </div>

      <div
        className="absolute translate-x-4 -translate-y-1/2"
        style={{ left: pct(VENTURE_A.x), top: pct(VENTURE_A.y) }}
      >
        <span className="text-[11px] font-medium text-gray-400 whitespace-nowrap">
          Venture 02
        </span>
      </div>

      <div
        className="absolute translate-x-4 -translate-y-1/2"
        style={{ left: pct(VENTURE_B.x), top: pct(VENTURE_B.y) }}
      >
        <span className="text-[11px] font-medium text-gray-400 whitespace-nowrap">
          What&apos;s next
        </span>
      </div>
    </div>
  );
}
