// templates JS simples
const templates = {
  home: `
    <section>
      <h2>Bem-vindo à ONG Patinha Amiga 🐾</h2>
      <p>Trabalhamos com amor para cuidar de animais em situação de abandono.</p>
    </section>
  `,
  projetos: `
    <section>
      <h2>Projetos Sociais</h2>
      <div class="cards">
        <div class="card">Resgate de rua</div>
        <div class="card">Adoção responsável</div>
        <div class="card">Educação animal</div>
      </div>
    </section>
  `,
  cadastro: `
    <section>
      <h2>Cadastro de Voluntário</h2>
      <form id="cadastroForm">
        <label>Nome:</label>
        <input type="text" id="nome" required>
        <label>Email:</label>
        <input type="email" id="email" required>
        <button type="submit">Enviar</button>
      </form>
    </section>
  `,
};

// função que troca o conteúdo da página
function navegar(hash) {
  const content = document.getElementById("content-index");
  const pagina = hash.replace("#", "") || "home";
  content.innerHTML = templates[pagina] || "<p>Página não encontrada 😿</p>";

  if (pagina === "cadastro") validarFormulario();
}

// evento de navegação
window.addEventListener("hashchange", () => navegar(location.hash));
window.addEventListener("load", () => navegar(location.hash));

function validarFormulario() {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");

    // limpa mensagens anteriores
    document.querySelectorAll(".erro").forEach((el) => el.remove());

    let valido = true;

    if (nome.value.trim() === "") {
      mostrarErro(nome, "Por favor, preencha o nome.");
      valido = false;
    }

    if (!email.value.includes("@")) {
      mostrarErro(email, "Digite um e-mail válido.");
      valido = false;
    }

    if (valido) {
      alert("Cadastro enviado com sucesso!");
      form.reset();
    }
  });
}

function mostrarErro(campo, mensagem) {
  const aviso = document.createElement("span");
  aviso.className = "erro";
  aviso.textContent = mensagem;
  aviso.style.color = "red";
  aviso.style.fontSize = "12px";
  campo.insertAdjacentElement("afterend", aviso);
}
