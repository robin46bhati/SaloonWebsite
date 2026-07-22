import { Star } from "lucide-react";

export default function RatingStars({ rating = 5, size = 16 }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-gold text-gold" : "fill-transparent text-gold/30"}
        />
      ))}
    </div>
  );
}
