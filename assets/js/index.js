<script>
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

document.getElementById("modal-1").addEventListener("click", () => openModal(0));
document.getElementById("modal-2").addEventListener("click", () => openModal(1));
document.getElementById("modal-3").addEventListener("click", () => openModal(2));
document.getElementById("modal-4").addEventListener("click", () => openModal(3));
document.getElementById("modal-5").addEventListener("click", () => openModal(4));
document.getElementById("modal-6").addEventListener("click", () => openModal(5));

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});
</script>