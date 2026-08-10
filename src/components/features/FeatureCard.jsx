import "./FeatureCard.css";
const FeatureCard = ({ icon, heading, description }) => {
  return (
    <div className="feature-card feature-card--default">
      <div className="feature-card__icon">{icon}</div>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
