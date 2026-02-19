import Header from "@/components/Header";
import TermsOfService from "@/components/TermsOfService";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
