interface FooterSectionProps {
  children: React.ReactNode;
}

const FooterSection = ({ children }: FooterSectionProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {children}
    </div>
  );
};

export default FooterSection;
