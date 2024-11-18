const modalsText = [
  {
    background: "#789E91",
    color: "#000000",
    title: "Fundação Promon de Previdência Social (FPPS)",
    desc: "Entidade fechada de previdência complementar em benefício dos profissionais que atuam ou já atuaram nas companhias do portfólio."
  },
  {
    background: "#194BFF",
    color: "#fff",
    title: "Logicalis Latin America",
    desc: "Empresa de soluções e serviços de Tecnologia da Informação e Comunicação (TIC) que atende setores diversos, com operação em 12 países da América Latina. Foi formada por uma joint venture entre a Promon S.A. e a companhia britânica Logicalis Group Limited."
  },
  {
    background: "#54565A",
    color: "#fff",
    title: "PHL Investimentos",
    desc: "Em 2024s, a fim de fortalecer e diversificar sua atuação, a Promon S.A. anunciou a criação de mais duas empresas. A PHL Investimentos foi criada para agregar a sinergia entre esses novos negócios e a Promon Engenharia."
  },
  {
    background: "#E04403",
    color: "#fff",
    title: "Promon Engenharia",
    desc: "Dedica-se ao mercado de engenharia e gerenciamento nos setores de energia, infraestrutura e logística, mineração e metalurgia, química e petroquímica, manufatura e óleo e gás."
  },
  {
    background: "#E8A342",
    color: "#000",
    title: "Forzy",
    desc: "Dedicada à oferta de serviços e soluções com foco em eficiência operacional e energética e na digitalização de ativos nos setores de indústrias, energia, infraestrutura e imobiliário."
  },
  {
    color: "#fff",
    background: "#3F186F",
    title: "Educação em Engenharia",
    desc: "Ainda em desenvolvimento, visa capacitar engenheiros por meio de uma plataforma de educação."
  }
];

function openModal(modalIndex) {
  const modal = document.querySelector("#modal");
  const modalContent = document.querySelector("#modal-content");
  const title = document.querySelector("#modal-title");
  const desc = document.querySelector("#modal-desc");

  modal.classList.remove("hidden");
  modalContent.style.background = modalsText[modalIndex].background;
  title.innerHTML = modalsText[modalIndex].title;
  title.style.color = modalsText[modalIndex].color;
  desc.innerHTML = modalsText[modalIndex].desc;
  desc.style.color = modalsText[modalIndex].color;
}

function closeModal() {
  document.querySelector("#modal").classList.add("hidden");
}

document.getElementById('svg-main').addEventListener('load', function () {
  this.contentDocument.getElementById("modal-1").addEventListener("click", () => openModal(0));
  this.contentDocument.getElementById("modal-2").addEventListener("click", () => openModal(1));
  this.contentDocument.getElementById("modal-3").addEventListener("click", () => openModal(2));
  this.contentDocument.getElementById("modal-4").addEventListener("click", () => openModal(3));
  this.contentDocument.getElementById("modal-5").addEventListener("click", () => openModal(4));
  this.contentDocument.getElementById("modal-6").addEventListener("click", () => openModal(5));

  document.getElementById("modal")?.addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
});


function changeLanguage(language, init = false) {
  const currentLanguage = localStorage.getItem('language') || 'pt';
  if (currentLanguage === language && !init) return;

  localStorage.setItem('language', language);

  if (language !== 'pt' || init) {
    const textElements = document.querySelectorAll('[data-translate]');
    textElements.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.innerHTML = translations[key] && translations[key][language] ? translations[key][language] : element.innerHTML;
    });
  }

  if (language === 'pt' && currentLanguage === 'en') location.reload();

  const languageSelect = document.querySelector('select');
  languageSelect.value = language;

  const languageText = document.querySelector('.language-select span');
  languageText.textContent = language.toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('language') || 'pt';
  changeLanguage(savedLanguage, true);
});

