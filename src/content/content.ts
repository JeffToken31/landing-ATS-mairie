export type FeatureStatus = "done" | "planned";

export interface LandingContent {
  site: {
    title: string;
    description: string;
    locale: "fr" | "en";
    links: {
      github: string;
      linkedin: string;
      cv?: string;
    };
  };

  hero: {
    title: string;
    subtitle: string;
    badges: string[];
    ctas: {
      primary: {
        label: string;
        href: string;
      };
      secondary: {
        label: string;
        href: string;
      };
    };
    media: {
      type: "video";
      src: string;
      poster?: string;
    };
  };

  context: {
    title: string;
    text: string;
  };

  overview: {
    title: string;
    items: {
      label: string;
      description: string;
    }[];
  };

  workflow: {
    title: string;
    steps: string[];
    description: string;
  };

  features: {
    title: string;
    items: {
      title: string;
      description: string;
      status: FeatureStatus;
      audience?: "candidate" | "hr";
      eyebrow?: string;
      media?: {
        type: "video" | "image";
        src: string;
      };
    }[];
  };

  contribution: {
    title: string;
    bullets: string[];
    stack: string[];
  };

  techDetails: {
    title: string;
    bullets: string[];
    placeholder: string;
    architectureCards?: {
      title: string;
      description: string;
    }[];
    note?: string;
    decisions?: string[];
    mvpPlanned?: string[];
    productExtensions?: string[];
  };

  author: {
    name: string;
    role: string;
    socials: {
      linkedin: string;
      github: string;
    };
  };

  footer: {
    title: string;
    disclaimer: string;
    otherProjects?: {
      label: string;
      url: string;
    }[];
  };
}

/* ------------------------------------------------------------------ */
/* FR CONTENT (DEFAULT) */
/* ------------------------------------------------------------------ */

