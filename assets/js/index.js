const modalsTextEn = [
  {
    name: "FPPS",
    background: "#789E91",
    color: "#000000",
    title: "Fundação Promon de Previdência Social (FPPS)",
    desc: "A closed supplementary pension entity established to benefit professionals currently or formerly employed by portfolio companies."
  },
  {
    name: "logicalis",
    background: "#194BFF",
    color: "#fff",
    title: "Logicalis Latin America",
    desc: "An Information and Communication Technology (ICT) solutions and services company that serves different industries and has operations in 12 countries in Latin America. It was created through a joint venture between Promon S.A. and Logicalis Group Limited, a British company."
  },
  {
    name: "PHL",
    background: "#54565A",
    color: "#fff",
    title: "PHL Investimentos",
    desc: "In FY 2024, in order to strengthen and diversify its operations, Promon S.A. announced the creation of two more companies. PHL Investimentos was established to  foster  synergy between these new businesses and Promon Engenharia."
  },
  {
    name: "promon",
    background: "#E04403",
    color: "#fff",
    title: "Promon Engenharia",
    desc: "This company focuses on the engineering and management market across the energy, infrastructure and logistics, mining and metallurgy, chemical and petrochemical, manufacturing, and oil and gas industries."
  },
  {
    name: "forzy",
    background: "#E8A342",
    color: "#000",
    title: "Forzy",
    desc: "Dedicated to offering services and solutions focused on operational and energy efficiency and the digitalization of assets in the industrial, energy, infrastructure and real estate industries."
  },
  {
    name: "educacao-engenharia",
    color: "#fff",
    background: "#3F186F",
    title: "Education in Engineering",
    desc: "Still under development, this initiative aims to train engineers through an education platform."
  }
];

const modalsTextPt = [
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
    desc: "Empresa de soluções e serviços de Tecnologia da Informação e Comunicação (TIC) que atende setores diversos, com operação em 12 países da América Latina. Foi formada por uma <span class='text-italic'>joint venture</span> entre a Promon S.A. e a companhia britânica Logicalis Group Limited."
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
  this.contentDocument.getElementById("FPPS").addEventListener("click", () => openModal(0));
  this.contentDocument.getElementById("logicalis").addEventListener("click", () => openModal(1));
  this.contentDocument.getElementById("PHL").addEventListener("click", () => openModal(2));
  this.contentDocument.getElementById("promon").addEventListener("click", () => openModal(3));
  this.contentDocument.getElementById("forzy").addEventListener("click", () => openModal(4));
  this.contentDocument.getElementById("educacao-engenharia").addEventListener("click", () => openModal(5));
  document.getElementById("modal-close")?.addEventListener("click", (e) => closeModal());
  document.getElementById("modal")?.addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
});

const modalsText = verifyLanguage() == "en" ? modalsTextEn : modalsTextPt;

function verifyLanguage() {
  let language = "pt";
  const currentPath = window.location.pathname;
  if (currentPath.replaceAll("/", "") === "en") language = "en";
  return language;
}

function changeLanguage(language) {
  if (language === 'pt') {
    location.href = "/"
  } 

  if (language === 'en') {
    location.href = "/en"
  } 
}