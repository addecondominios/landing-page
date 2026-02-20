import React from 'react';
import CRASvg from '@/assets/CRA.svg';

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
      <div className="flex items-center gap-3">
        <img src={CRASvg} alt="CRA - Conselho Regional de Administração" className="w-10 h-10" />
        <span className="text-foreground font-light">CRA: 023970</span>
      </div>
    </div>
  );
};

export default FooterBrand;
