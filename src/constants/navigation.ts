import type { NavigationConfig } from '@/types';

export const NAVIGATION_CONFIG: NavigationConfig = {
  items: [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'sobre', label: 'Sobre nós', href: '#sobre' },
    { id: 'missao', label: 'Missão', href: '#missao' },
    { id: 'visao', label: 'Visão', href: '#visao' },
    { id: 'portifolio', label: 'Portfólio', href: '#portifolio' },
  ],
  ctaButton: {
    label: 'Contato',
    href: '#contato',
  },
} as const;
