import React from 'react';
import Header from "@/components/Header";
import TermsOfService from "@/components/TermsOfService";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isSecondaryPage={true} />
      <main>
        <TermsOfService />
      </main>
      <Footer isSecondaryPage={true} />
    </div>
  );
};

export default Terms;
