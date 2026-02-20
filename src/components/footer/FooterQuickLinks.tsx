import React from 'react';

export interface QuickLink {
  label: string;
  href: string;
}

interface FooterQuickLinksProps {
  links?: QuickLink[];
  onLinkClick?: (href: string, e: React.MouseEvent) => void;
}

const DEFAULT_QUICK_LINKS: QuickLink[] = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Aplicativo", href: "#aplicativo" },
];

const FooterQuickLinks = ({ 
  links = DEFAULT_QUICK_LINKS,
  onLinkClick 
}: FooterQuickLinksProps) => {
  const defaultLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleClick = onLinkClick || defaultLinkClick;

  return (
    <div>
      <h4 className="text-foreground font-bold mb-6">Links Rápidos</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => handleClick(link.href, e)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
