import React from 'react';

export interface FooterBottomLink {
  label: string;
  href: string;
}

interface FooterBottomProps {
  year?: number;
  companyName?: string;
  links?: FooterBottomLink[];
}

const DEFAULT_LINKS: FooterBottomLink[] = [
  { label: "Política de Privacidade", href: "/privacy" },
  { label: "Termos de Uso", href: "/terms" },
];

const FooterBottom = ({ 
  year = new Date().getFullYear(),
  companyName = "Addecondomínios",
  links = DEFAULT_LINKS
}: FooterBottomProps) => {
  return (
    <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-foreground text-sm">
        © {year} {companyName}. Todos os direitos reservados.
      </p>
      <div className="flex gap-6 text-sm">
        {links.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            className="text-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
