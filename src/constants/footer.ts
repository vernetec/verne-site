import type { FooterSection } from '@/types/contact';

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: 'menu',
    title: 'Menu',
    links: [
      { id: 'inicio', label: 'Início', href: '#inicio' },
      { id: 'sobre', label: 'Sobre nós', href: '#sobre' },
      { id: 'missao', label: 'Missão', href: '#missao' },
      { id: 'visao', label: 'Visão', href: '#visao' },
      { id: 'portifolio', label: 'Portfólio', href: '#portifolio' },
      { id: 'contato', label: 'Contato', href: '#contato' },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com/vernetec' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/vernetec' },
  { id: 'x', label: 'X', href: 'https://x.com/vernetec' },
] as const;
