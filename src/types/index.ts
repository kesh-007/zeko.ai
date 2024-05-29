export type TestimonialsCardProps = {
    content: string;
    className:string;
    name:string;
    role:string
    logo:string
  };
  
  export type SocialIcons = {
    [key: string]: JSX.Element;
  };
  
  export type Address = {
    logoSrc: string;
    tagline: string;
    description: string;
    contact: string;
    social: string[];
  };
  
  export type Section = {
    title: string;
    items: string[];
  };
  
  export type FooterNote = {
    copyright: string;
    madeWith: string;
  };
  
  export type FooterData = {
    address: Address;
    sections: Section[];
    footerNote: FooterNote;
  };
  
  export type ProductsCardProps = {
    icon: React.ReactNode;
    heading: string;
    content: string;
    className:string
  };
  