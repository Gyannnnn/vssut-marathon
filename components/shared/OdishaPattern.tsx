export default function OdishaPattern({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="sambalpuri-pattern"
            x="0"
            y="0"
            width={height * 1.25}
            height={height}
            patternUnits="userSpaceOnUse"
            viewBox="0 0 40 32"
          >
            {/* Background */}
            <rect width="40" height="32" fill="#fff" />

            {/* Main Diamond (Red) */}
            <path d="M20 2 L38 16 L20 30 L2 16 Z" fill="#D90429" />

            {/* Inner Diamond (White) */}
            <path d="M20 8 L30 16 L20 24 L10 16 Z" fill="#ffffff" />

            {/* Center Dot (Black/Navy) */}
            <circle cx="20" cy="16" r="3" fill="#2B2D42" />

            {/* Side Triangles (giving connection feel) */}
            <path d="M0 0 L8 8 L0 16 Z" fill="#EF233C" />
            <path d="M0 32 L8 24 L0 16 Z" fill="#EF233C" />

            <path d="M40 0 L32 8 L40 16 Z" fill="#EF233C" />
            <path d="M40 32 L32 24 L40 16 Z" fill="#EF233C" />

            {/* Top/Bottom details (small dots) */}
            <circle cx="20" cy="3" r="1.5" fill="#2B2D42" />
            <circle cx="20" cy="29" r="1.5" fill="#2B2D42" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sambalpuri-pattern)" />
      </svg>
    </div>
  );
}
