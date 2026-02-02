const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const langButtons = document.querySelectorAll(".lang-button");
const translations = {
  en: {
    logo: "My<span>Website</span>",
    nav: {
      toggle: "Open menu",
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      title: "Build intelligent products that grow your business.",
      eyebrow: "AI Developer · Product Builder",
      lead:
        "I design and ship AI-powered web experiences, automation pipelines, and data-driven products that turn ideas into measurable results.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Book a Call",
      metric1: { value: "7+", label: "Years in AI & ML" },
      metric2: { value: "20+", label: "Products shipped" },
      metric3: { value: "98%", label: "Client satisfaction" },
      sprint: {
        title: "AI Strategy Sprint",
        body:
          "A focused 10-day sprint to identify high-impact AI opportunities, validate data readiness, and deliver a prototype roadmap.",
        list1: "Opportunity discovery workshop",
        list2: "Rapid PoC with real data",
        list3: "Implementation blueprint",
        cta: "Start the Sprint",
      },
      trust: {
        title: "Trusted by forward-thinking teams",
        body: "Delivering AI solutions for startups, enterprises, and agencies.",
      },
      build: {
        title: "What I can build for you",
        body: "End-to-end services covering strategy, engineering, and design.",
        card1: {
          title: "AI Product Design",
          body: "Translate business goals into AI-ready product requirements, user journeys, and success metrics.",
        },
        card2: {
          title: "ML Engineering",
          body: "Build scalable data pipelines, model training workflows, and evaluation systems for reliable deployment.",
        },
        card3: {
          title: "Full-Stack Delivery",
          body: "Ship production-ready web apps with modern front-end, secure APIs, and analytics dashboards.",
        },
      },
      case: {
        title: "Featured case study",
        subtitle: "How an AI demand forecast cut inventory costs by 32%.",
        project: "Demand Forecast Engine",
        body:
          "Built a forecasting system with multivariate time series models, automated data ingestion, and a real-time dashboard for supply chain teams.",
        list1: "Reduced stockouts by 18%",
        list2: "Improved forecast accuracy to 91%",
        list3: "Integrated with ERP in 6 weeks",
        stat1: { value: "32%", label: "Cost reduction" },
        stat2: { value: "6 weeks", label: "Time to deliver" },
        stat3: { value: "24/7", label: "Monitoring & alerts" },
      },
      process: {
        title: "Work with me",
        body: "A clear, structured delivery process built for speed and quality.",
        step1: { number: "01", title: "Discover", body: "Align on goals, stakeholders, and success metrics." },
        step2: { number: "02", title: "Design", body: "Prototype the AI workflow, architecture, and UX." },
        step3: { number: "03", title: "Deliver", body: "Ship, monitor, and iterate with analytics." },
      },
    },
    about: {
      eyebrow: "Who I am",
      title: "AI developer focused on impact and clarity.",
      lead:
        "I blend machine learning, design thinking, and full-stack engineering to build AI products that feel human and drive measurable outcomes.",
      mission: {
        title: "My mission",
        body1:
          "Help teams unlock AI opportunities with clear strategy, reliable engineering, and a premium user experience.",
        body2:
          "From MVPs to enterprise systems, I focus on building solutions that are explainable, maintainable, and trusted by stakeholders.",
      },
      strengths: {
        title: "Core strengths",
        item1: "AI product strategy & discovery",
        item2: "ML pipelines, MLOps, and evaluation",
        item3: "UX-led full-stack development",
        item4: "Stakeholder workshops and training",
      },
      experience: {
        title: "Experience highlights",
        subtitle: "Selected milestones from the last few years.",
        item1: {
          title: "Lead AI Engineer",
          body: "Scaled recommendation systems for a SaaS platform serving 2M+ users.",
        },
        item2: {
          title: "Product Consultant",
          body: "Designed AI automation for finance teams, cutting reporting time by 45%.",
        },
        item3: {
          title: "Startup Founder",
          body: "Built a computer vision MVP that secured $500k in seed funding.",
        },
      },
    },
    services: {
      eyebrow: "Services",
      title: "Strategy, engineering, and design in one place.",
      lead: "Pick a focused engagement or combine services for a full end-to-end AI delivery.",
      card1: {
        title: "AI Strategy & Roadmap",
        body: "Align leadership on AI priorities, data readiness, and ROI. Outcome: a clear, ranked roadmap with success metrics.",
        list1: "Stakeholder workshops",
        list2: "Use-case prioritization",
        list3: "Risk & compliance review",
      },
      card2: {
        title: "ML System Build",
        body: "Design, train, and deploy models with monitoring, evaluation, and retraining workflows.",
        list1: "Data pipelines",
        list2: "Model training & tuning",
        list3: "MLOps dashboards",
      },
      card3: {
        title: "AI Product MVP",
        body: "Ship a functional prototype or MVP that users can test within weeks. Includes UX and full-stack build.",
        list1: "User research & UX",
        list2: "Front-end + API build",
        list3: "Analytics & feedback loop",
      },
      card4: {
        title: "Optimization & Scaling",
        body: "Improve accuracy, performance, and infrastructure costs for existing AI solutions.",
        list1: "Model performance audit",
        list2: "Latency & cost optimization",
        list3: "Production reliability",
      },
      models: {
        title: "Engagement models",
        subtitle: "Choose the right collaboration style for your team.",
        item1: { title: "Discovery Sprint", body: "1-2 weeks focused on use cases, data, and a PoC." },
        item2: { title: "Product Build", body: "6-12 weeks for full MVP delivery and launch." },
        item3: { title: "Retainer", body: "Ongoing AI advisory, iteration, and optimization." },
      },
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Selected AI products and launches.",
      lead: "A mix of strategic consulting, ML systems, and full-stack delivery across industries.",
      card1: {
        title: "Smart Support Assistant",
        body: "Built a multilingual LLM assistant that reduced ticket resolution time by 40%.",
        list1: "LLM orchestration + retrieval",
        list2: "Human-in-the-loop review",
        list3: "Analytics dashboard",
      },
      card2: {
        title: "Retail Demand Forecast",
        body: "Deployed a forecasting pipeline with automated alerts for planning teams.",
        list1: "Time-series modeling",
        list2: "Auto-scheduled training",
        list3: "ERP integration",
      },
      card3: {
        title: "Computer Vision QA",
        body: "Identified manufacturing defects with 96% accuracy using edge cameras.",
        list1: "Edge inference optimization",
        list2: "Active learning loop",
        list3: "Executive reporting",
      },
      card4: {
        title: "Marketing Personalization",
        body: "Personalized campaigns with uplift modeling and segmentation insights.",
        list1: "Customer clustering",
        list2: "Campaign automation",
        list3: "ROI tracking",
      },
      stack: { title: "Technology stack", subtitle: "Modern tools used to build reliable AI products." },
    },
    contact: {
      eyebrow: "Let’s talk",
      title: "Ready to build something smart?",
      lead: "Share your goals and I will respond within 24 hours with next steps and availability.",
      form: {
        name: "Full Name",
        namePlaceholder: "Your name",
        email: "Email Address",
        emailPlaceholder: "you@email.com",
        project: "Project Type",
        projectOption1: "AI Strategy",
        projectOption2: "ML System",
        projectOption3: "Product MVP",
        projectOption4: "Optimization",
        details: "Project Details",
        detailsPlaceholder: "Tell me about your goals",
        submit: "Send Inquiry",
      },
      info: {
        title: "Contact details",
        email: "Email: hello@mywebsite.com",
        location: "Location: Remote · Global",
        availability: "Availability: Next month",
      },
    },
    footer: {
      title: "Let’s build your AI advantage",
      body: "Available for new projects starting next month.",
      ctaPrimary: "Schedule a Call",
    },
    meta: {
      homeTitle: "AI Developer Landing Page | My Website",
      homeDescription: "Professional AI developer landing page with services, projects, and contact.",
      aboutTitle: "About | My Website",
      aboutDescription: "About the AI developer behind My Website.",
      servicesTitle: "Services | My Website",
      servicesDescription: "AI development services for product teams.",
      projectsTitle: "Projects | My Website",
      projectsDescription: "AI development projects and case studies.",
      contactTitle: "Contact | My Website",
      contactDescription: "Contact the AI developer for new projects.",
    },
  },
  de: {
    logo: "Meine<span>Website</span>",
    nav: {
      toggle: "Menü öffnen",
      home: "Start",
      about: "Über mich",
      services: "Leistungen",
      projects: "Projekte",
      contact: "Kontakt",
    },
    home: {
      title: "Intelligente Produkte bauen, die dein Business wachsen lassen.",
      eyebrow: "KI-Entwickler · Product Builder",
      lead:
        "Ich entwickle KI-gestützte Web-Erlebnisse, Automatisierungen und datengetriebene Produkte, die Ideen in messbare Ergebnisse verwandeln.",
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Gespräch buchen",
      metric1: { value: "7+", label: "Jahre in KI & ML" },
      metric2: { value: "20+", label: "Produkte ausgeliefert" },
      metric3: { value: "98%", label: "Kundenzufriedenheit" },
      sprint: {
        title: "KI-Strategie Sprint",
        body:
          "Ein fokussierter 10-Tage-Sprint zur Identifikation von Chancen, Daten-Check und einer klaren Umsetzungsroadmap.",
        list1: "Workshop zur Chancenerkennung",
        list2: "Schneller PoC mit echten Daten",
        list3: "Implementierungs-Blueprint",
        cta: "Sprint starten",
      },
      trust: {
        title: "Vertrauen von zukunftsorientierten Teams",
        body: "KI-Lösungen für Startups, Unternehmen und Agenturen.",
      },
      build: {
        title: "Was ich für dich baue",
        body: "End-to-End-Services von Strategie bis Engineering und Design.",
        card1: {
          title: "KI-Produktdesign",
          body: "Business-Ziele in klare Anforderungen, Journeys und Erfolgsmessung übersetzen.",
        },
        card2: {
          title: "ML Engineering",
          body: "Skalierbare Datenpipelines, Trainings-Workflows und Evaluationssysteme.",
        },
        card3: {
          title: "Full-Stack Delivery",
          body: "Produktionsreife Web-Apps mit modernen Frontends, sicheren APIs und Dashboards.",
        },
      },
      case: {
        title: "Case Study",
        subtitle: "Wie KI-Prognosen Lagerkosten um 32% senkten.",
        project: "Demand Forecast Engine",
        body:
          "Ein Prognosesystem mit Zeitreihenmodellen, automatischem Ingest und Echtzeit-Dashboard.",
        list1: "Stockouts um 18% reduziert",
        list2: "Prognosegenauigkeit auf 91%",
        list3: "ERP-Integration in 6 Wochen",
        stat1: { value: "32%", label: "Kostenreduktion" },
        stat2: { value: "6 Wochen", label: "Lieferzeit" },
        stat3: { value: "24/7", label: "Monitoring & Alerts" },
      },
      process: {
        title: "Zusammenarbeit",
        body: "Ein klarer Prozess für Geschwindigkeit und Qualität.",
        step1: { number: "01", title: "Discover", body: "Ziele, Stakeholder und Erfolgsmessung abstimmen." },
        step2: { number: "02", title: "Design", body: "Workflow, Architektur und UX prototypisieren." },
        step3: { number: "03", title: "Deliver", body: "Liefern, überwachen, iterieren." },
      },
    },
    about: {
      eyebrow: "Wer ich bin",
      title: "KI-Entwickler mit Fokus auf Wirkung und Klarheit.",
      lead:
        "Ich verbinde Machine Learning, Design Thinking und Full-Stack Engineering für Produkte mit messbarer Wirkung.",
      mission: {
        title: "Meine Mission",
        body1:
          "Teams helfen, KI-Chancen mit klarer Strategie, verlässlichem Engineering und Premium-UX zu realisieren.",
        body2:
          "Von MVPs bis Enterprise-Systeme baue ich erklärbare und vertrauenswürdige Lösungen.",
      },
      strengths: {
        title: "Kernstärken",
        item1: "KI-Produktstrategie & Discovery",
        item2: "ML-Pipelines, MLOps & Evaluation",
        item3: "UX-getriebene Full-Stack-Entwicklung",
        item4: "Workshops & Trainings",
      },
      experience: {
        title: "Highlights",
        subtitle: "Ausgewählte Meilensteine der letzten Jahre.",
        item1: { title: "Lead AI Engineer", body: "Empfehlungssysteme für eine SaaS-Plattform mit 2M+ Nutzern skaliert." },
        item2: { title: "Product Consultant", body: "KI-Automation für Finance-Teams, 45% schnellere Reports." },
        item3: { title: "Startup Founder", body: "Computer-Vision MVP gebaut und $500k Seed-Funding gesichert." },
      },
    },
    services: {
      eyebrow: "Leistungen",
      title: "Strategie, Engineering und Design aus einer Hand.",
      lead: "Wähle ein Paket oder kombiniere Services für End-to-End-Delivery.",
      card1: {
        title: "KI-Strategie & Roadmap",
        body: "Prioritäten, Datenreife und ROI definieren. Ergebnis: klare Roadmap mit KPIs.",
        list1: "Stakeholder-Workshops",
        list2: "Use-Case-Priorisierung",
        list3: "Risiko- & Compliance-Review",
      },
      card2: {
        title: "ML-Systemaufbau",
        body: "Modelle designen, trainieren und deployen inklusive Monitoring und Retraining.",
        list1: "Datenpipelines",
        list2: "Training & Tuning",
        list3: "MLOps-Dashboards",
      },
      card3: {
        title: "KI-Produkt MVP",
        body: "Funktionale MVPs in Wochen inkl. UX und Full-Stack-Umsetzung.",
        list1: "User Research & UX",
        list2: "Frontend + API",
        list3: "Analytics & Feedback",
      },
      card4: {
        title: "Optimierung & Scaling",
        body: "Genauigkeit, Performance und Kosten bestehender Lösungen verbessern.",
        list1: "Model-Audit",
        list2: "Latency-Optimierung",
        list3: "Production Reliability",
      },
      models: {
        title: "Zusammenarbeitsmodelle",
        subtitle: "Wähle das passende Modell für dein Team.",
        item1: { title: "Discovery Sprint", body: "1-2 Wochen für Use Cases, Daten und PoC." },
        item2: { title: "Product Build", body: "6-12 Wochen für MVP und Launch." },
        item3: { title: "Retainer", body: "Laufende Beratung und Optimierung." },
      },
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Ausgewählte KI-Produkte und Launches.",
      lead: "Strategische Beratung, ML-Systeme und Full-Stack Delivery für verschiedene Branchen.",
      card1: {
        title: "Smart Support Assistant",
        body: "Mehrsprachiger LLM-Assistent mit 40% schnellerer Ticketlösung.",
        list1: "LLM-Orchestrierung + Retrieval",
        list2: "Human-in-the-loop",
        list3: "Analytics-Dashboard",
      },
      card2: {
        title: "Retail Demand Forecast",
        body: "Forecasting-Pipeline mit automatischen Alerts für Planungsteams.",
        list1: "Time-Series Modeling",
        list2: "Automatisiertes Training",
        list3: "ERP-Integration",
      },
      card3: {
        title: "Computer Vision QA",
        body: "96% Genauigkeit bei der Fehlererkennung mit Edge-Kameras.",
        list1: "Edge Inference Optimierung",
        list2: "Active Learning Loop",
        list3: "Executive Reporting",
      },
      card4: {
        title: "Marketing Personalisierung",
        body: "Uplift-Modeling und Segmentierung zur ROI-Steigerung.",
        list1: "Customer Clustering",
        list2: "Campaign Automation",
        list3: "ROI Tracking",
      },
      stack: { title: "Technologie-Stack", subtitle: "Moderne Tools für zuverlässige KI-Produkte." },
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Bereit, etwas Smartes zu bauen?",
      lead: "Teile deine Ziele und ich melde mich innerhalb von 24 Stunden.",
      form: {
        name: "Vollständiger Name",
        namePlaceholder: "Dein Name",
        email: "E-Mail-Adresse",
        emailPlaceholder: "you@email.com",
        project: "Projektart",
        projectOption1: "KI-Strategie",
        projectOption2: "ML-System",
        projectOption3: "Produkt MVP",
        projectOption4: "Optimierung",
        details: "Projektdetails",
        detailsPlaceholder: "Erzähl mir von deinen Zielen",
        submit: "Anfrage senden",
      },
      info: {
        title: "Kontaktinfo",
        email: "E-Mail: hello@mywebsite.com",
        location: "Standort: Remote · Global",
        availability: "Verfügbarkeit: Nächster Monat",
      },
    },
    footer: {
      title: "Lass uns deinen KI-Vorsprung bauen",
      body: "Neue Projekte ab nächstem Monat möglich.",
      ctaPrimary: "Gespräch planen",
    },
    meta: {
      homeTitle: "KI-Entwickler Landing Page | Meine Website",
      homeDescription: "Professionelle KI-Landing-Page mit Services, Projekten und Kontakt.",
      aboutTitle: "Über mich | Meine Website",
      aboutDescription: "Über den KI-Entwickler hinter der Website.",
      servicesTitle: "Leistungen | Meine Website",
      servicesDescription: "KI-Services für Produktteams.",
      projectsTitle: "Projekte | Meine Website",
      projectsDescription: "KI-Projekte und Case Studies.",
      contactTitle: "Kontakt | Meine Website",
      contactDescription: "Kontakt für neue KI-Projekte.",
    },
  },
  ar: {
    logo: "موقعي<span>الاحترافي</span>",
    nav: {
      toggle: "فتح القائمة",
      home: "الرئيسية",
      about: "من أنا",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "تواصل",
    },
    home: {
      title: "حوّل أفكارك إلى منتجات ذكية تنمو مع عملك.",
      eyebrow: "مطوّر ذكاء اصطناعي · صانع منتجات",
      lead: "أبني حلول ذكاء اصطناعي وتجارب ويب متقدمة وأتمتة ذكية، من الفكرة إلى الإطلاق مع نتائج قابلة للقياس.",
      ctaPrimary: "استعرض المشاريع",
      ctaSecondary: "احجز مكالمة",
      metric1: { value: "7+", label: "سنوات خبرة في الذكاء الاصطناعي" },
      metric2: { value: "20+", label: "منتج تم إطلاقه" },
      metric3: { value: "98%", label: "رضا العملاء" },
      sprint: {
        title: "سباق استراتيجية الذكاء الاصطناعي",
        body: "برنامج مكثّف لمدة 10 أيام لتحديد الفرص الأعلى تأثيرًا، تقييم البيانات، وبناء خارطة طريق للتنفيذ.",
        list1: "ورشة اكتشاف الفرص",
        list2: "نموذج أولي سريع بالبيانات الحقيقية",
        list3: "خطة تنفيذ واضحة",
        cta: "ابدأ السباق",
      },
      trust: {
        title: "ثقة فرق تطمح للأفضل",
        body: "حلول ذكاء اصطناعي للشركات الناشئة والمؤسسات والوكالات.",
      },
      build: {
        title: "ماذا أبني لك؟",
        body: "خدمات متكاملة من الاستراتيجية إلى الهندسة والتصميم.",
        card1: {
          title: "تصميم منتجات AI",
          body: "تحويل أهداف العمل إلى متطلبات واضحة، مسارات استخدام، ومؤشرات نجاح قابلة للقياس.",
        },
        card2: {
          title: "هندسة تعلم الآلة",
          body: "بناء خطوط بيانات، تدريب نماذج، وأنظمة تقييم جاهزة للإطلاق والإدارة.",
        },
        card3: {
          title: "تسليم متكامل",
          body: "تطبيقات ويب احترافية مع واجهات حديثة وواجهات API آمنة ولوحات قياس.",
        },
      },
      case: {
        title: "دراسة حالة مميزة",
        subtitle: "نظام توقع الطلب خفّض التكاليف بنسبة 32%.",
        project: "محرك توقع الطلب",
        body: "بناء نظام تنبؤ باستخدام نماذج سلاسل زمنية متعددة المتغيرات مع لوحة متابعة لحظية.",
        list1: "تقليل نفاد المخزون 18%",
        list2: "دقة توقع 91%",
        list3: "تكامل مع ERP خلال 6 أسابيع",
        stat1: { value: "32%", label: "خفض التكاليف" },
        stat2: { value: "6 أسابيع", label: "مدة التنفيذ" },
        stat3: { value: "24/7", label: "مراقبة وتنبيهات" },
      },
      process: {
        title: "طريقة العمل معي",
        body: "عملية واضحة وسريعة لضمان الجودة والنتائج.",
        step1: { number: "01", title: "اكتشاف", body: "تحديد الأهداف وأصحاب المصلحة ومؤشرات النجاح." },
        step2: { number: "02", title: "تصميم", body: "تصميم التجربة والبنية التقنية ومسار الذكاء الاصطناعي." },
        step3: { number: "03", title: "تنفيذ", body: "إطلاق المنتج، المتابعة، والتحسين المستمر." },
      },
    },
    about: {
      eyebrow: "نبذة شخصية",
      title: "مطوّر ذكاء اصطناعي يركز على الأثر والوضوح.",
      lead: "أمزج بين تعلم الآلة والتفكير التصميمي والهندسة الكاملة لبناء منتجات ذكية سهلة الاستخدام وذات نتائج قوية.",
      mission: {
        title: "رسالتي",
        body1: "مساعدة الفرق على تحويل فرص الذكاء الاصطناعي إلى نتائج فعلية عبر استراتيجية واضحة وتنفيذ موثوق وتجربة مستخدم ممتازة.",
        body2: "من النماذج الأولية إلى أنظمة المؤسسات، أركز على بناء حلول قابلة للشرح وسهلة الصيانة وتحظى بثقة أصحاب القرار.",
      },
      strengths: {
        title: "نقاط قوتي",
        item1: "استراتيجية منتجات الذكاء الاصطناعي",
        item2: "خطوط ML وإدارة MLOps والتقييم",
        item3: "تطوير شامل مبني على تجربة المستخدم",
        item4: "ورش عمل وتدريب للفرق",
      },
      experience: {
        title: "محطات خبرة",
        subtitle: "أبرز الإنجازات خلال السنوات الأخيرة.",
        item1: { title: "قائد هندسة ذكاء اصطناعي", body: "توسيع أنظمة التوصية لمنصة SaaS تضم أكثر من 2 مليون مستخدم." },
        item2: { title: "مستشار منتجات", body: "تصميم أتمتة ذكية لفرق مالية قلّصت وقت التقارير 45%." },
        item3: { title: "مؤسس شركة ناشئة", body: "بناء MVP للرؤية الحاسوبية جذب تمويلاً أولياً بقيمة 500 ألف دولار." },
      },
    },
    services: {
      eyebrow: "الخدمات",
      title: "استراتيجية، هندسة، وتصميم في مكان واحد.",
      lead: "يمكنك اختيار خدمة محددة أو الجمع بينها لتسليم كامل من البداية إلى النهاية.",
      card1: {
        title: "استراتيجية وخارطة طريق",
        body: "توحيد الرؤية حول أولويات الذكاء الاصطناعي والبيانات والعائد المتوقع.",
        list1: "ورش عمل لأصحاب القرار",
        list2: "ترتيب حالات الاستخدام",
        list3: "مراجعة المخاطر والامتثال",
      },
      card2: {
        title: "بناء أنظمة ML",
        body: "تصميم وتدريب ونشر نماذج مع مراقبة وتقييم وإعادة تدريب آلي.",
        list1: "خطوط بيانات",
        list2: "تدريب وتحسين النماذج",
        list3: "لوحات MLOps",
      },
      card3: {
        title: "منتج MVP ذكي",
        body: "إطلاق نموذج أولي أو MVP خلال أسابيع مع تجربة مستخدم ممتازة.",
        list1: "بحث المستخدمين وUX",
        list2: "بناء الواجهة + API",
        list3: "تحليلات وتغذية راجعة",
      },
      card4: {
        title: "تحسين وتوسّع",
        body: "تحسين الدقة والأداء والتكلفة للبنى الحالية.",
        list1: "تدقيق أداء النماذج",
        list2: "تحسين زمن الاستجابة",
        list3: "رفع موثوقية الإنتاج",
      },
      models: {
        title: "نماذج التعاون",
        subtitle: "اختر أسلوب العمل المناسب لفريقك.",
        item1: { title: "سباق اكتشاف", body: "1-2 أسبوع لتحديد الاستخدامات وبناء نموذج أولي." },
        item2: { title: "بناء المنتج", body: "6-12 أسبوع لتسليم MVP وإطلاقه." },
        item3: { title: "اشتراك شهري", body: "دعم مستمر، تحسينات، واستشارات." },
      },
    },
    projects: {
      eyebrow: "أعمال مختارة",
      title: "منتجات ذكية تم إطلاقها بنجاح.",
      lead: "مزيج من الاستشارة الاستراتيجية، الأنظمة الذكية، وتسليم المنتجات الكاملة.",
      card1: {
        title: "مساعد دعم ذكي",
        body: "بناء مساعد متعدد اللغات خفّض وقت حل التذاكر بنسبة 40%.",
        list1: "تنسيق LLM مع بحث سياقي",
        list2: "مراجعة بشرية ذكية",
        list3: "لوحة تحليلات متقدمة",
      },
      card2: {
        title: "توقع الطلب للتجزئة",
        body: "خط توقع آلي مع تنبيهات فورية لفرق التخطيط.",
        list1: "نماذج سلاسل زمنية",
        list2: "تدريب آلي مجدول",
        list3: "تكامل مع ERP",
      },
      card3: {
        title: "فحص جودة بالرؤية",
        body: "رصد العيوب بنسبة دقة 96% باستخدام كاميرات طرفية.",
        list1: "تحسين الاستدلال الطرفي",
        list2: "حلقة تعلم نشط",
        list3: "تقارير تنفيذية",
      },
      card4: {
        title: "تخصيص حملات تسويقية",
        body: "نمذجة الاستجابة وتحسين الشرائح لزيادة العائد.",
        list1: "تجميع العملاء",
        list2: "أتمتة الحملات",
        list3: "تتبع ROI",
      },
      stack: { title: "التقنيات المستخدمة", subtitle: "أدوات حديثة لبناء منتجات موثوقة." },
    },
    contact: {
      eyebrow: "دعنا نبدأ",
      title: "جاهز لبناء شيء ذكي؟",
      lead: "شارك أهدافك وسأرد خلال 24 ساعة بخطوات واضحة وجدول مبدئي.",
      form: {
        name: "الاسم الكامل",
        namePlaceholder: "اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "you@email.com",
        project: "نوع المشروع",
        projectOption1: "استراتيجية AI",
        projectOption2: "نظام تعلم آلة",
        projectOption3: "منتج MVP",
        projectOption4: "تحسين وتوسّع",
        details: "تفاصيل المشروع",
        detailsPlaceholder: "أخبرني عن أهدافك",
        submit: "إرسال الطلب",
      },
      info: {
        title: "بيانات التواصل",
        email: "البريد: hello@mywebsite.com",
        location: "الموقع: عن بعد · عالمي",
        availability: "التوفر: الشهر القادم",
      },
    },
    footer: {
      title: "جاهز لبناء ميزتك بالذكاء الاصطناعي",
      body: "متاح لمشاريع جديدة الشهر القادم.",
      ctaPrimary: "احجز مكالمة",
    },
    meta: {
      homeTitle: "موقعي | صفحة هبوط لمطوّر ذكاء اصطناعي",
      homeDescription: "صفحة هبوط احترافية لمطوّر ذكاء اصطناعي تشمل الخدمات والمشاريع والتواصل.",
      aboutTitle: "من أنا | موقعي",
      aboutDescription: "نبذة عن مطوّر الذكاء الاصطناعي خلف موقعي.",
      servicesTitle: "الخدمات | موقعي",
      servicesDescription: "خدمات تطوير ذكاء اصطناعي للمنتجات الرقمية.",
      projectsTitle: "المشاريع | موقعي",
      projectsDescription: "مشاريع ودراسات حالة في الذكاء الاصطناعي.",
      contactTitle: "تواصل | موقعي",
      contactDescription: "تواصل مع مطوّر الذكاء الاصطناعي لمشروعك القادم.",
    },
  },
};

