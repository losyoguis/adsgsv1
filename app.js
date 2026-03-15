const creatives = [
  {
    id: 1,
    title: 'Referencia 1 · Beneficios cero inversión',
    file: 'assets/01_referencia_circular_cero_inversion.jpeg',
    phase: 'Caliente',
    awareness: 'Product Aware',
    angle: 'Beneficios visuales del modelo cero inversión',
    copy: 'Energía solar con cero inversión, pago contra funcionamiento, mantenimiento incluido y apropiación progresiva del sistema.',
    cta: 'Comunícate ya',
    priority: 'Media',
    insight: 'Sirve como benchmark visual: la promesa financiera está clara y el arte pone el beneficio racional en primer plano.'
  },
  {
    id: 2,
    title: 'Referencia 2 · Beneficios rectangulares',
    file: 'assets/02_referencia_beneficios_cero_inversion.jpeg',
    phase: 'Caliente',
    awareness: 'Product Aware',
    angle: 'Confianza y seguridad del modelo comercial',
    copy: 'Presenta beneficios concretos del servicio: no compromete endeudamiento, pagas solo cuando funciona y el sistema puede ser tuyo al finalizar el año 5.',
    cta: 'Comunícate ya',
    priority: 'Media',
    insight: 'Pieza sólida para cierre o remarketing porque la audiencia ya entiende la categoría y ahora compara condiciones.'
  },
  {
    id: 3,
    title: 'Referencia 3 · La decisión inteligente',
    file: 'assets/03_referencia_decision_inteligente_asesor.jpeg',
    phase: 'Tibio',
    awareness: 'Solution Aware',
    angle: 'La energía solar como decisión racional para el hogar',
    copy: 'Energía solar, la decisión inteligente para tu hogar: mantenimiento incluido, operación garantizada y propiedad del sistema al año 5.',
    cta: 'Solicitar propuesta',
    priority: 'Media',
    insight: 'Convierte interés en consideración: hay asesoría, claridad y beneficios sin tono demasiado agresivo.'
  },
  {
    id: 4,
    title: '¿Quieres saber si puedes tener energía solar en tu casa?',
    file: 'assets/04_puedes_tener_energia_solar.png',
    phase: 'Tibio',
    awareness: 'Solution Aware',
    angle: 'Facilidad de acceso y acompañamiento por WhatsApp',
    copy: 'Tener energía solar en casa puede ser más fácil de lo que imaginas. GSV analiza tu caso sin costo y te guía paso a paso.',
    cta: 'Escríbenos por WhatsApp',
    priority: 'Alta',
    insight: 'Muy efectiva para audiencia tibia: reduce incertidumbre y transforma curiosidad en conversación.'
  },
  {
    id: 5,
    title: '¿Tu energía puede costar menos?',
    file: 'assets/05_tu_energia_puede_costar_menos.png',
    phase: 'Frío',
    awareness: 'Unaware',
    angle: 'Comparación directa entre problema y alternativa',
    copy: 'Cada mes pagas energía, pero la pregunta clave es: ¿podrías estar pagando menos? Descubre si ya existe una alternativa mejor para tu hogar.',
    cta: 'Más información',
    priority: 'Media',
    insight: 'Pieza de apertura: la comparación visual ayuda a detener scroll sin exigir conocimiento previo de la solución.'
  },
  {
    id: 6,
    title: 'Sin más deudas',
    file: 'assets/06_sin_mas_deudas.png',
    phase: 'Frío',
    awareness: 'Problem Aware',
    angle: 'Ahorrar sin comprometer el flujo de caja',
    copy: 'Quieres pagar menos energía, pero no quieres asumir más deuda. Conoce una alternativa que te permite ahorrar sin ahogarte financieramente.',
    cta: 'Enviar mensaje',
    priority: 'Alta',
    insight: 'Rompe una de las objeciones más fuertes del mercado: el miedo al endeudamiento.'
  },
  {
    id: 7,
    title: 'CERO inversión',
    file: 'assets/07_cero_inversion.png',
    phase: 'Tibio',
    awareness: 'Solution Aware',
    angle: 'Acceso sin inversión inicial',
    copy: 'Accede a energía solar sin una gran inversión inicial. Empieza a cuidar tu bolsillo desde el comienzo y paga cuando el sistema esté funcionando.',
    cta: 'Enviar mensaje',
    priority: 'Alta',
    insight: 'Pieza clave de consideración: la promesa es simple, potente y fácil de defender ante dirección.'
  },
  {
    id: 8,
    title: '¿Pagas demasiado?',
    file: 'assets/08_pagas_demasiado.png',
    phase: 'Frío',
    awareness: 'Unaware',
    angle: 'Dolor silencioso por factura alta',
    copy: '¿Tu factura de energía sube y no sabes cuánto te está afectando? Descubre si existe una forma más inteligente de pagar menos electricidad.',
    cta: 'Más información',
    priority: 'Alta',
    insight: 'Muy buen anuncio de top of funnel: activa identificación inmediata y prepara el terreno para la solución.'
  },
  {
    id: 9,
    title: 'Olvídate del costo alto de la luz',
    file: 'assets/09_olvidate_del_costo_alto.png',
    phase: 'Frío',
    awareness: 'Problem Aware',
    angle: 'Salir del dolor económico mensual',
    copy: 'Olvídate del costo alto de la luz y empieza a construir un ahorro más estable con energía solar. Menos presión mensual, más tranquilidad para tu hogar.',
    cta: 'Cotiza sin compromiso',
    priority: 'Media',
    insight: 'Combina tensión con alivio: ideal para usuarios que ya sienten el problema pero aún no comparan proveedores.'
  },
  {
    id: 10,
    title: '¿Pagando demasiado en tu recibo de luz?',
    file: 'assets/10_pagando_demasiado_recibo.png',
    phase: 'Frío',
    awareness: 'Problem Aware',
    angle: 'Urgencia económica con llamada al cambio',
    copy: 'Si tu recibo de luz ya está fuera de control, da el paso hacia una opción que te permita ahorrar y ganar estabilidad.',
    cta: 'Escríbenos ahora',
    priority: 'Alta',
    insight: 'La cifra grande y el tono urgente empujan a la acción. Útil para audiencias sensibles al gasto.'
  },
  {
    id: 11,
    title: 'La factura sí pesa',
    file: 'assets/11_la_factura_si_pesa.png',
    phase: 'Frío',
    awareness: 'Problem Aware',
    angle: 'Presión financiera familiar',
    copy: 'Cuando la factura de energía se convierte en una carga, afecta la tranquilidad del hogar. Hoy existen formas de reducir esa presión sin comprometer tus finanzas.',
    cta: 'Solicitar información',
    priority: 'Alta',
    insight: 'Apela a la emoción familiar; ideal para socializar el impacto humano, no solo el financiero.'
  },
  {
    id: 12,
    title: '¡Ahorra dinero, pásate a energía solar!',
    file: 'assets/12_ahorra_dinero_pasate.png',
    phase: 'Caliente',
    awareness: 'Most Aware',
    angle: 'Cierre agresivo orientado a dinero',
    copy: 'Convierte tu factura en ahorro. Reduce costos, entra a energía solar sin inversión inicial y empieza a ver beneficios desde el primer mes.',
    cta: 'Obtén una evaluación gratuita',
    priority: 'Alta',
    insight: 'Recomendada para remarketing comercial. Habla directamente en lenguaje de dinero y retorno.'
  },
  {
    id: 13,
    title: 'Tu reto / Nuestra solución',
    file: 'assets/13_tu_reto_nuestra_solucion.png',
    phase: 'Frío',
    awareness: 'Problem Aware',
    angle: 'Resolver el alto costo de la luz',
    copy: 'Tu reto es controlar el alto costo de la luz. La solución es convertir ese gasto en ahorro, estabilidad y energía limpia para el hogar.',
    cta: 'Evalúa sin costo tu hogar',
    priority: 'Media',
    insight: 'Muy útil en presentación ejecutiva porque explica con claridad el puente entre problema y propuesta de valor.'
  },
  {
    id: 14,
    title: 'Da el salto a la energía solar',
    file: 'assets/14_da_el_salto_energia_solar.png',
    phase: 'Tibio',
    awareness: 'Solution Aware',
    angle: 'Transformación del hogar con ahorro mensual',
    copy: 'Da el salto a la energía solar y empieza a ahorrar todos los meses. Haz tu hogar más eficiente, sostenible y rentable.',
    cta: 'Evaluación gratuita por WhatsApp',
    priority: 'Media',
    insight: 'Pieza de transición: ya no vende solo dolor, vende una nueva realidad posible.'
  },
  {
    id: 15,
    title: 'Energía solar que funciona para ti',
    file: 'assets/15_energia_solar_funciona_para_ti.png',
    phase: 'Caliente',
    awareness: 'Product Aware',
    angle: 'Seguridad, funcionamiento real y beneficios tangibles',
    copy: 'Reduce tu factura, accede sin inversión inicial y paga solo cuando el sistema funcione. Una solución diseñada para darte ahorro real y confianza.',
    cta: 'Escríbenos ahora',
    priority: 'Alta',
    insight: 'Excelente para cierre porque responde a la pregunta crítica: ¿funciona de verdad para mí?'
  },
  {
    id: 16,
    title: 'Toma el control de tu energía',
    file: 'assets/16_toma_el_control_tu_energia.png',
    phase: 'Caliente',
    awareness: 'Product Aware',
    angle: 'Control, tranquilidad y respaldo',
    copy: 'Ahorra, planea y vive con más tranquilidad. Con GSV puedes tomar el control de tu energía con respaldo, monitoreo y propiedad a largo plazo.',
    cta: 'Escríbenos ahora',
    priority: 'Media',
    insight: 'Aporta una narrativa más madura y estratégica; ideal para un buyer que compara por control y confiabilidad.'
  },
  {
    id: 17,
    title: 'Ahorra, disfruta y transforma tu hogar',
    file: 'assets/17_ahorra_disfruta_transforma_tu_hogar.png',
    phase: 'Caliente',
    awareness: 'Product Aware',
    angle: 'Bienestar familiar + ahorro real',
    copy: 'Reduce tu factura, paga solo si el sistema funciona y conviértete en propietario de tu energía. Ahorro y tranquilidad para toda la familia.',
    cta: 'WhatsApp',
    priority: 'Media',
    insight: 'Muy valiosa para remarketing emocional: la familia se convierte en argumento de decisión.'
  },
  {
    id: 18,
    title: 'La decisión inteligente',
    file: 'assets/18_la_decision_inteligente.png',
    phase: 'Tibio',
    awareness: 'Solution Aware',
    angle: 'Energía solar como decisión inteligente de hogar',
    copy: 'La energía solar puede ser una decisión inteligente cuando buscas ahorro, estabilidad y tranquilidad sin descapitalizarte.',
    cta: 'Solicitar evaluación',
    priority: 'Media',
    insight: 'Pieza amable y aspiracional: ideal para públicos que ya entienden la categoría pero aún no toman decisión.'
  },
  {
    id: 19,
    title: 'Deja de pagar de más por tu recibo de luz',
    file: 'assets/19_deja_de_pagar_de_mas.png',
    phase: 'Frío',
    awareness: 'Problem Aware',
    angle: 'Dolor económico directo y cambio de hábito',
    copy: 'Si sientes que estás pagando de más por tu recibo de luz, es momento de revisar una alternativa más inteligente. Cambiar a energía solar puede ayudarte a reducir ese impacto.',
    cta: 'Evaluación gratuita',
    priority: 'Alta',
    insight: 'Muy buena para captar atención con lenguaje simple, directo y altamente comercial.'
  },
  {
    id: 20,
    title: 'Solo una decisión puede hacer tu hogar más verde y económico',
    file: 'assets/20_hogar_mas_verde_economico.png',
    phase: 'Tibio',
    awareness: 'Solution Aware',
    angle: 'Tono ambiental con beneficio económico',
    copy: 'Haz que tu hogar sea más verde, más limpio y más económico. Una sola decisión puede acercarte a una energía responsable con el planeta y con tu bolsillo.',
    cta: 'Escríbenos ahora',
    priority: 'Media',
    insight: 'Introduce diversidad creativa desde el territorio ambiental, ideal para audiencias afines a sostenibilidad.'
  }
];

