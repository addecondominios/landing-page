import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import edificioLogo from "@/assets/EDIFICIO.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#aplicativo", label: "Aplicativo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Menu Button - Left */}
          <div className="flex items-center">
            <button
              className="text-foreground p-2 hover:text-primary transition-colors relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-full left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 2xl:left-24 mt-2 bg-background rounded-lg shadow-lg py-2 w-auto animate-fade-up z-50">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-foreground hover:text-primary hover:scale-110 transition-all duration-300 px-4 py-3 text-left origin-left whitespace-nowrap"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-baseline gap-3 select-none pointer-events-none">
            <div className="flex items-center">
              <span className="text-2xl text-primary" style={{ fontFamily: 'Arbotek, sans-serif', fontWeight: 300 }}>ADDECON</span>
              <span className="text-2xl text-foreground" style={{ fontFamily: 'Arbotek, sans-serif', fontWeight: 300 }}>DOMÍNIOS</span>
            </div>
          </div>

          {/* CTA Button - Right */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+5511aaaaaa999" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">

              </a>
              <a href="#contato">
                <Button variant="hero" size="lg">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