export const contentFR: LandingContent = {
  site: {
    title: "ATS Landing Portfolio",
    description:
      "Landing page portfolio présentant un projet ATS réalisé lors d’un stage de développement full-stack.",
    locale: "fr",
    links: {
      github: "https://github.com/JeffToken31",
      linkedin: "https://www.linkedin.com/in/jeffrey-basset",
    },
  },

  hero: {
    title: "ATS Système de gestion de recrutement",
    subtitle:
      "Projet développé durant un stage à la Mairie de Montauban. ATS complet intégrant un portail candidat et un back-office RH pour gérer offres, candidatures et workflow de recrutement.",
    badges: ["Stage", "Full-stack", "Next.js", "NestJS"],
    ctas: {
      primary: {
        label: "Voir le projet",
        href: "#overview",
      },
      secondary: {
        label: "Détails techniques",
        href: "#tech-details",
      },
    },
    media: {
      type: "video",
      src: "/media/hero/ats-hero.mp4",
      poster: "/media/hero/ats-hero.jpg",
    },
  },

  context: {
    title: "Contexte",
    text:
      "Dans le cadre de mon stage au service Études & Développement de la mairie de Montauban, " +
      "j’ai conçu et développé un ATS interne permettant de centraliser les offres d’emploi, " +
      "les candidatures et le workflow de recrutement côté RH et candidat.",
  },

  overview: {
    title: "Aperçu du produit",
    items: [
      {
        label: "Portail candidat",
        description:
          "Consultation des offres, dépôt de candidatures et suivi du statut.",
      },
      {
        label: "Back-office RH",
        description:
          "Gestion des candidatures, suivi des statuts et filtrage.",
      },
      {
        label: "Dossier candidat",
        description:
          "Centralisation des documents et historique des actions.",
      },
    ],
  },

  workflow: {
    title: "Workflow de recrutement",
    steps: ["Reçue", "Pré-sélection", "Entretien", "Décision"],
    description:
      "Chaque candidature suit un workflow clair et traçable, partagé entre les services RH.",
  },

  features: {
    title: "Fonctionnalités clés",
    items: [
      {
        title: "Gestion des candidatures",
        description:
          "Interface RH dédiée à la centralisation des candidatures, au suivi des statuts et à la prise de décision tout au long du processus de recrutement.",
        status: "done",
        audience: "hr",
        eyebrow: "Côté RH",
        media: {
          type: "video",
          src: "/media/features/rh-workflow.mp4",
        },
      },
      {
        title: "Espace candidat",
        description:
          "Espace candidat permettant de consulter les offres, déposer une candidature, gérer les documents et suivre l’avancement du dossier.",
        status: "done",
        audience: "candidate",
        eyebrow: "Côté candidat",
        media: {
          type: "video",
          src: "/media/features/candidateUi.mp4",
        },
      },
      {
        title: "Notifications email",
        description:
          "Envoi automatique de notifications lors des changements de statut.",
        status: "planned",
        audience: "hr",
        eyebrow: "Côté RH",
      },
    ],
  },

  contribution: {
    title: "Ma contribution",
    bullets: [
      "Conception et développement du MVP (front-end et back-end)",
      "Modélisation des données et implémentation des API",
      "Mise en place de l’authentification et des rôles",
      "Intégration des emails (SMTP) et annuaire interne (LDAP)",
      "Rédaction de la documentation fonctionnelle et technique",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Keycloak"],
  },

  techDetails: {
    title: "Détails techniques",
    bullets: [
      "Architecture : Next.js (front) + API NestJS séparée",
      "RBAC : candidats / RH / admin (routes protégées)",
      "Gestion des candidatures : statuts, historique, traçabilité",
      "Documents candidats : upload, métadonnées, contrôle d’accès",
      "Intégrations : SMTP (notifications) + annuaire LDAP",
      "Base PostgreSQL + modèles relationnels",
    ],
    placeholder:
      "Notes synthétiques : architecture, accès, intégrations et flux applicatifs.",
    architectureCards: [
      {
        title: "Frontend",
        description:
          "Next.js App Router, UI Tailwind, pages orientées contenu.",
      },
      {
        title: "API",
        description:
          "NestJS, endpoints REST pour offres, candidatures et workflow.",
      },
      {
        title: "Services",
        description:
          "PostgreSQL, SMTP pour notifications, LDAP pour annuaire interne.",
      },
    ],
    decisions: [
      "Authentification centralisée via Keycloak (OIDC) intégrée à NextAuth",
      "Gestion des rôles et accès (RBAC) pour candidats, RH et administrateurs",
      "Notifications email via serveur SMTP interne",
      "API REST NestJS avec validation et gestion des erreurs",
    ],
    mvpPlanned: [
      "Refactorisation du back-end vers une architecture hexagonale (prévue dans le périmètre du MVP)",
      "Objectif : modularité accrue, testabilité et séparation claire des responsabilités",
      "Non implémentée dans le temps imparti du stage",
    ],
    productExtensions: [
      "Intégration de plateformes externes (LinkedIn, Indeed)",
      "Parsing de CV et extraction de mots-clés pour la pré-qualification des candidatures",
      "Recherche de profils candidats via plateformes professionnelles",
      "Authentification sociale pour les candidats (Google, LinkedIn)",
    ],
  },

  author: {
    name: "Jeffrey Basset",
    role: "Développeur full-stack",
    socials: {
      linkedin: "https://www.linkedin.com/in/jeffrey-basset",
      github: "https://github.com/JeffToken31",
    },
  },

  footer: {
    title: "Autres projets",
    disclaimer:
      "Captures anonymisées. Projet réalisé dans le cadre d’un stage.",
    otherProjects: [
      {
        label: "Zafira Solidaire",
        url: "https://zafira-project.vercel.app/",
      },
    ],
  },
};

export const contentEN: LandingContent = {
  site: {
    title: "ATS Portfolio Landing",
    description:
      "Portfolio landing page presenting an ATS project built during a full-stack internship.",
    locale: "en",
    links: {
      github: "https://github.com/JeffToken31",
      linkedin: "https://www.linkedin.com/in/jeffrey-basset",
    },
  },

  hero: {
    title: "ATS Recruitment management system",
    subtitle:
      "Project built during an internship at the City of Montauban. A complete ATS including a candidate portal and an HR back office to manage job postings, applications, and recruitment workflows.",
    badges: ["Internship", "Full-stack", "Next.js", "NestJS"],
    ctas: {
      primary: {
        label: "View the project",
        href: "#overview",
      },
      secondary: {
        label: "Tech details",
        href: "#tech-details",
      },
    },
    media: {
      type: "video",
      src: "/media/hero/ats-hero.mp4",
      poster: "/media/hero/ats-hero.jpg",
    },
  },

  context: {
    title: "Context",
    text:
      "During my internship in the Studies & Development department at the Montauban city hall, " +
      "I designed and built an internal ATS to centralize job postings, applications, " +
      "and the recruitment workflow for both HR and candidates.",
  },

  overview: {
    title: "Product overview",
    items: [
      {
        label: "Candidate portal",
        description:
          "Browse openings, submit applications, and track status.",
      },
      {
        label: "HR back office",
        description: "Manage applications, statuses, and filters.",
      },
      {
        label: "Candidate file",
        description: "Centralize documents and action history.",
      },
    ],
  },

  workflow: {
    title: "Recruitment workflow",
    steps: ["Received", "Pre-screen", "Interview", "Decision"],
    description:
      "Each application follows a clear, traceable workflow shared with HR teams.",
  },

  features: {
    title: "Key features",
    items: [
      {
        title: "Application management",
        description:
          "Dedicated HR interface to centralize applications, track statuses, and support decision-making throughout the recruitment process.",
        status: "done",
        audience: "hr",
        eyebrow: "HR side",
        media: {
          type: "video",
          src: "/media/features/rh-workflow.mp4",
        },
      },
      {
        title: "Candidate space",
        description:
          "Candidate space to browse job offers, submit applications, manage documents, and track application progress.",
        status: "done",
        audience: "candidate",
        eyebrow: "Candidate side",
        media: {
          type: "video",
          src: "/media/features/candidateUi.mp4",
        },
      },
      {
        title: "Email notifications",
        description:
          "Automatic notifications when application statuses change.",
        status: "planned",
        audience: "hr",
        eyebrow: "HR side",
      },
    ],
  },

  contribution: {
    title: "My contribution",
    bullets: [
      "Designed and delivered the MVP (front-end and back-end)",
      "Data modeling and API implementation",
      "Authentication and roles setup",
      "Email (SMTP) and directory (LDAP) integrations",
      "Functional and technical documentation",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Keycloak"],
  },

  techDetails: {
    title: "Technical details",
    bullets: [
      "Architecture: Next.js front-end + separate NestJS API",
      "RBAC: candidate / HR / admin (protected routes)",
      "Hiring pipeline: statuses, history, traceability",
      "Candidate documents: upload, metadata, access control",
      "Integrations: SMTP (notifications) + LDAP directory",
      "PostgreSQL database + relational models",
    ],
    placeholder:
      "Concise notes: architecture, access, integrations, and flows.",
    architectureCards: [
      {
        title: "Frontend",
        description:
          "Next.js App Router, Tailwind UI, content-driven pages.",
      },
      {
        title: "API",
        description:
          "NestJS, REST endpoints for postings, applications, and workflow.",
      },
      {
        title: "Services",
        description:
          "PostgreSQL, SMTP notifications, LDAP internal directory.",
      },
    ],
    decisions: [
      "Centralized authentication using Keycloak (OIDC) integrated with NextAuth",
      "Role-based access control (RBAC) for candidates, HR, and administrators",
      "Email notifications via internal SMTP server",
      "NestJS REST API with validation and error handling",
    ],
    mvpPlanned: [
      "Back-end refactor toward a hexagonal architecture (planned in the initial MVP scope)",
      "Goal: improved modularity, testability, and clear separation of concerns",
      "Not implemented due to internship time constraints",
    ],
    productExtensions: [
      "Integration with external platforms (LinkedIn, Indeed)",
      "CV parsing and keyword extraction for candidate pre-screening",
      "Candidate profile search via professional platforms",
      "Social authentication for candidates (Google, LinkedIn)",
    ],
  },

  author: {
    name: "Jeffrey Basset",
    role: "Full-stack developer",
    socials: {
      linkedin: "https://www.linkedin.com/in/jeffrey-basset",
      github: "https://github.com/JeffToken31",
    },
  },

  footer: {
    title: "Other projects",
    disclaimer:
      "Screens anonymized. Project built during an internship.",
    otherProjects: [
      {
        label: "Zafira Solidaire",
        url: "https://zafira-project.vercel.app/",
      },
    ],
  },
};

export function getContent(locale: string): LandingContent {
  return locale === "en" ? contentEN : contentFR;
}
