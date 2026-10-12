import StarIcon from "@/assets/icons/star.svg";
import "./tape.css";

export const TapeSection = () => {
  const baseItems = [
    "🟢 Open to Work",
    "Full-Stack Engineer",
    "Backend & AI",
    "Available Now",
    "Software Developer",
    "Python & FastAPI",
  ];

  // Create a large enough array so it spans over ultra-wide screens easily before reaching 50%
  const items = Array(1 ).fill(baseItems).flat();

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="tape-wrapper bg-linear-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="tape-mask">
          <div className="tape-track">
            {/* First copy */}
            {items.map((text, i) => (
              <div className="tape-item" key={`a-${i}`}>
                <span>{text}</span>
                <StarIcon className="tape-icon" />
              </div>
            ))}

            {/* Duplicate copy for seamless loop */}
            {items.map((text, i) => (
              <div className="tape-item" key={`b-${i}`}>
                <span>{text}</span>
                <StarIcon className="tape-icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};