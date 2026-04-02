import React, { useState } from "react";

const translations = {
  en: {
    langLabel: "Language",
    switchTo: "PL",
    name: "KACPER KOZŁOWSKI",
    role: "IT Support Engineer",
    about:
      "IT Support Engineer focused on solving real business problems, integrations (EDI, OCR, KSeF) and system troubleshooting. Actively developing in C# / .NET and modern web technologies, leveraging AI tools.",
    photo: "PHOTO",
    details: "Details",
    sections: {
      experience: "Experience",
      achievements: "Achievements",
      projects: "Projects",
      techStack: "Tech Stack",
      links: "Links",
      languages: "Languages",
      learning: "Learning",
      education: "Education",
      interests: "Interests",
    },
    experience: [
      {
        role: "IT Support Engineer",
        company: "Citronex",
        period: "2022-10-03 - Present",
        bullets: [
          "Implemented and administered the IFS Cloud ERP system within the CITRONEX group, ensuring system stability and user support",
          "Participated in the implementation of the WinSped system and supported its integration with existing infrastructure",
          "Resolved EDI integration issues by analyzing message flows and improving data processing reliability",
          "Performed SQL-based data analysis to identify inconsistencies and support business-critical processes",
          "Supported network infrastructure by configuring and administering devices (Mikrotik, Netgear, FortiGate, Ubiquiti), including VLAN tagging and collaboration with a network engineer",
          "Administered Active Directory environment, including user management and end-user workstation setup",
        ],
      },
    ],
    achievements: [
      "Participated in the implementation of the IFS Cloud ERP system within the CITRONEX group, ensuring user support and system stability after go-live",
      "Supported the integration of IFS Cloud with OCR solutions, improving document processing workflows",
      "Participated in the integration of KSeF with the ERP system, including analysis and resolution of integration issues",
      "Supported critical business processes by creating SQL-based analyses and reports",
    ],
    projects: [
      {
        title: "Formify (Blazor, PostgreSQL)",
        bullets: [
          "Implemented a custom authentication and authorization mechanism using CustomAuthStateProvider and user session handling",
          "Designed and developed a dashboard with calorie and macronutrient calculations",
          "Built a meal tracking system (CRUD) linked to user accounts and selected dates",
          "Integrated the application with PostgreSQL and managed user data persistence",
        ],
      },
      {
        title: "Comarch Optima – KSeF Integration",
        bullets: [
          "Configured and integrated Comarch Optima with KSeF, including system updates and environment preparation",
          "Generating and managing Ministry of Finance certificates and configuring them for system integration",
          "Supported communication with KSeF and resolved integration-related issues",
        ],
      },
      {
        title: "ABCMAX E-commerce Website (Vendero)",
        bullets: [
          "Created and configured an e-commerce website based on Vendero",
          "Integrated the system with warehouse data for real-time stock synchronization",
          "Implemented online payments using Przelewy24 integration",
          "Configured environment, DNS and supported production deployment",
        ],
      },
    ],
    techStack: [
      {
        name: "Windows / Linux / MacOS",
        description: "System troubleshooting and daily support.",
      },
      {
        name: "SQL / Oracle",
        description: "Data analysis in Oracle databases, writing SQL queries for debugging, data validation and supporting business processes.",
      },
      {
        name: "IFS Cloud",
        description: "Support and administration of IFS Cloud ERP, business process analysis and resolving system and integration issues.",
      },
      {
        name: "C# / .NET",
        description: "Development in C# and .NET, building web applications.",
      },
      {
        name: "Networking",
        description: "Basic network administration, configuration of devices (Mikrotik, FortiGate, Ubiquiti), VLAN tagging and infrastructure support.",
      },
      {
        name: "Git / GitHub",
        description: "Version control using Git, working with GitHub repositories and managing code changes.",
      },
      {
        name: "Kubernetes",
        description: "Container orchestration for deploying, scaling, and managing applications. Hands-on experience with clusters and workloads.",
      },
      {
        name: "Docker",
        description: "Containerization platform for building, sharing, and running applications in isolated environments.",
      },
    ],
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    languages: ["Polish – Native", "English – Working proficiency"],
    learning: [
      "C# / .NET development",
      "Frontend (Astro, React, Tailwind)",
      "System integrations",
    ],
    education: [
      {
        title: "Master’s Degree",
        subtitle: "WSB Merito University / Logistics",
        period: "201X–201X",
        details:
          "Studies in Logistics provided me with a strong understanding of business and operational processes. This enables me to better analyze problems and support their resolution using technology. Specialization: Sales Manager.",
      },
      {
        title: "Engineer’s Degree",
        subtitle: "Wrocław University of Science and Technology / Industrial Informatics",
        period: "201X–201X",
        details:
          "Engineering studies in Industrial Informatics provided a solid technical foundation in IT systems, programming, and system integration within industrial environments. Specialization: Intelligent Industrial Systems.",
      },
      {
        title: "Technical School (IT)",
        subtitle: "Information Technology Technical School (ZSP), Lubań",
        period: "201X–201X",
        details:
          "Education in an IT technical school covered practical aspects of operating systems, networking, and IT administration. Certifications obtained: E12 – assembly and maintenance of personal computers and peripheral devices; E13 – design and administration of computer networks; E14 – development and administration of websites and databases.",
      },
    ],
    interests: ["Programming", "Fitness", "Combat sports", "Shooting"],
  },
  pl: {
    langLabel: "Język",
    switchTo: "EN",
    name: "KACPER KOZŁOWSKI",
    role: "IT Support Engineer",
    about:
      "IT Support Engineer skupiony na rozwiązywaniu realnych problemów biznesowych, integracjach (EDI, OCR, KSeF) i troubleshootingu systemów. Aktywnie rozwijam się w C# / .NET oraz nowoczesnych technologiach webowych z wykorzystaniem narzędzi AI.",
    photo: "ZDJĘCIE",
    details: "Szczegóły",
    sections: {
      experience: "Doświadczenie",
      achievements: "Osiągnięcia",
      projects: "Projekty",
      techStack: "Tech Stack",
      links: "Linki",
      languages: "Języki",
      learning: "Rozwój",
      education: "Edukacja",
      interests: "Zainteresowania",
    },
    experience: [
      {
        role: "IT Support Engineer",
        company: "Citronex",
        period: "2022-10-03 - Present",
        bullets: [
          "Wdrożenie oraz administracja systemu ERP IFS Cloud w grupie CITRONEX, obejmująca wsparcie użytkowników oraz utrzymanie ciągłości działania systemu",
          "Udział w implementacji systemu WinSped oraz wsparcie jego integracji z istniejącą infrastrukturą",
          "Rozwiązywanie problemów z integracją EDI poprzez analizę przepływu komunikatów i poprawę niezawodności przetwarzania danych",
          "Analiza danych z wykorzystaniem SQL w celu identyfikacji niespójności oraz wsparcia krytycznych procesów biznesowych",
          "Wsparcie infrastruktury sieciowej poprzez konfigurację i administrację urządzeń (Mikrotik, Netgear, FortiGate, Ubiquiti), w tym tagowanie VLAN oraz współpraca z inżynierem sieciowym",
          "Administracja środowiskiem Active Directory, w tym zarządzanie kontami użytkowników oraz przygotowanie i konfiguracja stanowisk pracy dla użytkowników końcowych",
        ],
      },
    ],
    achievements: [
      "Udział we wdrożeniu systemu ERP IFS Cloud w grupie CITRONEX, zapewniając wsparcie użytkowników i stabilność systemu po wdrożeniu",
      "Wsparcie integracji systemu IFS Cloud z rozwiązaniami OCR, usprawniające proces przetwarzania dokumentów",
      "Udział w integracji KSeF z systemem ERP, obejmujący analizę i rozwiązywanie problemów integracyjnych",
      "Wsparcie krytycznych procesów biznesowych poprzez tworzenie analiz i raportów SQL",
    ],
    projects: [
      {
        title: "Formify (Blazor, PostgreSQL)",
        bullets: [
          "Implementacja własnego mechanizmu uwierzytelniania i autoryzacji z wykorzystaniem CustomAuthStateProvider oraz obsługi sesji użytkownika",
          "Projekt i implementacja dashboardu z kalkulacją zapotrzebowania kalorycznego i makroskładników",
          "Stworzenie systemu śledzenia posiłków (CRUD) powiązanego z użytkownikiem i datą",
          "Integracja aplikacji z bazą PostgreSQL oraz zarządzanie danymi użytkownika",
        ],
      },
      {
        title: "Konfiguracja integracji Comarch Optima z KSeF",
        bullets: [
          "Konfiguracja środowiska oraz integracji systemu Comarch Optima z KSeF, obejmująca aktualizację systemu oraz przygotowanie środowiska",
          "Generowanie certyfikatów z Ministerstwa Finansów i ich podpięcie do systemu",
          "Wsparcie komunikacji z KSeF oraz rozwiązywanie problemów integracyjnych",
        ],
      },
      {
        title: "Strona sklepu ABCMAX (Vendero)",
        bullets: [
          "Utworzenie i konfiguracja sklepu internetowego opartego o Vendero",
          "Integracja systemu z magazynem – dynamiczne pobieranie stanów magazynowych w czasie rzeczywistym",
          "Implementacja płatności online poprzez integrację z Przelewy24",
          "Konfiguracja środowiska, DNS oraz wsparcie wdrożenia produkcyjnego",
        ],
      },
    ],
    techStack: [
      {
        name: "Windows / Linux / MacOS",
        description: "Troubleshooting systemów i codzienne wsparcie użytkowników.",
      },
      {
        name: "SQL / Oracle",
        description: "Analiza danych w bazach Oracle, tworzenie zapytań SQL do identyfikacji problemów, walidacji danych oraz wsparcia procesów biznesowych w ERP",
      },
      {
        name: "IFS Cloud",
        description: "Wsparcie i administracja systemem ERP IFS Cloud, analiza procesów biznesowych oraz rozwiązywanie problemów integracyjnych i systemowych",
      },
      {
        name: "C# / .NET",
        description: "Rozwój aplikacji w C# i .NET, budowa aplikacji webowych.",
      },
      {
        name: "Sieci",
        description: "Podstawowa administracja sieciami, konfiguracja urządzeń (Mikrotik, FortiGate, Ubiquiti), VLAN tagging oraz utrzymanie infrastruktury sieciowej",
      },
      {
        name: "Git / GitHub",
        description: "Zarządzanie wersją kodu, praca z repozytoriami GitHub oraz kontrola zmian w projektach developerskich",
      },
      {
        name: "Kubernetes",
        description: "Orkiestracja kontenerów do wdrażania, skalowania i zarządzania aplikacjami. Praktyczne doświadczenie z klastrami i obciążeniami.",
      },
      {
        name: "Docker",
        description: "Platforma do konteneryzacji aplikacji, umożliwiająca budowanie, udostępnianie i uruchamianie aplikacji w izolowanych środowiskach.",
      },
    ],
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    languages: ["Polski – Ojczysty", "Angielski – Komunikatywny zawodowo"],
    learning: [
      "Rozwój w C# / .NET",
      "Frontend (Astro, React, Tailwind)",
      "Integracje systemowe",
    ],
    education: [
      {
        title: "Studia magisterskie",
        subtitle: "Uniwersystet WSB Merito / Logistyka",
        period: "201X–201X",
        details:
          "Studia na kierunku logistyka pozwoliły mi zrozumieć procesy biznesowe i operacyjne oraz ich wpływ na funkcjonowanie organizacji. Dzięki temu łatwiej identyfikuję problemy i wspieram ich rozwiązywanie z wykorzystaniem technologii. Specjalizacja: Menedżer ds. sprzedaży.",
      },
      {
        title: "Studia inżynierskie",
        subtitle: "Politechnika Wrocławska / Informatyka przemysłowa",
        period: "201X–201X",
        details:
          "Techniczne fundamenty IT, w tym podstawy programowania i systemów. Studia inżynierskie na kierunku informatyka przemysłowa dały mi solidne podstawy techniczne z zakresu systemów IT, programowania oraz integracji systemów w środowiskach przemysłowych. Specjalizacja: Inteligentne systemy przemysłowe.",
      },
      {
        title: "Technikum informatyczne",
        subtitle: "Technikum informatyczne w ZSP. im. Adama Mickiewicz w Lubaniu",
        period: "201X–201X",
        details:
          "Kształcenie w technikum informatycznym obejmowało praktyczne zagadnienia z zakresu systemów operacyjnych, sieci oraz administracji IT. Uzyskane kwalifikacje: E12 – montaż i eksploatacja komputerów osobistych i urządzeń peryferyjnych; E13 – projektowanie i administrowanie sieciami komputerowymi; E14 – tworzenie i administrowanie stronami internetowymi oraz bazami danych.",
      },
    ],
    interests: ["Programowanie", "Siłownia", "Sporty walki", "Strzelectwo"],
  },
};

