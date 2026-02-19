import FooterBrand from "@/components/footer/FooterBrand";
import FooterSocialLinks, { type SocialLink } from "@/components/footer/FooterSocialLinks";
import FooterQuickLinks, { type QuickLink } from "@/components/footer/FooterQuickLinks";
import FooterContact, { type ContactInfo } from "@/components/footer/FooterContact";
import FooterBottom, { type FooterBottomLink } from "@/components/footer/FooterBottom";
import FooterContainer from "@/components/footer/FooterContainer";
import FooterSection from "@/components/footer/FooterSection";

interface FooterProps {
  socialLinks?: SocialLink[];
  quickLinks?: QuickLink[];
  contactInfo?: ContactInfo[];
  bottomLinks?: FooterBottomLink[];
  companyName?: string;
  year?: number;
  onQuickLinkClick?: (href: string, e: React.MouseEvent) => void;
}

const Footer = ({
  socialLinks,
  quickLinks,
  contactInfo,
  bottomLinks,
  companyName = "Addecondomínios",
  year = new Date().getFullYear(),
  onQuickLinkClick,
}: FooterProps) => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <FooterSection>
        <div>
          <FooterBrand onLogoClick={handleLogoClick} />
          <FooterSocialLinks links={socialLinks} />
        </div>
        <FooterQuickLinks links={quickLinks} onLinkClick={onQuickLinkClick} />
        <FooterContact contactInfo={contactInfo} />
      </FooterSection>
      <FooterBottom
        year={year}
        companyName={companyName}
        links={bottomLinks}
      />
    </FooterContainer>
  );
};

export default Footer;
