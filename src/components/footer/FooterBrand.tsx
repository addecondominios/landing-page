import React from 'react';

interface FooterBrandProps {
  onLogoClick: () => void;
}

const FooterBrand = ({ onLogoClick }: FooterBrandProps) => {
  return (
    <div>
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          onLogoClick();
        }}
        className="flex items-center gap-1 mb-6"
      >
        <span className="text-2xl text-primary font-arbotek font-light">ADDECON</span>
        <span className="text-2xl text-foreground font-arbotek font-light">DOMÍNIOS</span>
      </a>
      <p className="text-foreground mb-6 leading-relaxed">
        Especialistas em gestão transparente de condomínios há mais de 15 anos.
      </p>
    </div>
  );
};

export default FooterBrand;
