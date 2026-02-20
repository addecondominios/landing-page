import React from 'react';
import { Facebook, Instagram, Phone } from "lucide-react";
import { LucideIcon } from "lucide-react";
import CRASvg from '@/assets/CRA.svg';

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface FooterSocialLinksProps {
  links?: SocialLink[];
}

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { icon: Facebook, href: "https://www.facebook.com/addecon08", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/addecondominios/", label: "Instagram" },
  { icon: Phone, href: "https://api.whatsapp.com/message/T2RUN2KJNEY7C1?autoload=1&app_absent=0", label: "WhatsApp" },
];

const FooterSocialLinks = ({ links = DEFAULT_SOCIAL_LINKS }: FooterSocialLinksProps) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        {links.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <img 
          src={CRASvg} 
          alt="CRA - Conselho Regional de Administração" 
          className="w-12 h-12 filter brightness-0 invert" 
        />
        <span className="text-foreground font-light text-sm">CRA: 023970</span>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
