import "../../styles/SkeletonCard.scss";

const SkeletonCard = () => (
  <div className="skeleton-movie-card">
    <div className="skeleton-poster"></div>
    <div className="skeleton-info">
      <div className="skeleton-title"></div>
      <div className="skeleton-year"></div>
    </div>
  </div>
);

export default SkeletonCard;
