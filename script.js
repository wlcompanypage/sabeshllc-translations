// ---------- Data ----------
const FLOATING = ["English", "Español", "中文", "العربية", "Français", "日本語", "Deutsch", "한국어"];

const TRUST = [
  { icon: "🌐", label: "100+ Languages" },
  { icon: "✅", label: "Certified Translators" },
  { icon: "⚡", label: "Fast Delivery" },
  { icon: "📍", label: "Worldwide Service" },
];

const SERVICES = [
  { icon: "📄", title: "Document Translation", description: "Any document, any format, translated with precision and care." },
  { icon: "✅", title: "Certified Translation", description: "Officially certified translations accepted by USCIS, courts and agencies worldwide." },
  { icon: "⚖️", title: "Legal Translation", description: "Precise translation of contracts, court filings and legal correspondence by specialists." },
  { icon: "🩺", title: "Medical Translation", description: "Accurate medical records, clinical trials and pharmaceutical documents." },
  { icon: "⚙️", title: "Technical Translation", description: "Manuals and engineering documents translated with industry-precise terminology." },
  { icon: "🏢", title: "Business Documents", description: "Presentations and corporate communications translated for international success." },
  { icon: "🌍", title: "Website Localization", description: "Full website and software localization adapting tone, culture and SEO." },
  { icon: "✈️", title: "Immigration Documents", description: "Birth, marriage and identity documents translated and certified for applications." },
];

const LANGUAGES = [
  { name: "English", flag: "🇬🇧" }, { name: "Spanish", flag: "🇪🇸" },
  { name: "French", flag: "🇫🇷" }, { name: "German", flag: "🇩🇪" },
  { name: "Italian", flag: "🇮🇹" }, { name: "Portuguese", flag: "🇵🇹" },
  { name: "Dutch", flag: "🇳🇱" }, { name: "Russian", flag: "🇷🇺" },
  { name: "Ukrainian", flag: "🇺🇦" }, { name: "Polish", flag: "🇵🇱" },
  { name: "Turkish", flag: "🇹🇷" }, { name: "Arabic", flag: "🇸🇦" },
  { name: "Hebrew", flag: "🇮🇱" }, { name: "Chinese", flag: "🇨🇳" },
  { name: "Japanese", flag: "🇯🇵" }, { name: "Korean", flag: "🇰🇷" },
];

