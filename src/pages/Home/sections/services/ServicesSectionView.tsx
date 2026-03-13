import { Container, GlassCard, AnimatedSection } from '@/components/ui';
import styles from './ServicesSectionView.module.css';

const SupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="2" x2="12" y2="22" opacity="0.5" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    <path d="M12 12v6" />
    <path d="M9 15l3-3 3 3" />
  </svg>
);

const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ConsultingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15V6" />
    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <path d="M12 12V3" />
    <path d="M12 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
    <path d="M3 15V6" />
    <path d="M5.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </svg>
);

const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const iconComponents = {
  support: SupportIcon,
  development: DevelopmentIcon,
  cloud: CloudIcon,
  security: SecurityIcon,
  consulting: ConsultingIcon,
  automation: AutomationIcon,
};

const services = [
  {
    iconKey: 'support',
    title: 'Suporte de TI',
    description: 'Suporte técnico especializado para manter sua infraestrutura funcionando 24/7 com máxima eficiência.',
  },
  {
    iconKey: 'development',
    title: 'Desenvolvimento',
    description: 'Soluções sob medida em software, web e mobile para atender às necessidades específicas do seu negócio.',
  },
  {
    iconKey: 'cloud',
    title: 'Cloud & Infraestrutura',
    description: 'Migração e gerenciamento de ambientes cloud com segurança, escalabilidade e performance.',
  },
  {
    iconKey: 'security',
    title: 'Segurança',
    description: 'Proteção completa dos seus dados com as melhores práticas e tecnologias de cibersegurança.',
  },
  {
    iconKey: 'consulting',
    title: 'Consultoria',
    description: 'Análise estratégica para otimizar processos e identificar oportunidades de transformação digital.',
  },
  {
    iconKey: 'automation',
    title: 'Automação',
    description: 'Automatize tarefas repetitivas e aumente a produtividade da sua equipe com soluções inteligentes.',
  },
];

function ServicesSectionView() {
  return (
    <section id="servicos" className={styles.services}>
      <Container>
        <AnimatedSection animation="fadeUp">
          <h2 className={styles.title}>Nossos Serviços</h2>
          <p className={styles.subtitle}>
            Soluções completas para impulsionar sua transformação digital
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.iconKey as keyof typeof iconComponents];
            return (
              <AnimatedSection key={service.title} animation="fadeUp" delay={index * 100}>
                <GlassCard className={styles.serviceCard}>
                  <div className={styles.iconWrapper}>
                    <IconComponent />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSectionView;
