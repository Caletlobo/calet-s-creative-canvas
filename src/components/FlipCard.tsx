import { useState } from "react";

interface FlipCardProps {
  image: string;
  title: string;
  message: string;
  className?: string;
  delay?: number;
}

const FlipCard = ({ image, title, message, className = "", delay = 0 }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card-container cursor-pointer ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="flip-card-front">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
            <h4 className="text-white text-sm font-semibold truncate">{title}</h4>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="flip-card-back gradient-hero">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <h4 className="text-white font-bold text-base mb-2">{title}</h4>
            <p className="text-white/90 text-sm leading-relaxed">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