const translations = {
  'annual_report': {
    'en': 'Annual <br> Report <br> 2024*',
  },
  'promon_description': {
    'en': 'Founded in 1960, Promon S.A. is a holding company with a portfolio of companies active in the engineering, Information and Communication Technology (ICT), and digital efficiency and transformation markets. With a unique profile, its shareholders are professionals and former professionals of the Organization.',
  },
  'holding_composed': {
    'en': 'The Promon S.A. holding is composed of:',
  },
  'holding_formed': {
    'en': 'The Promon S.A. holding is formed by:',
  },
  'highlights': {
    'en': '2024s Highlights',
  },
  'note': {
    'en': '*Note: 2024s refers to the fiscal year starting on April 1, 2023, and ending on March 31, 2024.',
  },
  'promon_s_a_highlight': {
    'en': 'Promon S.A.',
  },
  'promon_s_a_highlight': {
    'en': 'Promon S.A.',
  },
  'consolidated_profit': {
    'en': 'R$ 3.9 million <br> <span>of profit in the consolidated result</span>',
  },
  'consolidated_profit_label': {
    'en': 'of profit in the consolidated result',
  },
  'management_revenue': {
    'en': 'R$ 1.37 billion <br> <span>of management revenue</span>',
  },
  'management_revenue_label': {
    'en': 'of management revenue',
  },
  'professionals': {
    'en': '3,398 <br> <span>professionals</span>',
  },
  'professionals_label': {
    'en': 'professionals',
  },
  'promon_engineering': {
    'en': 'Promon Engineering',
  },
  'sales': {
    'en': 'R$ 281 million <br> <span>million in sales</span>',
  },
  'sales_label': {
    'en': 'million in sales',
  },
  'gross_revenue': {
    'en': 'R$ 271 million <br> <span>in gross revenue</span>',
  },
  'gross_revenue_label': {
    'en': 'in gross revenue',
  },
  'customer_satisfaction': {
    'en': '<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rising indexes</font></font><br> <span data-translate="customer_satisfaction_text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Customer Satisfaction: 76% NPI (+20 percentage points compared to 2023s) and 85% Overall Satisfaction Index (+3 percentage points)</font></font></span>',
  },
  'customer_satisfaction_text': {
    'en': 'of customer satisfaction: 76% of NPI (+20 percentage points compared to 2023s) and 85% of General Satisfaction Index (+3 percentage points)',
  },
  'plogicalis': {
    'en': 'PLogicalis <br> Latin America*',
  },
  'note_logicalis': {
    'en': '*The fiscal year of Logicalis covers the period from March 1, 2023 to February 29, 2024.',
  },

  'promon_engineering': {
    'en': 'Promon Engineering',
  },
  'sales_label': {
    'en': 'sales',
  },
  'gross_revenue_label': {
    'en': 'gross revenue',
  },
  'customer_satisfaction_text': {
    'en': '76% NPI (+ 20 percentage points compared to 2023s) and 85% General Satisfaction Index (+ 3 percentage points)',
  },
  'plogicalis': {
    'en': 'PLogicalis Latin America*',
  },
  'note_logicalis': {
    'en': '*The fiscal year for Logicalis considers the period from March 1, 2023, to February 29, 2024.',
  },
  'pension_plans': {
    'en': 'Pension Plans',
  },
  'multiFlex_plan': {
    'en': 'MultiFlex Plan',
  },
  'defined_contribution': {
    'en': 'Defined Contribution Scheme',
  },
  'promon_basico_plus': {
    'en': 'Promon BásicoPlus',
  },
  'results_2023': {
    'en': '2023 Results',
  },
  'benefits_paid': {
    'en': 'R$ 124.5 million<br>in benefits paid to 759 assisted participants',
  },
  'foundation_title': {
    'en': 'Promon Foundation for Social Security (FPPS)*',
  },
  'pension_plans_title': {
    'en': 'Pension Plans',
  },
  'plan_multiflex': {
    'en': 'MultiFlex Plan',
  },
  'plan_promon_basicplus': {
    'en': 'Promon BasicPlus',
  },
  'defined_benefit': {
    'en': 'Defined benefit modality',
  },
  'results_2023_title': {
    'en': '2023 Results',
  },
  'total_investments': {
    'en': 'R$ 1.9 billion<br>total investments from the two plans',
  },
  'contributions_received': {
    'en': 'R$ 22.4 million<br>received in pension contributions from 1,449 active and self-sponsored participants',
  },
  'total_investments_value': {
    'en': 'R$ 1.9 billion',
  },
  'total_investments_text': {
    'en': 'total investments from the two plans',
  },
  'benefits_paid_value': {
    'en': 'R$ 124.5 million',
  },
  'benefits_paid_text': {
    'en': 'in benefits paid to 759 assisted participants',
  },
  'contributions_received_value': {
    'en': 'R$ 22.4 million',
  },
  'contributions_received_text': {
    'en': 'received in pension contributions from 1,449 active and self-sponsored participants',
  },
  'esg_title': {
    'en': 'ESG at Promon',
  },
  'esg_subtitle': {
    'en': 'Check out below the main initiatives of the companies of Promon S.A. in the environmental, social, and governance aspects during 2024s.',
  },
  'esg_initiative_1': {
    'en': 'Creation of the Sustainable Development area to accelerate the integration of the ESG strategy into processes and business.',
  },
  'esg_initiative_2': {
    'en': 'Implementation of ESG Meetings, meetings to analyze the ESG potential of each new project that arrives at the company.',
  },
  'esg_initiative_3': {
    'en': 'Creation of three affinity groups with high levels of participation and employee engagement: Racial and Gender Equity; LGBTQIA+; and Parenthood.',
  },
  'esg_initiative_4': {
    'en': 'First mapping of greenhouse gas emissions from the company.',
  },
  'esg_initiative_5': {
    'en': 'First acquisition of Certified Emission Reductions (CERs), equivalent to 348 tons of CO₂.',
  },
  'esg_initiative_6': {
    'en': 'Decarbonization initiatives such as monitoring and neutralizing carbon emissions and transportation by electric vehicle.',
  },
  'esg_initiative_7': {
    'en': 'Reverse logistics for sustainable disposal of electronic waste.',
  },
  'esg_initiative_8': {
    'en': 'Launch of the LogiBrave affinity group (PcDs + neurodiverse), joining the other existing groups: LogiPride (LGBTQIA+), LogiWomen (women), and LogiBold (Black and Brown).',
  },
  'esg_initiative_9': {
    'en': 'Inclusion of diversity and inclusion topics in the company\'s internal satisfaction survey.',
  },
  'esg_initiative_10': {
    'en': 'Partnership with the Business Initiative for Racial Equality.',
  },
  'footer_want_to_know_more': {
    'en': 'WANT TO KNOW MORE?',
  },
  'footer_access_full_report': {
    'en': 'Access the <span>full report</span> of 2024s from Promon S.A.',
  },
  'footer_full_report': {
    'en': 'full report',
  }
};