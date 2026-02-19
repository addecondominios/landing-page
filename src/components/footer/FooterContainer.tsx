import React from 'react';

interface FooterContainerProps {
  children: React.ReactNode;
}

const FooterContainer = ({ children }: FooterContainerProps) => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-16">
        {children}
      </div>
    </footer>
  );
};

export default FooterContainer;
