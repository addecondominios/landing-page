import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import edificioLogo from "@/assets/EDIFICIO.png";

interface HeaderProps {
  isSecondaryPage?: boolean;
}

const Header = ({ isSecondaryPage = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { href: "#", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#aplicativo", label: "Aplicativo" },
  ];

  const scrollToSection = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const id = href.replace('#', '');
    
    // Se for início (vazio), scroll ao topo
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSecondaryPage) {
      navigate('/');
    } else {
      scrollToSection('#', e);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Menu Button - Left */}
          <div className="flex items-center">
            {isSecondaryPage ? (
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:text-primary transition-colors"
                title="Voltar à página principal"
              >
                <ArrowLeft className="w-6 h-6 text-foreground" />
              </button>
            ) : (
              <>
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
                          onClick={(e) => scrollToSection(link.href, e)}
                          className="text-foreground hover:text-primary hover:scale-110 transition-all duration-300 px-4 py-3 text-left origin-left whitespace-nowrap"
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-baseline gap-3 select-none">
            <button
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              title={isSecondaryPage ? "Voltar à página principal" : "Ir ao topo"}
            >
              <span className="text-2xl text-primary font-arbotek font-light">ADDECON</span>
              <span className="text-2xl text-foreground font-arbotek font-light">DOMÍNIOS</span>
            </button>
          </div>

          {/* CTA Button - Right */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center gap-4">
              {!isSecondaryPage && (
                <a 
                  href="#contato"
                  onClick={(e) => scrollToSection('#contato', e)}
                >
                  <Button variant="hero" size="lg">
                    Fale Conosco
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