const STATS = [
  { value: 1000, suffix: "+", label: "Documents Translated" },
  { value: 100, suffix: "+", label: "Languages" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
];

const TESTIMONIALS = [
  { name: "Maria González", role: "Immigration Applicant", quote: "My USCIS documents were translated and certified within 24 hours. Flawless and accepted without any issues.", initials: "MG" },
  { name: "David Chen", role: "Legal Counsel, Apex Law", quote: "The precision on our contracts was exceptional. SabeshLLC is now our go-to partner for all legal translations.", initials: "DC" },
  { name: "Aisha Rahman", role: "Marketing Director", quote: "They localized our entire website beautifully — the transcreation captured our brand voice perfectly.", initials: "AR" },
  { name: "Lukas Müller", role: "Medical Researcher", quote: "Accurate, fast and confidential. Our clinical trial documents were handled with real expertise.", initials: "LM" },
];

const FAQS = [
  { q: "How long does translation take?", a: "Standard documents are typically delivered within 24–48 hours. Express and same-day options are available for urgent requests." },
  { q: "Do you provide certified translations?", a: "Yes. We provide certified translations accepted by USCIS, courts, universities and government agencies, including a signed certificate of accuracy." },
  { q: "How many languages do you support?", a: "We translate in over 100 languages using native-speaking, professional linguists across the world." },
  { q: "Are my documents confidential?", a: "Absolutely. Every project is protected by strict NDAs and bank-grade security." },
  { q: "How do I submit files?", a: "Upload them through our contact form. We accept PDF, Word, images and most common formats." },
];

// ---------- Render ----------
const $ = (sel) => document.querySelector(sel);

$("#floatingWords").innerHTML = FLOATING.map((w, i) => {
  const top = 15 + ((i * 11) % 70);
  const left = (i % 2 === 0 ? 6 : 80) + (i % 3) * 4;
  return `<span style="top:${top}%;left:${left}%;animation-delay:${i * 0.7}s">${w}</span>`;
}).join("");

$("#trustGrid").innerHTML = TRUST.map((t, i) =>
  `<div class="trust-item reveal" data-delay="${i * 100}"><span class="icon">${t.icon}</span><span>${t.label}</span></div>`
).join("");

$("#servicesGrid").innerHTML = SERVICES.map((s, i) =>
  `<div class="card reveal" data-delay="${(i % 4) * 80}"><span class="card-icon">${s.icon}</span><h3>${s.title}</h3><p>${s.description}</p></div>`
).join("");

$("#langGrid").innerHTML = LANGUAGES.map((l, i) =>
  `<div class="lang-item reveal" data-delay="${(i % 4) * 60}"><span class="flag">${l.flag}</span><span>${l.name}</span></div>`
).join("");

$("#statsGrid").innerHTML = STATS.map((s, i) =>
  `<div class="reveal" data-delay="${i * 100}"><div class="stat-value" data-value="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div><div class="stat-label">${s.label}</div></div>`
).join("");

$("#testimonialGrid").innerHTML = TESTIMONIALS.map((t, i) =>
  `<figure class="testimonial reveal" data-delay="${(i % 2) * 100}"><div class="quote-mark">&ldquo;</div><blockquote>${t.quote}</blockquote><figcaption><span class="avatar">${t.initials}</span><span><span class="name">${t.name}</span><br><span class="role">${t.role}</span></span></figcaption></figure>`
).join("");

$("#faqList").innerHTML = FAQS.map((f) =>
  `<div class="faq-item"><button class="faq-q">${f.q}</button><div class="faq-a"><p>${f.a}</p></div></div>`
).join("");

$("#year").textContent = new Date().getFullYear();

// ---------- FAQ accordion ----------
document.querySelectorAll(".faq-item").forEach((item) => {
  item.querySelector(".faq-q").addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// ---------- Theme toggle ----------
const themeToggle = $("#themeToggle");
const applyTheme = (dark) => {
  document.body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
};
applyTheme(localStorage.getItem("theme") === "dark");
themeToggle.addEventListener("click", () => applyTheme(!document.body.classList.contains("dark")));

// ---------- Mobile menu ----------
const mobileNav = $("#mobileNav");
$("#hamburger").addEventListener("click", () => mobileNav.classList.toggle("open"));
mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobileNav.classList.remove("open")));

// ---------- Quote calculator ----------
const calcQuote = () => {
  const pages = Math.max(1, parseInt($("#pages").value) || 1);
  const base = 25;
  const total = base * pages * parseFloat($("#serviceType").value) * parseFloat($("#urgency").value);
  $("#quoteTotal").textContent = "$" + total.toFixed(2);
};
["#pages", "#serviceType", "#urgency"].forEach((id) => $(id).addEventListener("input", calcQuote));
calcQuote();

// ---------- Invoice PDF generation & WhatsApp flow ----------
const getValue = (sel) => $(sel)?.value || "";

function populateInvoiceTemplate() {
  const name = getValue('#clientName');
  const email = getValue('#clientEmail');
  const phone = getValue('#clientPhone');
  const address = getValue('#clientAddress');
  const pages = Math.max(1, parseInt(getValue('#pages')) || 1);
  const serviceMultiplier = parseFloat(getValue('#serviceType')) || 1;
  const urgencyMultiplier = parseFloat(getValue('#urgency')) || 1;
  const base = 25;
  const unitPrice = base * serviceMultiplier;
  const subtotal = unitPrice * pages;
  const total = subtotal * urgencyMultiplier;

  const meta = `Cliente: ${name || '-'}<br/>Email: ${email || '-'} • Tel: ${phone || '-'}<br/>Dirección: ${address || '-'}<br/>Fecha: ${new Date().toLocaleString()}`;
  $('#invoiceMeta').innerHTML = meta;

  const items = `<tr><td style="padding:8px;border-bottom:1px solid #eee">Traducción (${pages} páginas)</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">${pages}</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">$${unitPrice.toFixed(2)}</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">$${subtotal.toFixed(2)}</td></tr>`;
  $('#invoiceItems').innerHTML = items;

  $('#invSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  $('#invUrgency').textContent = `${urgencyMultiplier}x`;
  $('#invTotal').textContent = `$${total.toFixed(2)}`;

  return {
    name, email, phone, address, pages, unitPrice, subtotal, total
  };
}

const WHATSAPP_NUMBER = '+12674088233';

function sendQuoteByWhatsApp() {
  const data = populateInvoiceTemplate();
  const message = `Hola, necesito seguir con la cotización:\n\nNombre: ${data.name || '-'}\nEmail: ${data.email || '-'}\nTeléfono: ${data.phone || '-'}\nDirección: ${data.address || '-'}\nPáginas: ${data.pages}\nTipo de servicio: ${$('#serviceType').selectedOptions[0].text}\nUrgencia: ${$('#urgency').selectedOptions[0].text}\nTotal estimado: $${data.total.toFixed(2)}`;
  const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function sendSupportByWhatsApp() {
  const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const message = "Hola, necesito ayuda de soporte o atención al cliente con SabeshLLC. ¿Podrían asistirme, por favor?";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

$('#requestQuoteBtn').addEventListener('click', (e) => {
  e.preventDefault();
  sendQuoteByWhatsApp();
});

// ---------- Chat widget ----------
const chatPanel = $("#chatPanel");
const chatSuggestions = $("#chatSuggestions");
const chatMessages = $("#chatMessages");
const chatInput = $("#chatInput");
const chatForm = $("#chatForm");
const chatClose = $("#chatClose");
let chatOpened = false;

const SUGGESTIONS = [
  "¿Cómo calculo una cotización?",
  "¿Qué servicios ofrecen?",
  "¿Con qué idiomas trabajan?",
  "¿Cómo contacto a SabeshLLC?",
  "¿Qué es el servicio certificado?"
];

const addChatMessage = (text, sender) => {
  const message = document.createElement("div");
  message.className = `chat-message ${sender}`;
  message.innerHTML = `<div class="chat-bubble">${text}</div>`;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const renderSuggestions = () => {
  chatSuggestions.innerHTML = SUGGESTIONS.map((suggestion) =>
    `<button type="button" class="chat-suggestion">${suggestion}</button>`
  ).join("");
};

const handleSuggestion = (question) => {
  addChatMessage(question, "user");
  const response = getChatResponse(question);
  addChatMessage(response.text, "bot");
  if (response.target) {
    setTimeout(() => scrollToSection(response.target), 200);
  }
};

const openChat = () => {
  chatPanel.classList.add("open");
  chatPanel.setAttribute("aria-hidden", "false");
  renderSuggestions();
  if (!chatOpened) {
    chatOpened = true;
    addChatMessage("¡Hola! Soy el asistente virtual de SabeshLLC. Pregúntame sobre servicios, cotizaciones, idiomas o cómo usar la página.", "bot");
    addChatMessage("Puedes tocar una pregunta sugerida para obtener una respuesta rápida.", "bot");
  }
  chatInput.focus();
};

const closeChat = () => {
  chatPanel.classList.remove("open");
  chatPanel.setAttribute("aria-hidden", "true");
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const getChatResponse = (query) => {
  const text = query.toLowerCase();
  const serviceNames = SERVICES.map((s) => s.title).join(", ");
  const languageNames = LANGUAGES.slice(0, 10).map((l) => l.name).join(", ");
  const faqText = FAQS.map((f) => `- ${f.q}: ${f.a}`).join("\n");

  if (/(cotiz|precios|precio|costo|quote|presupuest|estimar|tarifa|páginas|pages|urgencia|express|same day|mismo día)/i.test(text)) {
    return {
      text: "La calculadora de cotización funciona con tres campos: número de páginas, tipo de servicio y urgencia. El total se calcula automáticamente y puedes solicitarlo por WhatsApp haciendo clic en Request This Quote.",
      target: "quote"
    };
  }

  if (/(servicio|servicios|documento|documentos|legal|médic|medical|certific|certified|traducción|traducciones|translation|localizaci[oó]n|website|immigration)/i.test(text)) {
    return {
      text: `Ofrecemos estos servicios: ${serviceNames}. Para más detalles, ve a la sección "What We Do" en la página.`,
      target: "services"
    };
  }

  if (/(idioma|idiomas|languages|lengua|lenguas|español|english|franc[eé]s|deutsch|中文|عربية|portugu[eú]s|italiano|ruso|polaco|turco|coreano|japonés)/i.test(text)) {
    return {
      text: `Trabajamos con más de 100 idiomas. Algunos ejemplos son: ${languageNames}. Revisa la sección "Languages" para ver nuestra lista completa.`,
      target: "languages"
    };
  }

  if (/(faq|pregunta|preguntas|duda|preguntar|preguntar|ayuda|soporte|support)/i.test(text)) {
    return {
      text: `Estas son algunas respuestas frecuentes:\n${faqText}\nPuedes abrir la sección FAQ para leer todas las preguntas frecuentes.`,
      target: "faq"
    };
  }

  if (/(contacto|contactar|email|correo|whatsapp|tel|tel[eé]fono|phone|telefono|dirección|address|contact us)/i.test(text)) {
    return {
      text: "Puedes escribir a info@sabeshllc.com, llamar al +1 (267) 408-8233 o usar el botón Request Free Quote en la sección de contacto.",
      target: "contact"
    };
  }

  if (/(an[oñ]os|experiencia|equipo|mision|misión|empresa|SabeshLLC|nosotros|about|quién|quien)/i.test(text)) {
    return {
      text: "SabeshLLC Translations es una empresa global de servicios de traducción profesional, con traducciones certificadas, legales, médicas y de sitios web para más de 100 idiomas.",
      target: "about"
    };
  }

  if (/(página|sitio|usar|navegar|cómo funciona|como funciona|inicio|home|secciones)/i.test(text)) {
    return {
      text: "Navega con el menú superior: About, Services, Languages, Quote y FAQ. También puedes usar este chat para preguntar directamente sobre cualquiera de esas secciones.",
      target: null
    };
  }

  if (text.length < 3) {
    return { text: "Escribe tu pregunta en una frase corta, por ejemplo: ¿Cómo cotizo un documento?", target: null };
  }

  return {
    text: "Puedo responder preguntas sobre esta página: servicio, cotizaciones, idiomas, FAQ, contacto y cómo usar el sitio. Escríbeme algo como '¿Qué tipos de traducción tienen?' o '¿Cómo contacto a SabeshLLC?'.",
    target: null
  };
};

$("#chatWidget").addEventListener("click", sendSupportByWhatsApp);
chatClose.addEventListener("click", closeChat);
chatSuggestions.addEventListener("click", (event) => {
  if (event.target.matches(".chat-suggestion")) {
    handleSuggestion(event.target.textContent);
  }
});
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = chatInput.value.trim();
  if (!value) return;
  addChatMessage(value, "user");
  chatInput.value = "";
  const response = getChatResponse(value);
  addChatMessage(response.text, "bot");
  if (response.target) {
    setTimeout(() => scrollToSection(response.target), 200);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatPanel.classList.contains("open")) {
    closeChat();
  }
});

// ---------- Scroll reveal + counters ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const delay = parseInt(el.dataset.delay) || 0;
    setTimeout(() => el.classList.add("visible"), delay);
    el.querySelectorAll?.(".stat-value").forEach(animateCounter);
    if (el.classList.contains("stat-value")) animateCounter(el);
    observer.unobserve(el);
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function animateCounter(el) {
  const target = parseInt(el.dataset.value);
  const suffix = el.dataset.suffix || "";
  const duration = 1600;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