const phaseOrder = ['Frío', 'Tibio', 'Caliente'];
const awarenessOrder = ['Unaware', 'Problem Aware', 'Solution Aware', 'Product Aware', 'Most Aware'];

let activePhase = 'Todos';
let activeAwareness = 'Todos';
let filteredCreatives = [...creatives];
let currentIndex = 0;
let autoplay = null;

const elements = {
  totalPieces: document.getElementById('totalPieces'),
  awarenessStats: document.getElementById('awarenessStats'),
  phaseStats: document.getElementById('phaseStats'),
  phaseFilters: document.getElementById('phaseFilters'),
  awarenessFilters: document.getElementById('awarenessFilters'),
  postTitleTag: document.getElementById('postTitleTag'),
  postCopyPreview: document.getElementById('postCopyPreview'),
  mainImage: document.getElementById('mainImage'),
  detailIndex: document.getElementById('detailIndex'),
  detailTitle: document.getElementById('detailTitle'),
  metaTags: document.getElementById('metaTags'),
  detailAwareness: document.getElementById('detailAwareness'),
  detailAngle: document.getElementById('detailAngle'),
  detailCopy: document.getElementById('detailCopy'),
  detailCTA: document.getElementById('detailCTA'),
  boardInsight: document.getElementById('boardInsight'),
  reactionMeta: document.getElementById('reactionMeta'),
  thumbnailStrip: document.getElementById('thumbnailStrip'),
  matrixGrid: document.getElementById('matrixGrid'),
  activationColumns: document.getElementById('activationColumns'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  playBtn: document.getElementById('playBtn'),
  startPresentation: document.getElementById('startPresentation'),
  toggleBoardMode: document.getElementById('toggleBoardMode'),
  zoomBtn: document.getElementById('zoomBtn'),
  imageModal: document.getElementById('imageModal'),
  modalImage: document.getElementById('modalImage'),
  modalClose: document.getElementById('modalClose'),
  modalBackdrop: document.getElementById('modalBackdrop'),
  appShell: document.getElementById('appShell')
};

function countBy(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + 1;
    return acc;
  }, {});
}

