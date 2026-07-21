export function OceanBreathing() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080B15]"
    >
      {/* Blob 1: Dark Slate Navy (top-right) */}
      <div className="absolute top-[12%] left-[55%] h-[32rem] w-[32rem] bg-[#111830] blur-3xl animate-ocean-1" />

      {/* Blob 2: Deep Midnight Blue (bottom-left) */}
      <div className="absolute top-[48%] left-[10%] h-[38rem] w-[38rem] bg-[#0d1527] blur-3xl animate-ocean-2" />

      {/* Blob 3: Sapphire glow (upper-left) */}
      <div className="absolute top-[8%] left-[18%] h-[28rem] w-[28rem] bg-[#1d2d59] blur-3xl animate-ocean-3" />

      {/* Blob 4: Deep sapphire highlight (lower-right) */}
      <div className="absolute top-[60%] left-[65%] h-[30rem] w-[30rem] bg-[#253b80] blur-3xl animate-ocean-4" />
    </div>
  )
}