function GithubIcon({ className = "w-5 h-5 text-cyan-400" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.297 2.748-1.027 2.748-1.027.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5 text-cyan-400" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.339 10.338H5.667V18.333H8.339V10.338ZM7.003 5.667A1.56 1.56 0 0 0 5.444 7.226c0 .861.698 1.559 1.559 1.559a1.56 1.56 0 0 0 1.559-1.559 1.56 1.56 0 0 0-1.559-1.559ZM18.333 13.471c0-2.403-1.531-3.356-3.135-3.356-1.295 0-1.872.713-2.196 1.214v-0.991H10.33c.035.657 0 7.995 0 7.995h2.672v-4.466c0-.239.017-.478.088-.649.194-.477.637-.971 1.38-.971.973 0 1.362.733 1.362 1.809v4.277h2.672v-4.862Z" />
    </svg>
  );
}

function LanguageToggle({ lang, onToggle, label, switchTo }) {
  return (
    <div className="sticky top-4 z-30 mb-6 flex justify-end">
      <button
        type="button"
        onClick={onToggle}
        aria-label={`${label}: ${switchTo}`}
        className="flex items-center gap-3 rounded-full border border-pink-500/60 bg-black/80 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-lg shadow-pink-500/20 backdrop-blur-sm transition hover:border-cyan-400 hover:text-pink-300"
      >
        <span className="text-pink-400">{label}</span>
        <span className="rounded-full border border-cyan-500/40 px-3 py-1 text-xs uppercase tracking-[0.25em]">
          {lang.toUpperCase()}
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-gray-300">
          {switchTo}
        </span>
      </button>
    </div>
  );
}