function renderStatBars(container, labels, counts, total) {
  container.innerHTML = '';
  labels.forEach(label => {
    const value = counts[label] || 0;
    const row = document.createElement('div');
    row.className = 'stacked-row';
    row.innerHTML = `
      <div>
        <div style="display:flex;justify-content:space-between;gap:12px;margin-bottom:6px;">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
        <div class="bar" style="--fill:${(value / total) * 100}%"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

function createChips() {
  const phaseValues = ['Todos', ...phaseOrder];
  const awarenessValues = ['Todos', ...awarenessOrder];

  elements.phaseFilters.innerHTML = '';
  elements.awarenessFilters.innerHTML = '';

  phaseValues.forEach(value => {
    const btn = document.createElement('button');
    btn.className = `chip ${value === activePhase ? 'active' : ''}`;
    btn.textContent = value;
    btn.addEventListener('click', () => {
      activePhase = value;
      filterCreatives();
      createChips();
    });
    elements.phaseFilters.appendChild(btn);
  });

  awarenessValues.forEach(value => {
    const btn = document.createElement('button');
    btn.className = `chip ${value === activeAwareness ? 'active' : ''}`;
    btn.textContent = value;
    btn.addEventListener('click', () => {
      activeAwareness = value;
      filterCreatives();
      createChips();
    });
    elements.awarenessFilters.appendChild(btn);
  });
}

function filterCreatives() {
  filteredCreatives = creatives.filter(item => {
    const phaseMatch = activePhase === 'Todos' || item.phase === activePhase;
    const awarenessMatch = activeAwareness === 'Todos' || item.awareness === activeAwareness;
    return phaseMatch && awarenessMatch;
  });
  currentIndex = 0;
  renderCurrentCreative();
  renderThumbnails();
}

function getCurrentCreative() {
  return filteredCreatives[currentIndex] || filteredCreatives[0] || creatives[0];
}

function renderCurrentCreative() {
  const current = getCurrentCreative();
  if (!current) return;

  elements.postTitleTag.textContent = `${current.phase} · ${current.awareness}`;
  elements.postCopyPreview.textContent = current.copy;
  elements.mainImage.src = current.file;
  elements.mainImage.alt = current.title;
  elements.detailIndex.textContent = `${String(current.id).padStart(2, '0')} / ${String(creatives.length).padStart(2, '0')}`;
  elements.detailTitle.textContent = current.title;
  elements.detailAwareness.textContent = current.awareness;
  elements.detailAngle.textContent = current.angle;
  elements.detailCopy.textContent = current.copy;
  elements.detailCTA.textContent = current.cta;
  elements.boardInsight.textContent = current.insight;
  elements.reactionMeta.textContent = `${current.phase} · Prioridad ${current.priority}`;

  elements.metaTags.innerHTML = '';
  [current.phase, current.awareness, `Prioridad ${current.priority}`].forEach(tag => {
    const span = document.createElement('span');
    span.className = 'meta-tag';
    span.textContent = tag;
    elements.metaTags.appendChild(span);
  });

  document.querySelectorAll('.thumbnail-card').forEach(card => {
    card.classList.toggle('active', Number(card.dataset.id) === current.id);
  });
}

function renderThumbnails() {
  elements.thumbnailStrip.innerHTML = '';
  filteredCreatives.forEach(item => {
    const card = document.createElement('button');
    card.className = `thumbnail-card ${item.id === getCurrentCreative().id ? 'active' : ''}`;
    card.dataset.id = item.id;
    card.innerHTML = `
      <img src="${item.file}" alt="${item.title}" />
      <div class="thumb-meta">
        <strong>${String(item.id).padStart(2, '0')} · ${item.title}</strong>
        <span>${item.awareness}</span>
      </div>
    `;
    card.addEventListener('click', () => {
      currentIndex = filteredCreatives.findIndex(creative => creative.id === item.id);
      renderCurrentCreative();
    });
    elements.thumbnailStrip.appendChild(card);
  });
}

function nextCreative() {
  currentIndex = (currentIndex + 1) % filteredCreatives.length;
  renderCurrentCreative();
}

function prevCreative() {
  currentIndex = (currentIndex - 1 + filteredCreatives.length) % filteredCreatives.length;
  renderCurrentCreative();
}

function toggleAutoplay() {
  if (autoplay) {
    clearInterval(autoplay);
    autoplay = null;
    elements.playBtn.classList.remove('active');
    elements.playBtn.textContent = '▶';
  } else {
    autoplay = setInterval(nextCreative, 5000);
    elements.playBtn.classList.add('active');
    elements.playBtn.textContent = '❚❚';
  }
}

function renderMatrix() {
  elements.matrixGrid.innerHTML = '';
  creatives.forEach(item => {
    const card = document.createElement('article');
    card.className = 'matrix-card';
    card.innerHTML = `
      <img src="${item.file}" alt="${item.title}" />
      <div class="matrix-body">
        <div class="matrix-meta">
          <span>${item.awareness}</span>
          <span>${item.phase}</span>
          <span class="priority ${item.priority === 'Alta' ? 'high' : 'medium'}">${item.priority}</span>
        </div>
        <h4>${String(item.id).padStart(2, '0')} · ${item.title}</h4>
        <p><strong>Ángulo:</strong> ${item.angle}</p>
        <button class="matrix-cta">${item.cta}</button>
      </div>
    `;
    card.addEventListener('click', () => {
      activePhase = 'Todos';
      activeAwareness = 'Todos';
      filteredCreatives = [...creatives];
      currentIndex = creatives.findIndex(creative => creative.id === item.id);
      createChips();
      renderThumbnails();
      renderCurrentCreative();
      document.getElementById('feed').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    elements.matrixGrid.appendChild(card);
  });
}

function renderActivationColumns() {
  const grouped = {
    'Frío': creatives.filter(item => item.phase === 'Frío'),
    'Tibio': creatives.filter(item => item.phase === 'Tibio'),
    'Caliente': creatives.filter(item => item.phase === 'Caliente')
  };

  elements.activationColumns.innerHTML = '';
  Object.entries(grouped).forEach(([phase, items]) => {
    const column = document.createElement('article');
    column.className = 'activation-column';
    column.innerHTML = `<h4>${phase}</h4><div class="activation-list"></div>`;
    const list = column.querySelector('.activation-list');

    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'activation-item';
      div.innerHTML = `
        <strong>${String(item.id).padStart(2, '0')} · ${item.title}</strong>
        <span>${item.awareness} · ${item.angle}</span>
      `;
      list.appendChild(div);
    });

    elements.activationColumns.appendChild(column);
  });
}

function toggleBoardMode() {
  elements.appShell.classList.toggle('board-mode');
}

function openModal() {
  const current = getCurrentCreative();
  elements.modalImage.src = current.file;
  elements.modalImage.alt = current.title;
  elements.imageModal.classList.add('open');
  elements.imageModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  elements.imageModal.classList.remove('open');
  elements.imageModal.setAttribute('aria-hidden', 'true');
}

function init() {
  elements.totalPieces.textContent = creatives.length;
  const awarenessCounts = countBy(creatives, 'awareness');
  const phaseCounts = countBy(creatives, 'phase');
  renderStatBars(elements.awarenessStats, awarenessOrder, awarenessCounts, creatives.length);
  renderStatBars(elements.phaseStats, phaseOrder, phaseCounts, creatives.length);

  createChips();
  renderMatrix();
  renderActivationColumns();
  renderThumbnails();
  renderCurrentCreative();

  elements.prevBtn.addEventListener('click', prevCreative);
  elements.nextBtn.addEventListener('click', nextCreative);
  elements.playBtn.addEventListener('click', toggleAutoplay);
  elements.startPresentation.addEventListener('click', () => {
    document.getElementById('feed').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  elements.toggleBoardMode.addEventListener('click', toggleBoardMode);
  elements.zoomBtn.addEventListener('click', openModal);
  elements.modalClose.addEventListener('click', closeModal);
  elements.modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') nextCreative();
    if (event.key === 'ArrowLeft') prevCreative();
    if (event.key.toLowerCase() === 'f') toggleBoardMode();
    if (event.code === 'Space') {
      event.preventDefault();
      toggleAutoplay();
    }
    if (event.key === 'Escape') closeModal();
  });
}

init();
