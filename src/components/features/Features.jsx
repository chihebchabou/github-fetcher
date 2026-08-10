import {
  MdOutlineShield,
  MdOutlinePersonOutline,
  MdSearch,
} from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import "./Features.css";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <MdSearch />,
      heading: "Recherche Rapide",
      description:
        "Tapez un nom d'utilisateur GitHub et obtenez les résultats en tempsréel grâce à l'API officielle de GitHub.",
    },
    {
      id: 2,
      icon: <MdOutlinePersonOutline />,
      heading: "Profils détaillés",
      description:
        "Consultez la photo de profil, la biographie, l'entreprise, la localisation et les liens publics.",
    },
    {
      id: 3,
      icon: <BsLightningCharge />,
      heading: "Statistiques claires",
      description:
        "Visualisez le nombre de dépôts publics, de followers, de personnes suivies et d'étoiles.",
    },
    {
      id: 4,
      icon: <MdOutlineShield />,
      heading: "Données publiques",
      description:
        "Aucune authentification requise. L'application utilise uniquement les informations publiques de GitHub.",
    },
  ];
  return (
    <section className="features">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          heading={feature.heading}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Features;