function TechItem({ name, description, detailsLabel }) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("top-full");
  const poperRef = React.useRef(null);

  const handleMouseEnter = (e) => {
    setOpen(true);

    // Check available space for the poper
    const rect = e.currentTarget.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (rect.bottom + 150 > viewportHeight) {
      setPosition("bottom-full");
    } else {
      setPosition("top-full");
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="w-full rounded-xl border border-cyan-500/40 bg-zinc-950/80 px-4 py-3 text-left text-gray-200 transition hover:border-pink-500/70 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
        type="button"
      >
        {name}
      </button>

      {open && (
        <div
          ref={poperRef}
          className={`absolute left-0 ${position} z-20 mt-3 w-72 rounded-2xl border border-pink-500/60 bg-black/95 p-4 text-sm text-gray-300 shadow-2xl shadow-pink-500/20 backdrop-blur-sm`}
        >
          <div className="mb-2 text-xs uppercase tracking-[0.25em] text-pink-400">
            {detailsLabel}
          </div>
          <p className="leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
}

function TimelineEduItem({
  title,
  subtitle,
  period,
  details,
  detailsLabel,
  isLast = false,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative pl-8"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {!isLast && (
        <div className="absolute left-2 top-5 -bottom-6 w-px bg-cyan-500/30"></div>
      )}

      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-pink-500 shadow shadow-pink-500/50"></div>

      <div className="rounded-xl border border-cyan-500/40 bg-zinc-950/80 px-4 py-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-pink-400">{title}</p>
            <p className="text-xs text-gray-400">{subtitle}</p>
          </div>
          <span className="shrink-0 rounded-full border border-cyan-500/30 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300">
            {period}
          </span>
        </div>
      </div>

      {open && (
        <div className="absolute left-8 top-full z-20 mt-3 w-72 rounded-2xl border border-pink-500/60 bg-black/95 p-4 text-sm text-gray-300 shadow-2xl shadow-pink-500/20 backdrop-blur-sm">
          <div className="mb-2 text-xs uppercase tracking-[0.25em] text-pink-400">
            {detailsLabel}
          </div>
          <p className="leading-relaxed">{details}</p>
        </div>
      )}
    </div>
  );
}

function TimelineExperienceItem({ role, company, period, bullets, isLast = false }) {
  return (
    <div className="relative pl-8">
      {!isLast && (
        <div className="absolute left-2 top-5 -bottom-6 w-px bg-cyan-500/30"></div>
      )}

      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-cyan-400 shadow shadow-cyan-400/50"></div>

      <div className="rounded-xl border border-cyan-500/40 bg-zinc-950/80 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-pink-400">{role}</p>
            <p className="text-xs text-gray-400">{company}</p>
          </div>
          <span className="shrink-0 rounded-full border border-pink-500/30 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-pink-300">
            {period}
          </span>
        </div>

        <ul className="ml-5 mt-3 list-disc space-y-1 text-gray-300">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LinkCard({ href, label, value, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-cyan-500/40 bg-zinc-950/80 px-4 py-3 transition hover:border-pink-500/60 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      {icon}
      <div>
        <p className="text-xs text-pink-400">{label}</p>
        <p className="break-all text-sm text-gray-300">{value}</p>
      </div>
    </a>
  );
}

export default function CyberpunkCV() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <>
      <style>{`
        @keyframes borderSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .cv-shell {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
        }

        .cv-shell::before {
          content: "";
          position: absolute;
          inset: -35%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 300deg,
            rgba(255,255,255,0) 320deg,
            rgba(255,255,255,0.75) 334deg,
            rgba(125,211,252,0.95) 344deg,
            rgba(255,255,255,0.4) 352deg,
            transparent 360deg
          );
          animation: borderSweep 9s linear infinite;
          pointer-events: none;
        }

        .cv-shell::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: calc(1rem - 1px);
          background: rgba(0,0,0,0.96);
          pointer-events: none;
        }

        .cv-content {
          position: relative;
          z-index: 1;
          border-radius: calc(1rem - 1px);
        }
      `}</style>

      <div className="min-h-screen bg-black p-6 font-mono text-cyan-300">
        <div className="cv-shell mx-auto max-w-6xl p-px shadow-2xl shadow-cyan-500/20">
          <div className="cv-content rounded-2xl border border-cyan-500/40 p-8">
            <LanguageToggle
              lang={lang}
              onToggle={() => setLang((current) => (current === "en" ? "pl" : "en"))}
              label={t.langLabel}
              switchTo={t.switchTo}
            />

            <div className="rounded-2xl border border-pink-500/60 bg-black/60 p-6 shadow-lg shadow-pink-500/20 backdrop-blur-sm">
              <div className="grid items-center gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h1 className="text-4xl font-bold tracking-widest text-cyan-400">
                    {t.name}
                  </h1>
                  <p className="mt-2 text-pink-400">{t.role}</p>
                  <p className="mt-4 leading-relaxed text-gray-300">{t.about}</p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <div className="flex h-40 w-40 items-center justify-center rounded-xl border border-cyan-500/60 bg-black/80 text-xs text-gray-500 shadow-lg shadow-cyan-500/20">
                    {t.photo}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div className="space-y-8 md:col-span-2">
                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.experience}
                  </h2>
                  <div className="mt-4 space-y-6">
                    {t.experience.map((item, index) => (
                      <TimelineExperienceItem
                        key={`${item.role}-${item.company}`}
                        role={item.role}
                        company={item.company}
                        period={item.period}
                        bullets={item.bullets}
                        isLast={index === t.experience.length - 1}
                      />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.achievements}
                  </h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
                    {t.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.projects}
                  </h2>
                  <div className="mt-3 space-y-5">
                    {t.projects.map((project) => (
                      <div key={project.title}>
                        <p className="text-pink-400">{project.title}</p>
                        <ul className="ml-5 mt-2 list-disc space-y-1 text-gray-300">
                          {project.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.techStack}
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {t.techStack.map((item) => (
                      <TechItem
                        key={item.name}
                        name={item.name}
                        description={item.description}
                        detailsLabel={t.details}
                      />
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.links}
                  </h2>
                  <div className="mt-3 space-y-3">
                    <LinkCard
                      href="https://github.com/c0zzy98"
                      label={t.links.github}
                      value="github.com/c0zzy98"
                      icon={<GithubIcon />}
                    />
                    <LinkCard
                      href="https://linkedin.com/in/yourprofile"
                      label={t.links.linkedin}
                      value="linkedin.com/in/yourprofile"
                      icon={<LinkedinIcon />}
                    />
                  </div>
                </section>

                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.languages}
                  </h2>
                  <div className="mt-3 space-y-2 text-gray-300">
                    {t.languages.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.learning}
                  </h2>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-300">
                    {t.learning.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.education}
                  </h2>
                  <div className="mt-4 space-y-6">
                    {t.education.map((item, index) => (
                      <TimelineEduItem
                        key={`${item.title}-${item.period}`}
                        title={item.title}
                        subtitle={item.subtitle}
                        period={item.period}
                        details={item.details}
                        detailsLabel={t.details}
                        isLast={index === t.education.length - 1}
                      />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="border-b border-cyan-500 pb-2 text-xl text-cyan-400">
                    {t.sections.interests}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-300">
                    {t.interests.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-pink-500/50 px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
