/* ============================================================
   PORTFÓLIO PESSOAL — script.js
   JavaScript para todas as interações
   ============================================================ */

// ─── MENU ───────────────────

(function initNavbar() {
  const page     = location.pathname.split('/').pop() || 'index.html';
  const links    = document.querySelectorAll('.nav-links a');
  const navbar   = document.querySelector('.navbar');
  const toggle   = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Marca link ativo
  links.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'sobre.html')) {
      link.classList.add('active');
    }
  });

  // Sombra ao rolar
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Hamburguer (mobile)
  if (toggle) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Fecha ao clicar em link
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // Fecha ao clicar fora
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target)) {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }
})();


// ─── SOBRE ────────────────────────────────────────

(function initSobre() {
  var tags = document.querySelectorAll('.skill-tag');
  if (!tags.length) return;

  tags.forEach(function(tag, i) {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(10px)';
    tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setTimeout(function() {
      tag.style.opacity = '1';
      tag.style.transform = 'translateY(0)';
    }, 400 + i * 60);
  });
})();


// ─── PORTFÓLIO ───────────────────────────────────────

(function initPortfolio() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards      = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var categoria = btn.dataset.filter;

      // Atualiza botão ativo
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

      // Filtra cards
      cards.forEach(function(card) {
        var cats = card.dataset.categoria || '';
        if (categoria === 'todos' || cats.includes(categoria)) {
          card.classList.remove('hidden');
          // Reinicia animação
          card.style.animation = 'none';
          void card.offsetWidth; // reflow
          card.style.animation = '';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();


// ─── CONTATO ──────────────────────────────────────

(function initContato() {
  var form = document.getElementById('form-contato');
  if (!form) return;

  // Helpers
  function showError(input, msg) {
    input.classList.add('error');
    var errEl = input.parentElement.querySelector('.error-msg');
    if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }
  }

  function clearError(input) {
    input.classList.remove('error');
    var errEl = input.parentElement.querySelector('.error-msg');
    if (errEl) { errEl.classList.remove('visible'); }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(tel) {
    var digits = tel.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 11;
  }

  // Validação em tempo real
  var inputNome    = document.getElementById('nome');
  var inputEmail   = document.getElementById('email');
  var inputTelefone= document.getElementById('telefone');
  var inputAssunto = document.getElementById('assunto');
  var inputMensagem= document.getElementById('mensagem');

  // Máscara de telefone
  if (inputTelefone) {
    inputTelefone.addEventListener('input', function() {
      var v = inputTelefone.value.replace(/\D/g, '').slice(0, 11);
      if (v.length <= 10) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else {
        v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      }
      inputTelefone.value = v;
    });
  }

  // Limpa erros ao digitar
  [inputNome, inputEmail, inputTelefone, inputAssunto, inputMensagem].forEach(function(el) {
    if (!el) return;
    el.addEventListener('input', function() { clearError(el); });
  });

  // Submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var valid = true;

    if (!inputNome || inputNome.value.trim().length < 2) {
      showError(inputNome, 'Informe seu nome completo (mínimo 2 caracteres).');
      valid = false;
    }

    if (!inputEmail || !isValidEmail(inputEmail.value.trim())) {
      showError(inputEmail, 'Informe um e-mail válido.');
      valid = false;
    }

    if (inputTelefone && inputTelefone.value.trim() !== '' && !isValidPhone(inputTelefone.value)) {
      showError(inputTelefone, 'Telefone inválido. Ex: (11) 98765-4321');
      valid = false;
    }

    if (!inputAssunto || inputAssunto.value === '') {
      showError(inputAssunto, 'Selecione um assunto.');
      valid = false;
    }

    if (!inputMensagem || inputMensagem.value.trim().length < 10) {
      showError(inputMensagem, 'Escreva uma mensagem com ao menos 10 caracteres.');
      valid = false;
    }

    if (!valid) return;

    // Sucesso
    var formEl   = document.querySelector('.form-fields');
    var successEl= document.querySelector('.form-success');
    if (formEl)   formEl.style.display = 'none';
    if (successEl) successEl.classList.add('visible');
  });
})();
