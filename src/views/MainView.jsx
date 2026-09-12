import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const MainView = ({ onChangeView }) => {
  return (
    <>
      {/* Header Section */}
      <Header />
      {/* Features Section */}
      <Features />
      {/* Footer Section */}
      <Footer onChangeView={onChangeView} />
    </>
  );
};

export default MainView;
