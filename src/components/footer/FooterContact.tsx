import React from 'react';
import { Phone, Mail, MapPin, LucideIcon } from "lucide-react";

export interface ContactInfo {
  type: "phone" | "email" | "address";
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

interface FooterContactProps {
  contactInfo?: ContactInfo[];
  isSecondaryPage?: boolean;
}

const DEFAULT_CONTACT_INFO: ContactInfo[] = [
  {
    type: "phone",
    icon: Phone,
    label: "Telefone",
    value: "(11) 91489-5831 / (11) 4774-6263",
  },
  {
    type: "email",
    icon: Mail,
    label: "Email",
    value: "addecondominios@hotmail.com",
    href: "mailto:addecondominios@hotmail.com",
  },
  {
    type: "address",
    icon: MapPin,
    label: "Endereço",
    value: "R. Prof. Dimarães Antônio Sandei, 185 - Cidade da Saúde, Itapevi, SP",
  },
];

const FooterContact = ({ contactInfo = DEFAULT_CONTACT_INFO, isSecondaryPage = false }: FooterContactProps) => {
  return (
    <div className={isSecondaryPage ? "ml-auto" : ""}>
      <h4 className="text-foreground font-bold mb-6">Contato</h4>
      <ul className="space-y-4">
        {contactInfo.map((item) => (
          <li 
            key={item.label}
            className={`flex items-${item.type === "address" ? "start" : "center"} gap-3 text-foreground`}
          >
            <item.icon className={`w-5 h-5 text-primary flex-shrink-0 ${item.type === "address" ? "mt-0.5" : ""}`} />
            {item.type === "email" ? (
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base flex-1">
                {item.value}
              </span>
            ) : item.href ? (
              <a 
                href={item.href}
                className="text-[10px] sm:text-xs md:text-sm lg:text-base break-all sm:break-normal flex-1 hover:text-primary transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <span className={`text-[10px] sm:text-xs md:text-sm lg:text-base flex-1 ${item.type === "phone" ? "break-words" : ""}`}>
                {item.value}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContact;
