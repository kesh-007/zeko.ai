import Image from 'next/image'
import React from 'react'
import { Instagram, Facebook, Linkedin, X } from 'lucide-react';

type SocialIcons = {
  [key: string]: JSX.Element;
};

type Address = {
  logoSrc: string;
  tagline: string;
  description: string;
  contact: string;
  social: string[];
};

type Section = {
  title: string;
  items: string[];
};

type FooterNote = {
  copyright: string;
  madeWith: string;
};

type FooterData = {
  address: Address;
  sections: Section[];
  footerNote: FooterNote;
};

const footerData: FooterData = {
  address: {
    logoSrc: "/image-dark.png",
    tagline: "Revolutionising Recruitment",
    description: `Metro station, H-294, Building 2, Krastay Cowork 
Lane 2, First Floor, Westend Marg, near Saket, Saidulajab
New Delhi, Delhi 110030, India`,
    contact: "admin@zeko.ai | +91-7536765490",
    social: ["Instagram", "Facebook", "Linkedin", "X"]
  },
  sections: [
    {
      title: "Solutions",
      items: ["Sourcing Analytics", "Dynamic Interviews", "Automated Headhunting"]
    },
    {
      title: "Use Cases",
      items: ["Case 1", "Case 2", "Case 3"]
    },
    {
      title: "Legal",
      items: ["Terms", "Security", "Privacy"]
    },
    {
      title: "Company",
      items: ["About us", "Why us?", "Contact us"]
    }
  ],
  footerNote: {
    copyright: "© 2024 Zeko.Ai All rights reserved.",
    madeWith: "Made With ❤️ In India"
  }
};

const socialIcons: SocialIcons = {
  Instagram: <Instagram />,
  Facebook: <Facebook />,
  Linkedin: <Linkedin />,
  X: <X />
};

const Footer: React.FC = () => {
  return (
    <div className='bg-[#E6D4FF] p-8 text-[#392D82]'>
      <div className='flex flex-col lg:flex-row justify-evenly'>
        <div className='space-y-2 lg:w-1/3'>
          <Image src={footerData.address.logoSrc} alt='logo' height={50} width={100} />
          <p className='font-bold'>{footerData.address.tagline}</p>
          <p className='tracking-tighter	 w-xl text-sm'>{footerData.address.description}</p>
          <p className='mt-4'>{footerData.address.contact}</p>
          <p className='font-bold mt-3'>FIND US ON</p>
          <div className='flex gap-3'>
            {footerData.address.social.map((social, index) => (
              <div key={index}>{socialIcons[social]}</div>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap justify-evenly lg:w-2/3'>
          {footerData.sections.map((section, index) => (
            <div key={index} className='space-y-2 mt-4 lg:mt-0 lg:w-1/4'>
              <p className='font-bold'>{section.title}</p>
              {section.items.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className='my-4 text-black' />
      <div className='flex flex-col lg:flex-row justify-between max-md:text-center'>
        <p>{footerData.footerNote.copyright}</p>
        <p className='mt-2 lg:mt-0'>{footerData.footerNote.madeWith}</p>
      </div>
    </div>
  )
}

export default Footer