const pageMetaMap = {
  index: { title: "homeTitle", description: "homeDescription" },
  about: { title: "aboutTitle", description: "aboutDescription" },
  services: { title: "servicesTitle", description: "servicesDescription" },
  projects: { title: "projectsTitle", description: "projectsDescription" },
  contact: { title: "contactTitle", description: "contactDescription" },
};

const defaultLang = "en";
const storedLang = localStorage.getItem("language");
const initialLang = storedLang || defaultLang;

const setLanguage = (lang) => {
  const content = translations[lang] || translations[defaultLang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = key.split(".").reduce((acc, part) => acc && acc[part], content);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    const value = key.split(".").reduce((acc, part) => acc && acc[part], content);
    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = key.split(".").reduce((acc, part) => acc && acc[part], content);
    if (typeof value === "string") {
      element.setAttribute("placeholder", value);
    }
  });

  const pageName = document.body.dataset.page;
  const pageMeta = pageMetaMap[pageName];
  if (pageMeta && content.meta) {
    const titleElement = document.getElementById("page-title");
    const descriptionElement = document.getElementById("page-description");
    if (titleElement) {
      titleElement.textContent = content.meta[pageMeta.title];
    }
    if (descriptionElement) {
      descriptionElement.setAttribute("content", content.meta[pageMeta.description]);
    }
  }
};

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    localStorage.setItem("language", lang);
    setLanguage(lang);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(initialLang);
});
