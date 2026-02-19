import React from 'react';
import Header from "@/components/Header";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isSecondaryPage={true} />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer isSecondaryPage={true} />
    </div>
  );
};

export default Privacy;
