import type { NavigationConfig } from '@/types';

export const NAVIGATION_CONFIG: NavigationConfig = {
  items: [
    { id: 'inicio', label: 'Início', href: '#inicio', isActive: true },
    { id: 'sobre', label: 'Sobre nós', href: '#sobre' },
    { id: 'servicos', label: 'Serviços', href: '#servicos' },
    { id: 'avaliacoes', label: 'Avaliações', href: '#avaliacoes' },
  ],
  ctaButton: {
    label: 'Contato',
    href: '#contato',
  },
} as const;
