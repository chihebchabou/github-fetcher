import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <FaGithub />
      <h1>Trouvez n'importe quel profil GitHub en un instant</h1>
      <p>
        Github Fetcher vous permet de rechercher des utilisateurs GitHub,
        d'afficher leurs statistiques publiques et d'explorer leurs informations
        de profil en toute simplicité.
      </p>
    </header>
  );
};

export default Header;
