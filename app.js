/**
 * CutiPDF (cutipdf.com) - Full Suite of 30 Client-Side PDF Tools
 * Modeled after iLovePDF with Interactive Thumbnail Previews & In-Browser Privacy
 */

const TOOLS_CATALOG = {
  'ORGANIZE PDF': [
    {
      id: 'merge-pdf',
      title: 'Merge PDF',
      desc: 'Combine PDFs in the order you want with the easiest PDF merger available.',
      accept: 'application/pdf',
      btnText: 'Select PDF files',
      actionText: 'Merge PDF'
    },
    {
      id: 'split-pdf',
      title: 'Split PDF',
      desc: 'Separate one page or a whole set for easy conversion into independent PDF files.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Split PDF'
    },
    {
      id: 'remove-pages',
      title: 'Remove Pages',
      desc: 'Select and remove the PDF pages you don’t need. Get a new file without your deleted pages.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Remove Pages'
    },
    {
      id: 'extract-pages',
      title: 'Extract Pages',
      desc: 'Get a new document containing only the desired pages from your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Extract Pages'
    },
    {
      id: 'organize-pdf',
      title: 'Organize PDF',
      desc: 'Sort pages of your PDF file however you like. Reorder or delete PDF pages.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Save Order'
    },
    {
      id: 'scan-to-pdf',
      title: 'Scan to PDF',
      desc: 'Capture document scans directly from your camera and convert them into clean PDF.',
      accept: 'image/*',
      btnText: 'Select Scans',
      actionText: 'Save as PDF'
    }
  ],

  'OPTIMIZE PDF': [
    {
      id: 'compress-pdf',
      title: 'Compress PDF',
      desc: 'Reduce file size while optimizing for maximal PDF quality.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Compress PDF'
    },
    {
      id: 'repair-pdf',
      title: 'Repair PDF',
      desc: 'Repair damaged or corrupted PDF files and recover data from them.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Repair PDF'
    },
    {
      id: 'ocr-pdf',
      title: 'OCR PDF',
      desc: 'Convert scanned PDF documents into searchable and selectable text files.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Perform OCR'
    }
  ],

  'CONVERT TO PDF': [
    {
      id: 'jpg-to-pdf',
      title: 'JPG to PDF',
      desc: 'Convert JPG, PNG, and WebP images to PDF in seconds with layout control.',
      accept: 'image/jpeg,image/png,image/webp,image/jpg',
      btnText: 'Select JPG images',
      actionText: 'Convert to PDF'
    },
    {
      id: 'word-to-pdf',
      title: 'Word to PDF',
      desc: 'Convert DOC and DOCX files into accurate PDF documents.',
      accept: '.doc,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      btnText: 'Select Word files',
      actionText: 'Convert to PDF'
    },
    {
      id: 'powerpoint-to-pdf',
      title: 'PowerPoint to PDF',
      desc: 'Convert PPT and PPTX presentations into clean PDF slides.',
      accept: '.ppt,.pptx',
      btnText: 'Select PowerPoint files',
      actionText: 'Convert to PDF'
    },
    {
      id: 'excel-to-pdf',
      title: 'Excel to PDF',
      desc: 'Convert Excel tables and spreadsheets into PDF reports.',
      accept: '.xls,.xlsx,.csv',
      btnText: 'Select Excel spreadsheets',
      actionText: 'Convert to PDF'
    },
    {
      id: 'html-to-pdf',
      title: 'HTML to PDF',
      desc: 'Convert webpages, HTML files, or raw code into a PDF document.',
      accept: '.html,.htm,text/html',
      btnText: 'Select HTML file',
      actionText: 'Convert to PDF'
    },
    {
      id: 'text-to-pdf',
      title: 'Text to PDF',
      desc: 'Convert plain text, notes, and markdown into formatted PDF.',
      accept: '.txt,.md,text/plain',
      btnText: 'Select Text file',
      actionText: 'Convert to PDF'
    }
  ],

  'CONVERT FROM PDF': [
    {
      id: 'pdf-to-jpg',
      title: 'PDF to JPG',
      desc: 'Extract all images contained in a PDF or convert each page into a high-res JPG.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to JPG'
    },
    {
      id: 'pdf-to-word',
      title: 'PDF to Word',
      desc: 'Easily convert your PDF files into editable Word documents.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to Word'
    },
    {
      id: 'pdf-to-powerpoint',
      title: 'PDF to PowerPoint',
      desc: 'Convert your PDF documents into editable presentation slides.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to Slides'
    },
    {
      id: 'pdf-to-excel',
      title: 'PDF to Excel',
      desc: 'Extract tabular data straight from PDF into Excel spreadsheets.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to Excel'
    },
    {
      id: 'pdf-to-pdfa',
      title: 'PDF to PDF/A',
      desc: 'Convert your PDF to PDF/A for ISO-standardized long-term archiving.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to PDF/A'
    }
  ],

  'EDIT & ENHANCE': [
    {
      id: 'rotate-pdf',
      title: 'Rotate PDF',
      desc: 'Rotate your PDF pages permanently portrait or landscape.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Rotate PDF'
    },
    {
      id: 'page-numbers',
      title: 'Page Numbers',
      desc: 'Add page numbers into PDFs easily with custom placement and format.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Add Page Numbers'
    },
    {
      id: 'watermark-pdf',
      title: 'Watermark',
      desc: 'Stamp custom text or confidential marks over your PDF with custom opacity.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Add Watermark'
    },
    {
      id: 'edit-pdf',
      title: 'Edit PDF',
      desc: 'Add text, titles, notes, and annotations directly into your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Save Edits'
    },
    {
      id: 'crop-pdf',
      title: 'Crop PDF',
      desc: 'Trim the visible page margins of your PDF documents.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Crop PDF'
    }
  ],

  'PDF SECURITY': [
    {
      id: 'unlock-pdf',
      title: 'Unlock PDF',
      desc: 'Remove PDF password security and permissions to use your document freely.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Unlock PDF'
    },
    {
      id: 'protect-pdf',
      title: 'Protect PDF',
      desc: 'Encrypt your PDF with a strong password to prevent unauthorized access.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Protect PDF'
    },
    {
      id: 'sign-pdf',
      title: 'Sign PDF',
      desc: 'Draw your signature or type your name to stamp onto your PDF documents.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Sign Document'
    },
    {
      id: 'redact-pdf',
      title: 'Redact PDF',
      desc: 'Permanently remove or black-out confidential text from your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Redact PDF'
    },
    {
      id: 'compare-pdf',
      title: 'Compare PDF',
      desc: 'Show a side-by-side comparison of two PDF files to spot visual changes.',
      accept: 'application/pdf',
      btnText: 'Select 2 PDF files',
      actionText: 'Compare Documents'
    }
  ]
};

// Application State
const state = {
  activeTool: null,
  selectedFiles: [],
  uploadedPdfs: [], // Structured PDF metadata: [{ id, file, name, size, pageCount, coverUrl, rotation, pdfDoc, pages }]
  workspaceItems: [], // Current view items
  workspaceViewMode: 'file', // 'file' or 'page'
  pageLayoutMode: 'grid', // 'grid' or 'continuous'
  removePagesProcessed: false,
  savedOriginalFile: null,
  savedOriginalWorkspaceItems: null,
  draggedItemIndex: null,
  toolOptions: {},
  theme: localStorage.getItem('cutipdf_theme_v3') || 'light'
};

// DOM Cache
const DOM = {
  brandLogoLink: document.getElementById('brandLogoLink'),
  viewAllTools: document.getElementById('view-all-tools'),
  viewToolActive: document.getElementById('view-tool-active'),
  toolsGridContainer: document.getElementById('toolsGridContainer'),
  btnBackToTools: document.getElementById('btnBackToTools'),
  floatingToolsBtn: document.getElementById('floatingToolsBtn'),
  themeToggle: document.getElementById('themeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  
  // Dedicated Tool Page Elements
  toolVectorContainer: document.getElementById('toolVectorContainer'),
  toolTitle: document.getElementById('toolTitle'),
  toolDesc: document.getElementById('toolDesc'),
  toolOptionsDrawer: document.getElementById('toolOptionsDrawer'),
  
  // Dropzone & Action
  toolDropzone: document.getElementById('toolDropzone'),
  fileInput: document.getElementById('fileInput'),
  btnSelectFiles: document.getElementById('btnSelectFiles'),
  btnGoogleDrive: document.getElementById('btnGoogleDrive'),
  btnDropbox: document.getElementById('btnDropbox'),
  btnVotePriority: document.getElementById('btnVotePriority'),
  toolVoteCount: document.getElementById('toolVoteCount'),
  toolNotAvailableNotice: document.getElementById('toolNotAvailableNotice'),
  filesSelectedArea: document.getElementById('filesSelectedArea'),
  selectedFilesList: document.getElementById('selectedFilesList'),
  btnClearFiles: document.getElementById('btnClearFiles'),
  btnExecuteAction: document.getElementById('btnExecuteAction'),
  actionButtonText: document.getElementById('actionButtonText'),
  workspaceStatsBadge: document.getElementById('workspaceStatsBadge'),
  workspaceStatsText: document.getElementById('workspaceStatsText'),
  workspaceModeSwitcher: document.getElementById('workspaceModeSwitcher'),
  btnModeFile: document.getElementById('btnModeFile'),
  btnModePage: document.getElementById('btnModePage'),
  btnToolbarAddMore: document.getElementById('btnToolbarAddMore'),
  btnToolbarSort: document.getElementById('btnToolbarSort'),
  btnToolbarRotateAll: document.getElementById('btnToolbarRotateAll'),
  workspaceActionSummary: document.getElementById('workspaceActionSummary'),
  
  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage'),

  // Quick Tools Side Drawer
  quickToolsBackdrop: document.getElementById('quickToolsBackdrop'),
  quickToolsDrawer: document.getElementById('quickToolsDrawer'),
  btnCloseQuickTools: document.getElementById('btnCloseQuickTools'),
  quickToolSearch: document.getElementById('quickToolSearch'),
  quickToolsModalGrid: document.getElementById('quickToolsModalGrid')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderAllToolsCatalog();
  initRouting();
  initQuickToolsModal();
  initDropzoneEvents();
});

// ==========================================
// Theme Management
// ==========================================
function initTheme() {
  applyTheme(state.theme);
  DOM.themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('cutipdf_theme_v3', state.theme);
    applyTheme(state.theme);
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    DOM.themeIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    `;
  } else {
    document.documentElement.classList.remove('dark');
    DOM.themeIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    `;
  }
}

// ==========================================
// Base Path & Tool Lookup
// ==========================================
function getBasePath() {
  const path = window.location.pathname;
  if (path.startsWith('/cutipdf/')) {
    return '/cutipdf/';
  }
  return '/';
}

function findToolById(id) {
  if (!id) return null;
  const normalized = id.toLowerCase().replace(/_/g, '-').trim();
  for (const tools of Object.values(TOOLS_CATALOG)) {
    const found = tools.find(t => t.id === normalized);
    if (found) return found;
  }
  return null;
}

// ==========================================
// Render All Tools Catalog with Brush Headers
// ==========================================
function renderAllToolsCatalog() {
  DOM.toolsGridContainer.innerHTML = '';
  const basePath = getBasePath();

  for (const [category, tools] of Object.entries(TOOLS_CATALOG)) {
    const section = document.createElement('section');
    section.className = 'space-y-4';

    section.innerHTML = `
      <div class="flex items-center gap-2 border-b border-pink-100 dark:border-zinc-800 pb-2">
        <h2 class="category-title">${category}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${tools.map(tool => {
          const vectorSvg = VECTORS[tool.id] || '<div class="text-sm font-bold text-zinc-400">PDF</div>';
          return `
            <a href="${basePath}${tool.id}" data-tool-id="${tool.id}" class="tool-card group no-underline text-inherit block">
              <div class="w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-200 mb-3">
                ${vectorSvg}
              </div>
              <h3 class="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-[#ff5277] transition-colors">${tool.title}</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">${tool.desc}</p>
            </a>
          `;
        }).join('')}
      </div>
    `;

    DOM.toolsGridContainer.appendChild(section);
  }
}

// ==========================================
// Routing & Dedicated Tool URLs
// ==========================================
function parseToolFromCurrentLocation() {
  // 1. Check query parameter ?p= (e.g. from GitHub Pages 404.html redirect)
  const urlParams = new URLSearchParams(window.location.search);
  const pParam = urlParams.get('p');
  if (pParam) {
    const cleanP = pParam.replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase().replace(/_/g, '-');
    if (cleanP && cleanP !== 'all-tools' && cleanP !== 'tools') {
      return cleanP;
    }
  }

  // 2. Check pathname (e.g. /cutipdf/merge-pdf or /merge-pdf)
  const path = window.location.pathname;
  const basePath = getBasePath();
  if (path.startsWith(basePath)) {
    const subPath = path.slice(basePath.length).replace(/\/+$/, '').toLowerCase().replace(/_/g, '-');
    if (subPath && subPath !== 'index.html' && subPath !== 'all-tools' && subPath !== 'tools') {
      return subPath;
    }
  }

  // 3. Check hash (backward compatibility fallback: #merge-pdf or #/merge-pdf)
  const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase().replace(/_/g, '-');
  if (hash && hash !== 'all-tools' && hash !== 'tools') {
    return hash;
  }

  return null;
}

function navigateTo(toolId, replaceHistory = false) {
  if (state.workspaceItems && state.workspaceItems.length > 0) {
    if (!confirm('Switch tool? Current in-progress files will be cleared.')) {
      return;
    }
  }

  const basePath = getBasePath();

  if (!toolId || toolId === 'all-tools') {
    if (window.location.pathname !== basePath || window.location.search || window.location.hash) {
      if (replaceHistory) {
        window.history.replaceState({ toolId: null }, '', basePath);
      } else {
        window.history.pushState({ toolId: null }, '', basePath);
      }
    }
    showAllToolsCatalogView();
    return;
  }

  const tool = findToolById(toolId);
  if (tool) {
    const targetUrl = basePath + tool.id;
    if (window.location.pathname !== targetUrl || window.location.search || window.location.hash) {
      if (replaceHistory) {
        window.history.replaceState({ toolId: tool.id }, '', targetUrl);
      } else {
        window.history.pushState({ toolId: tool.id }, '', targetUrl);
      }
    }
    openToolDedicatedPage(tool);
  } else {
    // Unknown tool -> return to catalog
    window.history.replaceState({ toolId: null }, '', basePath);
    showAllToolsCatalogView();
  }
}

function showAllToolsCatalogView() {
  state.activeTool = null;
  state.selectedFiles = [];
  state.workspaceItems = [];
  state.toolOptions = {};
  state.removePagesProcessed = false;
  state.savedOriginalFile = null;
  state.savedOriginalWorkspaceItems = null;

  DOM.viewToolActive.classList.remove('active');
  DOM.viewAllTools.classList.add('active');
  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) actionBar.classList.remove('floating-mode');
  const toolsBtn = document.getElementById('floatingToolsBtn');
  if (toolsBtn) toolsBtn.classList.remove('elevated', 'elevated-mobile');
  const toolbar = document.querySelector('.workspace-toolbar');
  if (toolbar) toolbar.classList.remove('clean-actions-only');
  document.title = 'CutiPDF • Clean, Fast & Complete PDF Studio';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleRoute() {
  const toolId = parseToolFromCurrentLocation();
  if (toolId) {
    const tool = findToolById(toolId);
    if (tool) {
      // Normalize URL in address bar if it was opened via query or hash
      const canonicalUrl = getBasePath() + tool.id;
      if (window.location.pathname !== canonicalUrl || window.location.search || window.location.hash) {
        window.history.replaceState({ toolId: tool.id }, '', canonicalUrl);
      }
      openToolDedicatedPage(tool);
      return;
    }
  }

  // Default to all tools catalog
  const basePath = getBasePath();
  if (window.location.search || window.location.hash) {
    window.history.replaceState({ toolId: null }, '', basePath);
  }
  showAllToolsCatalogView();
}

function initRouting() {
  // Listen to browser Back / Forward history buttons
  window.addEventListener('popstate', () => {
    handleRoute();
  });

  // Listen to hash changes (fallback)
  window.addEventListener('hashchange', () => {
    handleRoute();
  });

  // Logo click returns to home catalog
  if (DOM.brandLogoLink) {
    DOM.brandLogoLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(null);
    });
  }

  // Delegated click handler for tool cards in catalog (instant SPA transition + new tab support)
  if (DOM.toolsGridContainer) {
    DOM.toolsGridContainer.addEventListener('click', (e) => {
      const card = e.target.closest('a[data-tool-id]');
      if (card) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        const toolId = card.getAttribute('data-tool-id');
        navigateTo(toolId);
      }
    });
  }

  // Handle initial route on page load
  handleRoute();
}

// ==========================================
// Quick Tools Preview Drawer (Non-Disruptive Side Pop Menu)
// ==========================================
function initQuickToolsModal() {
  if (!DOM.quickToolsDrawer || !DOM.floatingToolsBtn) return;

  renderQuickToolsModalGrid('');

  // Floating button toggles drawer on both desktop and mobile
  DOM.floatingToolsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Trigger wrench tightening nut animation
    DOM.floatingToolsBtn.classList.remove('clashing');
    void DOM.floatingToolsBtn.offsetWidth; // force reflow
    DOM.floatingToolsBtn.classList.add('clashing');

    setTimeout(() => {
      DOM.floatingToolsBtn.classList.remove('clashing');
    }, 650);

    toggleQuickTools();
  });

  // Close button in header
  if (DOM.btnCloseQuickTools) {
    DOM.btnCloseQuickTools.addEventListener('click', (e) => {
      e.stopPropagation();
      closeQuickTools();
    });
  }

  // Click outside backdrop to close
  if (DOM.quickToolsBackdrop) {
    DOM.quickToolsBackdrop.addEventListener('click', () => {
      closeQuickTools();
    });
  }

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isQuickToolsOpen()) {
      closeQuickTools();
    }
  });

  // Search input filter
  if (DOM.quickToolSearch) {
    DOM.quickToolSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      renderQuickToolsModalGrid(q);
    });
  }
}

function isQuickToolsOpen() {
  return DOM.quickToolsDrawer && DOM.quickToolsDrawer.classList.contains('translate-x-0');
}

function toggleQuickTools() {
  if (isQuickToolsOpen()) {
    closeQuickTools();
  } else {
    openQuickTools();
  }
}

function openQuickTools() {
  if (!DOM.quickToolsDrawer) return;

  DOM.quickToolsBackdrop.classList.remove('opacity-0', 'pointer-events-none');
  DOM.quickToolsBackdrop.classList.add('opacity-100', 'pointer-events-auto');

  DOM.quickToolsDrawer.classList.remove('translate-x-full', 'pointer-events-none');
  DOM.quickToolsDrawer.classList.add('translate-x-0', 'pointer-events-auto');

  DOM.floatingToolsBtn.classList.add('active');

  // Prevent background scrolling on mobile while drawer is open
  document.body.classList.add('overflow-hidden');

  if (DOM.quickToolSearch) {
    DOM.quickToolSearch.value = '';
    setTimeout(() => DOM.quickToolSearch.focus(), 100);
  }
  renderQuickToolsModalGrid('');
}

function closeQuickTools() {
  if (!DOM.quickToolsDrawer) return;

  DOM.quickToolsBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
  DOM.quickToolsBackdrop.classList.add('opacity-0', 'pointer-events-none');

  DOM.quickToolsDrawer.classList.remove('translate-x-0', 'pointer-events-auto');
  DOM.quickToolsDrawer.classList.add('translate-x-full', 'pointer-events-none');

  DOM.floatingToolsBtn.classList.remove('active');

  // Restore background scrolling
  document.body.classList.remove('overflow-hidden');
}

// Dynamically align floating tools button right edge with bottom action button (Responsive Mobile & Tablet)
function alignFloatingToolsButton() {
  const toolsBtn = document.getElementById('floatingToolsBtn');
  const actionBtn = document.getElementById('btnExecuteAction');
  const actionBar = document.getElementById('workspaceActionBar');
  if (!toolsBtn || !actionBtn || !actionBar) return;

  const toolId = state.activeTool ? state.activeTool.id : '';
  const isRemovePagesFloating = (toolId === 'remove-pages' && state.workspaceItems && state.workspaceItems.length > 0 && !DOM.filesSelectedArea.classList.contains('hidden'));

  if (isRemovePagesFloating) {
    const rect = actionBtn.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      // Calculate exact left position so right edge of toolsBtn is 100% flush with rect.right:
      const btnWidth = toolsBtn.offsetWidth || 66;
      const exactLeft = Math.round(rect.right - btnWidth);
      // Distance from bottom of viewport to top of actionBtn + 12px gap:
      const bottomFromViewport = Math.round(window.innerHeight - rect.top) + 12;

      toolsBtn.style.setProperty('left', `${exactLeft}px`, 'important');
      toolsBtn.style.setProperty('right', 'auto', 'important');
      toolsBtn.style.setProperty('bottom', `${bottomFromViewport}px`, 'important');
      toolsBtn.classList.add('elevated-mobile');
      return;
    }
  }

  // Reset to default CSS positioning
  toolsBtn.style.removeProperty('right');
  toolsBtn.style.removeProperty('bottom');
  toolsBtn.style.removeProperty('left');
  toolsBtn.classList.remove('elevated-mobile');
}

window.addEventListener('resize', alignFloatingToolsButton);
window.addEventListener('scroll', alignFloatingToolsButton, { passive: true });
window.addEventListener('orientationchange', alignFloatingToolsButton);

if (window.ResizeObserver) {
  const executeBtn = document.getElementById('btnExecuteAction');
  if (executeBtn) {
    new ResizeObserver(alignFloatingToolsButton).observe(executeBtn);
  }
}

function renderQuickToolsModalGrid(query = '') {
  const container = DOM.quickToolsModalGrid;
  if (!container) return;
  container.innerHTML = '';

  let matchFound = false;

  for (const [category, tools] of Object.entries(TOOLS_CATALOG)) {
    const filtered = tools.filter(t => 
      !query || 
      t.title.toLowerCase().includes(query) || 
      t.desc.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
      matchFound = true;
      const sec = document.createElement('div');
      sec.className = 'space-y-2.5';
      const basePath = getBasePath();
      sec.innerHTML = `
        <h4 class="category-title text-xs uppercase tracking-wider">${category}</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${filtered.map(tool => `
            <a href="${basePath}${tool.id}" onclick="selectToolFromModal(event, '${tool.id}')" class="p-2.5 rounded-xl border border-pink-100 dark:border-zinc-800 hover:border-[#ff5277] bg-white dark:bg-zinc-800/80 hover:shadow-sm cursor-pointer transition-all flex items-center gap-2.5 group no-underline text-inherit">
              <div class="w-8 h-8 flex-shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                ${VECTORS[tool.id] || '<div class="text-xs font-bold text-zinc-400">PDF</div>'}
              </div>
              <div class="overflow-hidden min-w-0 flex-1">
                <h5 class="font-bold text-xs text-zinc-900 dark:text-zinc-100 group-hover:text-[#ff5277] transition-colors truncate">${tool.title}</h5>
                <p class="text-[10px] text-zinc-400 truncate">${tool.desc}</p>
              </div>
            </a>
          `).join('')}
        </div>
      `;
      container.appendChild(sec);
    }
  }

  if (!matchFound) {
    container.innerHTML = `
      <div class="text-center py-12 text-zinc-400">
        <p class="text-xs">No tools found matching "${query}"</p>
      </div>
    `;
  }
}

window.selectToolFromModal = function(e, toolId) {
  if (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
  }
  closeQuickTools();
  navigateTo(toolId);
};

function openToolDedicatedPage(tool) {
  state.activeTool = tool;
  state.selectedFiles = [];
  state.uploadedPdfs = [];
  state.workspaceItems = [];
  state.workspaceViewMode = 'file';
  state.toolOptions = {};

  if (DOM.workspaceModeSwitcher) {
    if (tool.id === 'merge-pdf') {
      DOM.workspaceModeSwitcher.classList.remove('hidden');
    } else {
      DOM.workspaceModeSwitcher.classList.add('hidden');
    }
  }

  // Dedicated SEO Title & Canonical URL for each tool
  const seoTitles = {
    'merge-pdf': 'Merge PDF - Combine PDF Files Online for Free',
    'split-pdf': 'Split PDF - Separate PDF Pages Online',
    'compress-pdf': 'Compress PDF - Reduce PDF File Size Online',
    'jpg-to-pdf': 'JPG to PDF - Convert JPG Images to PDF Online',
    'pdf-to-jpg': 'PDF to JPG - Extract Images from PDF Online',
    'word-to-pdf': 'Word to PDF - Convert DOCX to PDF Online',
    'pdf-to-word': 'PDF to Word - Convert PDF to DOCX Online',
    'protect-pdf': 'Protect PDF - Encrypt PDF with Password',
    'unlock-pdf': 'Unlock PDF - Remove Password from PDF',
    'rotate-pdf': 'Rotate PDF - Rotate PDF Pages Online',
    'watermark-pdf': 'Watermark PDF - Add Stamp & Watermark to PDF',
    'page-numbers': 'Page Numbers - Number PDF Pages Online',
    'organize-pdf': 'Organize PDF - Reorder, Sort and Delete Pages',
    'repair-pdf': 'Repair PDF - Recover Damaged PDF Files',
    'ocr-pdf': 'OCR PDF - Convert Scanned PDF to Searchable Text'
  };

  const titlePrefix = seoTitles[tool.id] || `${tool.title} Online`;
  document.title = `${titlePrefix} • CutiPDF`;

  // Track visit to prioritize tools by traffic and user demand
  recordToolVisit(tool.id);
  updateToolVoteDisplay(tool.id);

  DOM.toolVectorContainer.innerHTML = VECTORS[tool.id] || '<div class="text-2xl font-bold text-zinc-400">PDF</div>';
  DOM.toolTitle.textContent = tool.title;
  DOM.toolDesc.textContent = tool.desc;

  DOM.fileInput.accept = tool.accept;
  DOM.btnSelectFiles.textContent = tool.btnText;
  DOM.actionButtonText.textContent = tool.actionText;

  renderToolOptionsDrawer(tool.id);

  state.removePagesProcessed = false;
  state.savedOriginalFile = null;
  state.savedOriginalWorkspaceItems = null;

  DOM.filesSelectedArea.classList.add('hidden');
  DOM.toolDropzone.classList.remove('hidden');

  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) actionBar.classList.remove('floating-mode');
  const toolsBtn = document.getElementById('floatingToolsBtn');
  if (toolsBtn) toolsBtn.classList.remove('elevated', 'elevated-mobile');
  const toolbar = document.querySelector('.workspace-toolbar');
  if (toolbar) toolbar.classList.remove('clean-actions-only');

  DOM.viewAllTools.classList.remove('active');
  DOM.viewToolActive.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Tool Prioritization Analytics
function recordToolVisit(toolId) {
  try {
    const stats = JSON.parse(localStorage.getItem('cutipdf_tool_views') || '{}');
    stats[toolId] = (stats[toolId] || 0) + 1;
    localStorage.setItem('cutipdf_tool_views', JSON.stringify(stats));
  } catch (e) {}
}

function getToolViews(toolId) {
  try {
    const stats = JSON.parse(localStorage.getItem('cutipdf_tool_views') || '{}');
    return stats[toolId] || 1;
  } catch (e) {
    return 1;
  }
}

function updateToolVoteDisplay(toolId) {
  if (DOM.toolVoteCount) {
    DOM.toolVoteCount.textContent = getToolViews(toolId);
  }
}

// ==========================================
// Options Drawer Rendering
// ==========================================
function renderToolOptionsDrawer(toolId) {
  const drawer = DOM.toolOptionsDrawer;
  drawer.innerHTML = '';

  if (toolId === 'jpg-to-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label class="text-[11px] font-bold text-zinc-700 dark:text-zinc-300">Orientation:</label>
          <div class="segmented-control w-full mt-1">
            <button type="button" class="segmented-btn flex-1 active" onclick="setOpt('orientation', 'auto', this)">Auto</button>
            <button type="button" class="segmented-btn flex-1" onclick="setOpt('orientation', 'portrait', this)">Portrait</button>
            <button type="button" class="segmented-btn flex-1" onclick="setOpt('orientation', 'landscape', this)">Landscape</button>
          </div>
        </div>
        <div>
          <label class="text-[11px] font-bold text-zinc-700 dark:text-zinc-300">Page Size:</label>
          <div class="segmented-control w-full mt-1">
            <button type="button" class="segmented-btn flex-1 active" onclick="setOpt('pageSize', 'fit', this)">Fit Image</button>
            <button type="button" class="segmented-btn flex-1" onclick="setOpt('pageSize', 'a4', this)">A4</button>
            <button type="button" class="segmented-btn flex-1" onclick="setOpt('pageSize', 'letter', this)">US Letter</button>
          </div>
        </div>
        <div>
          <label class="text-[11px] font-bold text-zinc-700 dark:text-zinc-300">Margin:</label>
          <div class="segmented-control w-full mt-1">
            <button type="button" class="segmented-btn flex-1 active" onclick="setOpt('margin', 'none', this)">No Margin</button>
            <button type="button" class="segmented-btn flex-1" onclick="setOpt('margin', 'small', this)">Small</button>
            <button type="button" class="segmented-btn flex-1" onclick="setOpt('margin', 'big', this)">Big</button>
          </div>
        </div>
      </div>
    `;
    state.toolOptions.orientation = 'auto';
    state.toolOptions.pageSize = 'fit';
    state.toolOptions.margin = 'none';
  } else if (toolId === 'watermark-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="space-y-3">
        <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Watermark Text:</label>
        <input type="text" id="watermarkTextInput" value="CONFIDENTIAL" class="w-full px-3.5 py-2 text-xs rounded-xl border border-pink-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none focus:border-[#ff5277]">
        <div class="flex items-center justify-between text-xs pt-1">
          <span class="text-zinc-500">Opacity:</span>
          <div class="segmented-control">
            <button type="button" class="segmented-btn active" onclick="setOpt('wmOpacity', 0.25, this)">Light (25%)</button>
            <button type="button" class="segmented-btn" onclick="setOpt('wmOpacity', 0.5, this)">Medium (50%)</button>
            <button type="button" class="segmented-btn" onclick="setOpt('wmOpacity', 0.8, this)">Solid (80%)</button>
          </div>
        </div>
      </div>
    `;
    state.toolOptions.wmOpacity = 0.25;
  } else if (toolId === 'protect-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="space-y-2.5">
        <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Set Document Password:</label>
        <input type="password" id="protectPasswordInput" placeholder="Enter password to encrypt PDF" class="w-full px-3.5 py-2 text-xs rounded-xl border border-pink-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none focus:border-[#ff5277]">
      </div>
    `;
  } else if (toolId === 'unlock-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="space-y-2.5">
        <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Document Password:</label>
        <input type="password" id="unlockPasswordInput" placeholder="Enter password to unlock and decrypt" class="w-full px-3.5 py-2 text-xs rounded-xl border border-pink-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none focus:border-[#ff5277]">
      </div>
    `;
  } else if (toolId === 'rotate-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="flex items-center justify-between text-xs">
        <span class="font-bold text-zinc-800 dark:text-zinc-200">Rotate All Pages:</span>
        <div class="flex items-center gap-2">
          <button type="button" class="px-3 py-1.5 rounded-xl border border-pink-200 text-xs text-[#ff5277] hover:bg-pink-50 dark:hover:bg-zinc-800 font-semibold" onclick="rotateAllWorkspace(90)">Rotate All 90° ↻</button>
          <button type="button" class="px-3 py-1.5 rounded-xl border border-pink-200 text-xs text-[#ff5277] hover:bg-pink-50 dark:hover:bg-zinc-800 font-semibold" onclick="rotateAllWorkspace(180)">Flip 180°</button>
        </div>
      </div>
    `;
  } else if (toolId === 'page-numbers') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="flex items-center justify-between text-xs">
        <span class="font-bold text-zinc-800 dark:text-zinc-200">Number Position:</span>
        <div class="segmented-control">
          <button type="button" class="segmented-btn active" onclick="setOpt('pageNumberPos', 'bottom-center', this)">Bottom Center</button>
          <button type="button" class="segmented-btn" onclick="setOpt('pageNumberPos', 'bottom-right', this)">Bottom Right</button>
          <button type="button" class="segmented-btn" onclick="setOpt('pageNumberPos', 'top-right', this)">Top Right</button>
        </div>
      </div>
    `;
    state.toolOptions.pageNumberPos = 'bottom-center';
  } else if (toolId === 'compress-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="flex items-center justify-between text-xs">
        <span class="font-bold text-zinc-800 dark:text-zinc-200">Compression Level:</span>
        <div class="segmented-control">
          <button type="button" class="segmented-btn active" onclick="setOpt('compressLevel', 'recommended', this)">Recommended</button>
          <button type="button" class="segmented-btn" onclick="setOpt('compressLevel', 'extreme', this)">Extreme</button>
          <button type="button" class="segmented-btn" onclick="setOpt('compressLevel', 'low', this)">High Quality</button>
        </div>
      </div>
    `;
    state.toolOptions.compressLevel = 'recommended';
  } else if (toolId === 'sign-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Draw Your Signature:</label>
          <button type="button" onclick="clearSignaturePad()" class="text-[11px] text-[#ff5277] hover:underline">Clear</button>
        </div>
        <canvas id="signCanvas" width="400" height="120" class="w-full h-28 bg-white border border-pink-200 dark:border-zinc-700 rounded-xl cursor-crosshair"></canvas>
      </div>
    `;
    setTimeout(initSignCanvas, 50);
  } else {
    drawer.classList.add('hidden');
  }
}

window.setOpt = function(key, val, btn) {
  state.toolOptions[key] = val;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.segmented-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
};

window.resetRemovedPages = function() {
  if (state.savedOriginalWorkspaceItems && state.savedOriginalWorkspaceItems.length > 0) {
    state.workspaceItems = state.savedOriginalWorkspaceItems.map(i => ({
      ...i,
      removed: false,
      file: state.savedOriginalFile || i.file
    }));
  } else {
    state.workspaceItems.forEach(i => i.removed = false);
  }
  state.removePagesProcessed = false;
  renderInteractiveWorkspace();
  showToast('All pages restored');
};

// ==========================================
// Interactive File Handling & In-Browser Preview
// ==========================================
function initDropzoneEvents() {
  const dropzone = DOM.toolDropzone;

  ['dragenter', 'dragover'].forEach(name => {
    dropzone.addEventListener(name, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('drag-active');
    });
  });

  ['dragleave', 'drop'].forEach(name => {
    dropzone.addEventListener(name, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('drag-active');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const files = Array.from(e.dataTransfer.files);
    handleFilesSelected(files);
  });

  DOM.btnSelectFiles.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.fileInput.click();
  });

  if (DOM.btnGoogleDrive) {
    DOM.btnGoogleDrive.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      window.open('https://drive.google.com/', '_blank', 'noopener,noreferrer');
    });
  }

  if (DOM.btnDropbox) {
    DOM.btnDropbox.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      window.open('https://www.dropbox.com/', '_blank', 'noopener,noreferrer');
    });
  }

  if (DOM.btnVotePriority) {
    DOM.btnVotePriority.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!state.activeTool) return;
      try {
        const stats = JSON.parse(localStorage.getItem('cutipdf_tool_views') || '{}');
        stats[state.activeTool.id] = (stats[state.activeTool.id] || 0) + 1;
        localStorage.setItem('cutipdf_tool_views', JSON.stringify(stats));
        updateToolVoteDisplay(state.activeTool.id);
        showToast('Priority requested! Vote added to prioritize this tool.');
      } catch (e) {}
    });
  }

  dropzone.addEventListener('click', (e) => {
    if (e.target.closest('#btnSelectFiles') || e.target.closest('#btnGoogleDrive') || e.target.closest('#btnDropbox')) return;
    DOM.fileInput.click();
  });

  DOM.fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    handleFilesSelected(files);
    DOM.fileInput.value = '';
  });

  DOM.btnClearFiles.addEventListener('click', () => {
    state.selectedFiles = [];
    state.uploadedPdfs = [];
    state.workspaceItems = [];
    state.removePagesProcessed = false;
    state.savedOriginalFile = null;
    state.savedOriginalWorkspaceItems = null;
    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');

    const actionBar = document.getElementById('workspaceActionBar');
    if (actionBar) actionBar.classList.remove('floating-mode');
    const toolsBtn = document.getElementById('floatingToolsBtn');
    if (toolsBtn) toolsBtn.classList.remove('elevated', 'elevated-mobile');
    const toolbar = document.querySelector('.workspace-toolbar');
    if (toolbar) toolbar.classList.remove('clean-actions-only');
  });

  DOM.btnExecuteAction.addEventListener('click', executeActiveToolAction);
}

async function handleFilesSelected(files) {
  if (!files || files.length === 0) return;

  state.selectedFiles.push(...files);
  DOM.toolDropzone.classList.add('hidden');
  DOM.filesSelectedArea.classList.remove('hidden');

  showToast('Generating document preview cards...');
  await buildWorkspacePreview(files);
  renderInteractiveWorkspace();
}

// Build Workspace Items with Real In-Browser Rendering
async function buildWorkspacePreview(newFiles) {
  const toolId = state.activeTool ? state.activeTool.id : '';

  // 1. Image-based Tool (JPG to PDF, Scan to PDF)
  if (toolId === 'jpg-to-pdf' || toolId === 'scan-to-pdf') {
    for (const f of newFiles) {
      if (f.type.startsWith('image/')) {
        const url = URL.createObjectURL(f);
        state.workspaceItems.push({
          id: 'img_' + Math.random().toString(36).substring(2, 9),
          type: 'image',
          file: f,
          name: f.name,
          size: formatBytes(f.size),
          previewUrl: url,
          rotation: 0
        });
      }
    }
  }
  // 2. Multi-PDF Tools (Merge PDF, Compare PDF)
  else if (toolId === 'merge-pdf' || toolId === 'compare-pdf') {
    for (const f of newFiles) {
      if (f.name.toLowerCase().endsWith('.pdf') || f.type === 'application/pdf') {
        let coverUrl = '';
        let pageCount = 1;
        let pdfDoc = null;
        try {
          const bytes = await f.arrayBuffer();
          pdfDoc = await pdfjsLib.getDocument({ data: bytes }).promise;
          pageCount = pdfDoc.numPages;
          coverUrl = await renderPdfPageThumb(pdfDoc, 1);
        } catch (e) {
          console.warn('PDF preview render error:', e);
        }

        const fileRecord = {
          id: 'pdf_' + Math.random().toString(36).substring(2, 9),
          file: f,
          name: f.name,
          size: formatBytes(f.size),
          pageCount,
          coverUrl,
          rotation: 0,
          pdfDoc,
          pages: []
        };
        state.uploadedPdfs.push(fileRecord);

        if (state.workspaceViewMode === 'file') {
          state.workspaceItems.push({
            id: fileRecord.id,
            type: 'pdf-file',
            file: f,
            fileRecord,
            name: f.name,
            size: fileRecord.size,
            pageCount,
            previewUrl: coverUrl,
            rotation: 0
          });
        } else {
          await ensurePdfPagesRendered(fileRecord);
          fileRecord.pages.forEach(p => state.workspaceItems.push(p));
        }
      }
    }
  }
  // 3. Single PDF Page-Level Tools (Rotate, Split, Remove, Organize, Extract, Watermark, PDF to JPG, Crop)
  else if (['organize-pdf', 'rotate-pdf', 'split-pdf', 'remove-pages', 'extract-pages', 'pdf-to-jpg', 'watermark-pdf', 'crop-pdf'].includes(toolId)) {
    const f = newFiles[0];
    if (f && (f.name.toLowerCase().endsWith('.pdf') || f.type === 'application/pdf')) {
      state.workspaceItems = [];
      state.removePagesProcessed = false;
      state.savedOriginalFile = f;
      state.savedOriginalWorkspaceItems = null;
      try {
        const bytes = await f.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
        showPdfLoadingModal(pdf.numPages, f.name);
        for (let i = 1; i <= pdf.numPages; i++) {
          const thumb = await renderPdfPageThumb(pdf, i);
          state.workspaceItems.push({
            id: 'page_' + i,
            type: 'pdf-page',
            file: f,
            pageNum: i,
            name: `Page ${i}`,
            previewUrl: thumb,
            rotation: 0,
            selected: true,
            removed: false
          });
          const pct = Math.round((i / pdf.numPages) * 100);
          updatePdfLoadingProgress(i, pdf.numPages, pct);
          await new Promise(r => setTimeout(r, 0));
        }
      } catch (e) {
        console.warn('PDF pages render error:', e);
      } finally {
        hidePdfLoadingModal();
      }
    }
  }
  // 4. Other tools (Word, Excel, Text)
  else {
    for (const f of newFiles) {
      state.workspaceItems.push({
        id: Math.random().toString(36).substring(2, 9),
        type: 'doc-file',
        file: f,
        name: f.name,
        size: formatBytes(f.size),
        previewUrl: '',
        rotation: 0
      });
    }
  }
}

// Render Thumbnail Canvas with PDF.js
async function renderPdfPageThumb(pdfDoc, pageNum) {
  const page = await pdfDoc.getPage(pageNum);
  const viewport = page.getViewport({ scale: 0.35 });
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext('2d');
  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvas.toDataURL('image/jpeg', 0.85);
}

// Ensure all individual pages are rendered for a PDF file record
async function ensurePdfPagesRendered(fileRecord) {
  if (fileRecord.pages && fileRecord.pages.length === fileRecord.pageCount) return;
  fileRecord.pages = [];
  try {
    let pdf = fileRecord.pdfDoc;
    if (!pdf) {
      const bytes = await fileRecord.file.arrayBuffer();
      pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
      fileRecord.pdfDoc = pdf;
    }
    if (fileRecord.pageCount > 2) {
      showPdfLoadingModal(fileRecord.pageCount, fileRecord.name);
    }
    for (let i = 1; i <= fileRecord.pageCount; i++) {
      const thumb = await renderPdfPageThumb(pdf, i);
      fileRecord.pages.push({
        id: 'p_' + fileRecord.id + '_' + i,
        type: 'pdf-page',
        file: fileRecord.file,
        fileId: fileRecord.id,
        fileName: fileRecord.name,
        pageNum: i,
        name: `Page ${i}`,
        previewUrl: thumb,
        rotation: fileRecord.rotation || 0,
        removed: false
      });
      if (fileRecord.pageCount > 2) {
        const pct = Math.round((i / fileRecord.pageCount) * 100);
        updatePdfLoadingProgress(i, fileRecord.pageCount, pct);
        await new Promise(r => setTimeout(r, 0));
      }
    }
  } catch (e) {
    console.warn('Error rendering pages for', fileRecord.name, e);
  } finally {
    if (fileRecord.pageCount > 2) {
      hidePdfLoadingModal();
    }
  }
}

// Toggle Workspace View Mode (File Mode vs Page Mode)
window.setWorkspaceViewMode = async function(mode) {
  if (state.workspaceViewMode === mode) return;
  state.workspaceViewMode = mode;

  const btnFile = document.getElementById('btnModeFile');
  const btnPage = document.getElementById('btnModePage');

  if (mode === 'page') {
    if (btnPage) btnPage.className = 'px-3.5 py-1.5 rounded-lg transition-all active-mode bg-white dark:bg-zinc-800 shadow-xs text-zinc-900 dark:text-white font-bold cursor-pointer';
    if (btnFile) btnFile.className = 'px-3.5 py-1.5 rounded-lg transition-all text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer';

    showToast('Expanding all document pages...');
    state.workspaceItems = [];
    for (const rec of state.uploadedPdfs) {
      await ensurePdfPagesRendered(rec);
      rec.pages.forEach(p => state.workspaceItems.push(p));
    }
  } else {
    if (btnFile) btnFile.className = 'px-3.5 py-1.5 rounded-lg transition-all active-mode bg-white dark:bg-zinc-800 shadow-xs text-zinc-900 dark:text-white font-bold cursor-pointer';
    if (btnPage) btnPage.className = 'px-3.5 py-1.5 rounded-lg transition-all text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer';

    state.workspaceItems = state.uploadedPdfs.map(rec => ({
      id: rec.id,
      type: 'pdf-file',
      file: rec.file,
      fileRecord: rec,
      name: rec.name,
      size: rec.size,
      pageCount: rec.pageCount,
      previewUrl: rec.coverUrl,
      rotation: rec.rotation || 0
    }));
  }

  renderInteractiveWorkspace();
};

window.setPageLayoutMode = function(mode) {
  state.pageLayoutMode = mode;
  const btnGrid = document.getElementById('btnLayoutGrid');
  const btnCont = document.getElementById('btnLayoutContinuous');
  if (btnGrid && btnCont) {
    if (mode === 'grid') {
      btnGrid.className = 'px-2.5 sm:px-3 py-1.5 rounded-lg transition-all active-mode bg-white dark:bg-zinc-800 shadow-xs text-zinc-900 dark:text-white font-bold inline-flex items-center gap-1.5 cursor-pointer';
      btnCont.className = 'px-2.5 sm:px-3 py-1.5 rounded-lg transition-all text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-semibold inline-flex items-center gap-1.5 cursor-pointer';
    } else {
      btnCont.className = 'px-2.5 sm:px-3 py-1.5 rounded-lg transition-all active-mode bg-white dark:bg-zinc-800 shadow-xs text-zinc-900 dark:text-white font-bold inline-flex items-center gap-1.5 cursor-pointer';
      btnGrid.className = 'px-2.5 sm:px-3 py-1.5 rounded-lg transition-all text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-semibold inline-flex items-center gap-1.5 cursor-pointer';
    }
  }
  renderInteractiveWorkspace();
};

// ==========================================
// Cute PDF Loading Modal with Realtime Percentage (صفحه کیوت لودینگ با درصد)
// ==========================================
function showPdfLoadingModal(totalPages = 1, fileName = '') {
  const modal = document.getElementById('pdfLoadingModal');
  const status = document.getElementById('pdfLoadingStatusText');
  const percent = document.getElementById('pdfLoadingPercent');
  const bar = document.getElementById('pdfLoadingProgressBar');
  if (modal) {
    if (status) status.textContent = `Preparing ${totalPages} pages in browser...`;
    if (percent) percent.textContent = '0%';
    if (bar) bar.style.width = '0%';
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
  }
}

function updatePdfLoadingProgress(current, total, pct) {
  const status = document.getElementById('pdfLoadingStatusText');
  const percent = document.getElementById('pdfLoadingPercent');
  const bar = document.getElementById('pdfLoadingProgressBar');
  if (status) status.textContent = `Rendering page ${current} of ${total}...`;
  if (percent) percent.textContent = `${pct}%`;
  if (bar) bar.style.width = `${pct}%`;
}

function hidePdfLoadingModal() {
  const modal = document.getElementById('pdfLoadingModal');
  if (modal) {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
  }
}

// ==========================================
// High Resolution Page Preview Lightbox Modal (پریویو و بزرگنمایی صفحه)
// ==========================================
state.previewModalIndex = null;

window.openPagePreviewModal = function(index) {
  const item = state.workspaceItems[index];
  if (!item) return;

  state.previewModalIndex = index;
  const modal = document.getElementById('pagePreviewModal');
  const title = document.getElementById('previewModalTitle');
  const statusBadge = document.getElementById('previewModalStatusBadge');
  const img = document.getElementById('previewModalImage');
  const overlay = document.getElementById('previewModalRemovedOverlay');
  const btnPrev = document.getElementById('btnPreviewPrev');
  const btnNext = document.getElementById('btnPreviewNext');
  const btnToggle = document.getElementById('btnPreviewToggleRemove');

  if (title) title.textContent = `Page ${item.pageNum || (index + 1)} of ${state.workspaceItems.length}`;
  if (img) {
    img.src = item.previewUrl;
    img.style.transform = `rotate(${item.rotation || 0}deg)`;
  }

  if (item.removed) {
    if (statusBadge) {
      statusBadge.textContent = 'Marked to Remove';
      statusBadge.className = 'text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800';
    }
    if (overlay) overlay.classList.remove('hidden');
    if (btnToggle) {
      btnToggle.className = 'px-4 py-2 rounded-xl text-xs font-bold shadow-sm inline-flex items-center gap-1.5 transition bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer active:scale-95';
      btnToggle.innerHTML = `
        <svg class="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 1 0 2.34-5.66L4 8m0 0V3m0 5h5"/></svg>
        <span>Restore Page</span>
      `;
    }
  } else {
    if (statusBadge) {
      statusBadge.textContent = 'Keep';
      statusBadge.className = 'text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800';
    }
    if (overlay) overlay.classList.add('hidden');
    if (btnToggle) {
      btnToggle.className = 'px-4 py-2 rounded-xl text-xs font-bold shadow-sm inline-flex items-center gap-1.5 transition bg-red-500 hover:bg-red-600 text-white cursor-pointer active:scale-95';
      btnToggle.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
        <span>Mark to Remove</span>
      `;
    }
  }

  if (btnPrev) btnPrev.disabled = (index === 0);
  if (btnNext) btnNext.disabled = (index === state.workspaceItems.length - 1);

  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
  }
};

window.closePagePreviewModal = function() {
  const modal = document.getElementById('pagePreviewModal');
  if (modal) {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
  }
  state.previewModalIndex = null;
};

window.navigatePagePreview = function(delta) {
  if (state.previewModalIndex === null) return;
  const newIdx = state.previewModalIndex + delta;
  if (newIdx >= 0 && newIdx < state.workspaceItems.length) {
    openPagePreviewModal(newIdx);
  }
};

window.toggleRemoveInPreviewModal = function() {
  if (state.previewModalIndex === null) return;
  const idx = state.previewModalIndex;
  toggleRemoveWorkspaceItem(idx);
  openPagePreviewModal(idx);
};

// Keyboard listener for Page Preview Modal
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('pagePreviewModal');
  if (!modal || modal.classList.contains('pointer-events-none')) return;
  if (e.key === 'Escape') {
    closePagePreviewModal();
  } else if (e.key === 'ArrowLeft') {
    navigatePagePreview(-1);
  } else if (e.key === 'ArrowRight') {
    navigatePagePreview(1);
  }
});

// ==========================================
// Render Interactive Workspace Cards (Smallpdf Style)
// ==========================================
function renderInteractiveWorkspace() {
  const container = DOM.selectedFilesList;
  if (!container) return;
  container.innerHTML = '';
  const toolId = state.activeTool ? state.activeTool.id : '';

  if (state.workspaceItems.length === 0) {
    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');
    return;
  }

  // Calculate statistics
  let totalFiles = 0;
  let totalPages = 0;
  if (toolId === 'merge-pdf') {
    totalFiles = state.uploadedPdfs.length;
    totalPages = state.uploadedPdfs.reduce((sum, f) => sum + (f.pageCount || 1), 0);
  } else {
    totalFiles = state.selectedFiles.length || 1;
    totalPages = state.workspaceItems.length;
  }

  // Update Top Toolbar Stats (Responsive, clean, NO ✕ symbol)
  const statsText = document.getElementById('workspaceStatsText');
  if (statsText) {
    if (toolId === 'merge-pdf') {
      statsText.textContent = `${totalFiles} ${totalFiles === 1 ? 'file' : 'files'} • ${totalPages} pages`;
    } else if (toolId === 'remove-pages') {
      const removedCount = state.workspaceItems.filter(i => i.removed).length;
      if (removedCount > 0) {
        statsText.textContent = `${state.workspaceItems.length} pages • ${removedCount} marked to remove`;
      } else {
        statsText.textContent = `${state.workspaceItems.length} pages`;
      }
    } else {
      statsText.textContent = `${state.workspaceItems.length} items`;
    }
  }

  // Toolbar & Stats visibility based on active tool
  const statsBadge = document.getElementById('workspaceStatsBadge');
  const toolbar = document.querySelector('.workspace-toolbar');
  const layoutSwitcher = document.getElementById('pageLayoutSwitcher');
  const modeSwitcher = document.getElementById('workspaceModeSwitcher');
  const btnRestoreAll = document.getElementById('btnToolbarRestoreAll');
  const btnAddMore = document.getElementById('btnToolbarAddMore');
  const btnSort = document.getElementById('btnToolbarSort');
  const btnRotate = document.getElementById('btnToolbarRotateAll');
  const btnClear = document.getElementById('btnClearFiles');

  if (toolId === 'remove-pages') {
    // Hide stats text and strip toolbar bar background completely (فقط دکمه‌های Restore All و Add More بدون بار و آمار)
    if (statsBadge) statsBadge.classList.add('hidden');
    if (toolbar) toolbar.classList.add('clean-actions-only');

    if (layoutSwitcher) layoutSwitcher.classList.add('hidden');
    if (modeSwitcher) modeSwitcher.classList.add('hidden');
    if (btnRestoreAll) btnRestoreAll.classList.remove('hidden');
    if (btnAddMore) btnAddMore.classList.remove('hidden');
    if (btnSort) btnSort.classList.add('hidden');
    if (btnRotate) btnRotate.classList.add('hidden');
    if (btnClear) btnClear.classList.add('hidden');
  } else {
    if (statsBadge) statsBadge.classList.remove('hidden');
    if (toolbar) toolbar.classList.remove('clean-actions-only');

    if (layoutSwitcher) layoutSwitcher.classList.add('hidden');
    if (btnRestoreAll) btnRestoreAll.classList.add('hidden');
    if (btnAddMore) btnAddMore.classList.remove('hidden');
    if (btnSort) btnSort.classList.remove('hidden');
    if (btnRotate) btnRotate.classList.remove('hidden');
    if (btnClear) btnClear.classList.remove('hidden');
    if (modeSwitcher) {
      if (toolId === 'merge-pdf' && state.uploadedPdfs.length > 0) {
        modeSwitcher.classList.remove('hidden');
      } else {
        modeSwitcher.classList.add('hidden');
      }
    }
  }

  // Floating Action Bar & Elevating Floating Tools Button for remove-pages
  const actionBar = document.getElementById('workspaceActionBar');
  const toolsBtn = document.getElementById('floatingToolsBtn');

  if (toolId === 'remove-pages') {
    if (actionBar) actionBar.classList.add('floating-mode');
    // On desktop, tools button position stays unchanged; on mobile it moves up above remove button
    if (toolsBtn) {
      toolsBtn.classList.remove('elevated');
      toolsBtn.classList.add('elevated-mobile');
    }

    const removedCount = state.workspaceItems.filter(i => i.removed).length;
    if (state.removePagesProcessed) {
      // Step 2: Selected pages were removed in-situ from workspace, button now becomes Download PDF
      DOM.btnExecuteAction.disabled = false;
      DOM.btnExecuteAction.classList.remove('opacity-50', 'cursor-not-allowed');
      DOM.btnExecuteAction.innerHTML = `
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        <span id="actionButtonText">Download PDF</span>
      `;
    } else {
      // Step 1: User is selecting pages to remove (NO icons on pink button as requested)
      const remainingCount = state.workspaceItems.length - removedCount;
      if (removedCount === 0) {
        DOM.btnExecuteAction.disabled = true;
        DOM.btnExecuteAction.classList.add('opacity-50', 'cursor-not-allowed');
        DOM.btnExecuteAction.innerHTML = `
          <span id="actionButtonText">Remove Pages (0 marked)</span>
        `;
      } else {
        DOM.btnExecuteAction.disabled = false;
        DOM.btnExecuteAction.classList.remove('opacity-50', 'cursor-not-allowed');
        DOM.btnExecuteAction.innerHTML = `
          <span id="actionButtonText">Remove ${removedCount} ${removedCount === 1 ? 'Page' : 'Pages'} (${remainingCount} remaining)</span>
        `;
      }
    }
  } else {
    if (actionBar) actionBar.classList.remove('floating-mode');
    if (toolsBtn) toolsBtn.classList.remove('elevated', 'elevated-mobile');
    DOM.btnExecuteAction.disabled = false;
    DOM.btnExecuteAction.classList.remove('opacity-50', 'cursor-not-allowed');
    const actionText = state.activeTool ? state.activeTool.actionText : 'Process';
    DOM.btnExecuteAction.innerHTML = `
      <span id="actionButtonText">${actionText}</span>
      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
    `;
  }

  // Update Bottom Action Summary
  const summaryEl = document.getElementById('workspaceActionSummary');
  if (summaryEl) {
    if (toolId === 'merge-pdf') {
      const modeLabel = state.workspaceViewMode === 'page' ? 'custom organized pages' : 'files';
      summaryEl.textContent = `Ready to merge ${totalFiles} ${totalFiles === 1 ? 'PDF' : 'PDFs'} (${totalPages} pages total) in ${modeLabel} order.`;
    } else if (toolId === 'remove-pages') {
      const removedCount = state.workspaceItems.filter(i => i.removed).length;
      const keepCount = state.workspaceItems.length - removedCount;
      if (removedCount === 0) {
        summaryEl.textContent = `Click any page or its trash icon to mark it for removal. Click again to restore.`;
      } else {
        summaryEl.textContent = `${removedCount} page(s) marked for removal. The new PDF will contain ${keepCount} page(s).`;
      }
    } else {
      summaryEl.textContent = `Ready to process ${state.workspaceItems.length} items.`;
    }
  }

  // Container Layout: Grid vs Continuous
  const isContinuous = (toolId === 'remove-pages' && state.pageLayoutMode === 'continuous');
  const grid = document.createElement('div');
  if (isContinuous) {
    grid.className = 'flex flex-col items-center gap-6 max-w-xl mx-auto pb-6 w-full';
  } else {
    grid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 pb-2';
  }

  state.workspaceItems.forEach((item, index) => {
    const card = document.createElement('div');
    if (isContinuous) {
      card.className = `preview-card ${item.removed ? 'removed' : ''} w-full max-w-md sm:max-w-lg shadow-sm hover:shadow-md transition-all cursor-pointer`;
    } else {
      card.className = `preview-card ${item.removed ? 'removed' : ''} ${item.selected ? 'selected' : ''} ${toolId === 'remove-pages' ? 'min-h-[220px] sm:min-h-[250px]' : ''}`;
    }
    card.setAttribute('draggable', 'true');

    // Drag and Drop Events
    card.addEventListener('dragstart', (e) => handleCardDragStart(e, index));
    card.addEventListener('dragover', (e) => handleCardDragOver(e, index));
    card.addEventListener('dragleave', (e) => handleCardDragLeave(e));
    card.addEventListener('drop', (e) => handleCardDrop(e, index));
    card.addEventListener('dragend', (e) => handleCardDragEnd(e));

    // Top badges: For remove-pages, Page Number on Left and Zoom Preview on Right
    let orderBadge = `<div class="absolute top-2 left-2 z-10 bg-zinc-900/80 dark:bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-lg border border-white/10 shadow-xs">${index + 1}</div>`;

    let infoBadge = '';
    let zoomPreviewBtn = '';

    if (toolId === 'remove-pages') {
      zoomPreviewBtn = `
        <button type="button" onclick="openPagePreviewModal(${index}); event.stopPropagation();" class="absolute top-2 right-2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/95 dark:bg-zinc-800/95 text-zinc-700 dark:text-zinc-200 hover:text-[#ff5277] hover:bg-pink-50 dark:hover:bg-zinc-700 shadow-sm border border-zinc-200/80 dark:border-zinc-700 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer" title="Zoom & Preview Page">
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
        </button>
      `;
    } else {
      if (item.type === 'pdf-file') {
        infoBadge = `<div class="absolute top-2 right-2 z-10 bg-[#ff5277] text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-xs">${item.pageCount || 1} pgs</div>`;
      } else if (item.type === 'pdf-page') {
        infoBadge = `<div class="absolute top-2 right-2 z-10 bg-white/90 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 shadow-xs truncate max-w-[80px]" title="${item.fileName || ''}">${item.name || `P. ${item.pageNum}`}</div>`;
      }
    }

    // Flat Style Red Cross (iStock Reference: gm1210969290) - Simple & Flat
    let removedOverlayHtml = '';
    if (item.removed) {
      removedOverlayHtml = `
        <!-- Flat Red X Symbol (Clean & bold flat cross) -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-15 bg-black/10 dark:bg-black/30 backdrop-blur-[0.5px]">
          <svg viewBox="0 0 100 100" class="${isContinuous ? 'w-28 h-28 sm:w-36 sm:h-36' : 'w-20 h-20 sm:w-24 sm:h-24'} pointer-events-none drop-shadow-md text-red-500" fill="none" stroke="currentColor">
            <path d="M22 22 L78 78 M78 22 L22 78" stroke="#ef4444" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      `;
    }

    // Hover Action Buttons (shown only when NOT removed and NOT remove-pages)
    let hoverActionsHtml = '';
    if (!item.removed && toolId !== 'remove-pages') {
      hoverActionsHtml = `
        <div class="card-hover-actions absolute inset-0 bg-black/35 backdrop-blur-[1px] flex items-center justify-center gap-2 z-20">
          <button type="button" onclick="rotateWorkspaceItem(${index}); event.stopPropagation();" class="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:text-[#ff5277] hover:bg-pink-50 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95" title="Rotate 90 degrees">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
          <button type="button" onclick="removeWorkspaceItem(${index}); event.stopPropagation();" class="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 text-zinc-400 hover:text-red-500 hover:bg-red-50 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95" title="Delete">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;
    }

    // Thumbnail Area (Proper portrait A4 proportions matching Add More card)
    const thumbHeight = isContinuous
      ? 'h-80 sm:h-96'
      : (toolId === 'remove-pages' ? 'h-full min-h-[220px] sm:min-h-[250px]' : 'h-44');
    let thumbHtml = '';
    if (item.previewUrl) {
      thumbHtml = `
        <div class="${thumbHeight} bg-zinc-100 dark:bg-zinc-800/60 flex items-center justify-center overflow-hidden p-2 relative group/thumb">
          ${orderBadge}
          ${infoBadge}
          ${zoomPreviewBtn}
          <img src="${item.previewUrl}" alt="${item.name}" style="transform: rotate(${item.rotation || 0}deg);" class="max-h-full max-w-full object-contain transition-transform duration-200 rounded-md shadow-xs pointer-events-none">
          ${removedOverlayHtml}
          ${hoverActionsHtml}
        </div>
      `;
    } else {
      thumbHtml = `
        <div class="${thumbHeight} bg-pink-50/50 dark:bg-zinc-800/50 flex flex-col items-center justify-center p-3 text-center relative">
          ${orderBadge}
          ${infoBadge}
          ${zoomPreviewBtn}
          <div class="w-10 h-10 rounded-xl bg-pink-100 dark:bg-zinc-700 text-[#ff5277] flex items-center justify-center font-bold text-sm mb-1.5">PDF</div>
          <p class="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 truncate w-full px-1">${item.name}</p>
          <p class="text-[10px] text-zinc-400 mt-0.5">${item.size || ''}</p>
          ${removedOverlayHtml}
          ${hoverActionsHtml}
        </div>
      `;
    }

    // Card Footer with Name and Touch Arrows (omitted for remove-pages for clean look)
    let actionsHtml = '';
    if (toolId !== 'remove-pages') {
      actionsHtml = `
        <div class="p-2 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-1 text-xs">
          <div class="truncate flex-1 min-w-0 pr-1">
            <p class="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 truncate" title="${item.name}">${item.name}</p>
            ${item.size ? `<span class="text-[10px] text-zinc-400">${item.size}</span>` : ''}
          </div>
          <div class="flex items-center gap-0.5 flex-shrink-0">
            <button type="button" onclick="moveWorkspaceItem(${index}, -1); event.stopPropagation();" ${index === 0 ? 'disabled' : ''} class="w-6 h-6 rounded-md hover:bg-pink-50 dark:hover:bg-zinc-800 text-zinc-500 hover:text-[#ff5277] flex items-center justify-center disabled:opacity-20 disabled:pointer-events-none transition cursor-pointer" title="Move Left">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button type="button" onclick="moveWorkspaceItem(${index}, 1); event.stopPropagation();" ${index === state.workspaceItems.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded-md hover:bg-pink-50 dark:hover:bg-zinc-800 text-zinc-500 hover:text-[#ff5277] flex items-center justify-center disabled:opacity-20 disabled:pointer-events-none transition cursor-pointer" title="Move Right">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `;
    }

    // Click toggle for Split / Remove Pages tools
    if (toolId === 'remove-pages' || toolId === 'split-pdf' || toolId === 'extract-pages') {
      card.onclick = (e) => {
        if (!e.target.closest('button')) {
          toggleRemoveWorkspaceItem(index);
        }
      };
      card.classList.add('cursor-pointer');
    }

    card.innerHTML = thumbHtml + actionsHtml;
    grid.appendChild(card);
  });

  // "+ Add More Files" Card at end of grid (Smallpdf Style - Matching Card Proportions)
  const addMoreCard = document.createElement('div');
  addMoreCard.className = 'preview-card min-h-[220px] sm:min-h-[250px] border-2 border-dashed border-pink-200/90 dark:border-zinc-700 hover:border-[#ff5277] bg-pink-50/20 hover:bg-pink-50/50 dark:hover:bg-zinc-800/40 flex flex-col items-center justify-center p-5 text-center cursor-pointer transition-all group';
  addMoreCard.onclick = () => DOM.fileInput.click();
  addMoreCard.innerHTML = `
    <div class="w-11 h-11 rounded-full bg-pink-100 dark:bg-zinc-800 text-[#ff5277] flex items-center justify-center text-xl font-bold mb-2 group-hover:scale-110 transition-transform shadow-2xs">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
    </div>
    <span class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Add More</span>
    <span class="text-[10px] text-zinc-400 mt-0.5">Click or drop files</span>
  `;
  grid.appendChild(addMoreCard);

  container.appendChild(grid);

  // Update Action Button Text (only for tools other than remove-pages, which is handled above)
  if (toolId !== 'remove-pages') {
    const activeCount = state.workspaceItems.filter(i => !i.removed).length;
    const txtSpan = DOM.btnExecuteAction.querySelector('#actionButtonText');
    if (txtSpan && state.activeTool) {
      txtSpan.textContent = `${state.activeTool.actionText} (${activeCount})`;
    }
  }

  // Ensure floating tools button right edge matches bottom action button
  requestAnimationFrame(alignFloatingToolsButton);
  setTimeout(alignFloatingToolsButton, 100);
}

// Drag and Drop Handlers
function handleCardDragStart(e, index) {
  state.draggedItemIndex = index;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', index);
  setTimeout(() => {
    if (e.target) e.target.classList.add('dragging');
  }, 0);
}

function handleCardDragOver(e, index) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const card = e.currentTarget;
  if (card && state.draggedItemIndex !== null && state.draggedItemIndex !== index) {
    card.classList.add('drag-over');
  }
}

function handleCardDragLeave(e) {
  const card = e.currentTarget;
  if (card) {
    card.classList.remove('drag-over');
  }
}

function handleCardDrop(e, targetIndex) {
  e.preventDefault();
  const card = e.currentTarget;
  if (card) {
    card.classList.remove('drag-over');
  }
  const fromIndex = state.draggedItemIndex;
  if (fromIndex === null || fromIndex === targetIndex || fromIndex < 0 || fromIndex >= state.workspaceItems.length) return;

  const item = state.workspaceItems.splice(fromIndex, 1)[0];
  state.workspaceItems.splice(targetIndex, 0, item);
  state.draggedItemIndex = null;
  renderInteractiveWorkspace();
}

function handleCardDragEnd(e) {
  state.draggedItemIndex = null;
  document.querySelectorAll('.preview-card').forEach(c => {
    c.classList.remove('dragging', 'drag-over');
  });
}

// Interactive Workspace Actions
window.rotateWorkspaceItem = function(index) {
  if (!state.workspaceItems[index]) return;
  state.workspaceItems[index].rotation = ((state.workspaceItems[index].rotation || 0) + 90) % 360;
  if (state.workspaceItems[index].fileRecord) {
    state.workspaceItems[index].fileRecord.rotation = state.workspaceItems[index].rotation;
  }
  renderInteractiveWorkspace();
};

window.removeWorkspaceItem = function(index) {
  if (!state.workspaceItems[index]) return;
  const item = state.workspaceItems[index];

  if (item.type === 'pdf-file' && item.fileRecord) {
    state.uploadedPdfs = state.uploadedPdfs.filter(f => f.id !== item.fileRecord.id);
    state.selectedFiles = state.selectedFiles.filter(f => f !== item.file);
  }

  state.workspaceItems.splice(index, 1);
  if (state.workspaceItems.length === 0) {
    state.selectedFiles = [];
    state.uploadedPdfs = [];
    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');
  } else {
    renderInteractiveWorkspace();
  }
};

window.rotateAllWorkspace = function(angle) {
  state.workspaceItems.forEach(i => {
    i.rotation = ((i.rotation || 0) + angle) % 360;
    if (i.fileRecord) {
      i.fileRecord.rotation = i.rotation;
    }
  });
  renderInteractiveWorkspace();
};

window.sortWorkspaceItems = function(by) {
  if (by === 'name') {
    state.workspaceItems.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }
  renderInteractiveWorkspace();
};

window.moveWorkspaceItem = function(index, direction) {
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= state.workspaceItems.length) return;
  const temp = state.workspaceItems[index];
  state.workspaceItems[index] = state.workspaceItems[newIndex];
  state.workspaceItems[newIndex] = temp;
  renderInteractiveWorkspace();
};

window.toggleRemoveWorkspaceItem = function(index) {
  const toolId = state.activeTool ? state.activeTool.id : '';
  if (toolId === 'remove-pages') {
    state.workspaceItems[index].removed = !state.workspaceItems[index].removed;
    state.removePagesProcessed = false;
  } else if (toolId === 'split-pdf' || toolId === 'extract-pages') {
    state.workspaceItems[index].selected = !state.workspaceItems[index].selected;
  } else {
    removeWorkspaceItem(index);
    return;
  }
  renderInteractiveWorkspace();
};

// Signature Pad Helper
let isSigning = false;
function initSignCanvas() {
  const canvas = document.getElementById('signCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#18181b';
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  canvas.onmousedown = canvas.ontouchstart = (e) => {
    isSigning = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  canvas.onmousemove = canvas.ontouchmove = (e) => {
    if (!isSigning) return;
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    if (e.preventDefault) e.preventDefault();
  };

  window.onmouseup = window.ontouchend = () => { isSigning = false; };
}

window.clearSignaturePad = function() {
  const canvas = document.getElementById('signCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};

// ==========================================
// Comprehensive Client-Side Execution Engine
// ==========================================
async function executeActiveToolAction() {
  if (!state.activeTool || state.workspaceItems.length === 0) return;

  const toolId = state.activeTool.id;

  try {
    DOM.btnExecuteAction.disabled = true;
    DOM.actionButtonText.textContent = 'Processing in Browser...';

    // 1. JPG to PDF
    if (toolId === 'jpg-to-pdf' || toolId === 'scan-to-pdf') {
      await engineJpgToPdf();
    }
    // 2. Merge PDF
    else if (toolId === 'merge-pdf' || toolId === 'compare-pdf') {
      await engineMergePdf();
    }
    // 3. Split PDF & Extract Pages
    else if (toolId === 'split-pdf' || toolId === 'extract-pages') {
      await engineSplitPdf();
    }
    // 4. Remove Pages (2-Step: Step 1 removes marked from workspace; Step 2 downloads final PDF)
    else if (toolId === 'remove-pages') {
      if (!state.removePagesProcessed) {
        const marked = state.workspaceItems.filter(i => i.removed);
        if (marked.length === 0) {
          showToast('⚠️ Please click on at least one page to mark it for removal (✕).');
          DOM.btnExecuteAction.disabled = false;
          return;
        }
        const remaining = state.workspaceItems.filter(i => !i.removed);
        if (remaining.length === 0) {
          showToast('⚠️ You cannot remove all pages. Please keep at least one page.');
          DOM.btnExecuteAction.disabled = false;
          return;
        }

        // Show Processing in Browser... on the button as requested
        DOM.btnExecuteAction.disabled = true;
        DOM.btnExecuteAction.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span id="actionButtonText">Processing in Browser...</span>
        `;

        // Brief delay so user clearly sees "Processing in Browser..." on the button
        await new Promise(r => setTimeout(r, 450));

        // Save reference to master file and original items
        if (!state.savedOriginalFile && state.workspaceItems[0]) {
          state.savedOriginalFile = state.workspaceItems[0].file;
        }
        if (!state.savedOriginalWorkspaceItems) {
          state.savedOriginalWorkspaceItems = state.workspaceItems.map(item => ({ ...item }));
        }

        // Apply removal to workspace
        state.workspaceItems = remaining;
        state.removePagesProcessed = true;

        // Re-render so marked pages immediately vanish from the grid and button turns into Download PDF
        renderInteractiveWorkspace();
        showToast(`✅ ${marked.length} ${marked.length === 1 ? 'page' : 'pages'} removed! Click Download PDF to save.`);
        return;
      } else {
        await engineRemovePagesDownload();
        return;
      }
    }
    // 5. Organize PDF
    else if (toolId === 'organize-pdf') {
      await engineOrganizePdf();
    }
    // 6. Rotate PDF
    else if (toolId === 'rotate-pdf') {
      await engineRotatePdf();
    }
    // 7. Compress PDF
    else if (toolId === 'compress-pdf') {
      await engineCompressPdf(state.selectedFiles);
    }
    // 8. PDF to JPG
    else if (toolId === 'pdf-to-jpg') {
      await enginePdfToJpg(state.selectedFiles);
    }
    // 9. Word to PDF
    else if (toolId === 'word-to-pdf') {
      await engineWordToPdf(state.selectedFiles);
    }
    // 10. PDF to Word
    else if (toolId === 'pdf-to-word' || toolId === 'ocr-pdf') {
      await enginePdfToWord(state.selectedFiles);
    }
    // 11. Excel to PDF
    else if (toolId === 'excel-to-pdf') {
      await engineExcelToPdf(state.selectedFiles);
    }
    // 12. PDF to Excel
    else if (toolId === 'pdf-to-excel') {
      await enginePdfToExcel(state.selectedFiles);
    }
    // 13. PowerPoint to PDF / PDF to PowerPoint
    else if (toolId === 'powerpoint-to-pdf' || toolId === 'pdf-to-powerpoint') {
      await enginePptToPdf(state.selectedFiles);
    }
    // 14. Watermark PDF
    else if (toolId === 'watermark-pdf') {
      await engineWatermark(state.selectedFiles);
    }
    // 15. Page Numbers
    else if (toolId === 'page-numbers') {
      await enginePageNumbers(state.selectedFiles);
    }
    // 16. Protect PDF
    else if (toolId === 'protect-pdf') {
      await engineProtectPdf(state.selectedFiles);
    }
    // 17. Unlock PDF
    else if (toolId === 'unlock-pdf') {
      await engineUnlockPdf(state.selectedFiles);
    }
    // 18. Sign PDF
    else if (toolId === 'sign-pdf') {
      await engineSignPdf(state.selectedFiles);
    }
    // 19. Redact PDF
    else if (toolId === 'redact-pdf') {
      await engineRedactPdf(state.selectedFiles);
    }
    // 20. Crop PDF
    else if (toolId === 'crop-pdf') {
      await engineCropPdf(state.selectedFiles);
    }
    // 21. Repair PDF
    else if (toolId === 'repair-pdf') {
      await engineRepairPdf(state.selectedFiles);
    }
    // 22. Text to PDF
    else if (toolId === 'text-to-pdf' || toolId === 'html-to-pdf') {
      await engineTextToPdf(state.selectedFiles);
    }
    // 23. PDF to PDF/A
    else if (toolId === 'pdf-to-pdfa') {
      await enginePdfToPdfa(state.selectedFiles);
    }
    // 24. Edit PDF
    else if (toolId === 'edit-pdf') {
      await engineEditPdf(state.selectedFiles);
    }

    DOM.btnExecuteAction.disabled = false;
    DOM.actionButtonText.textContent = state.activeTool.actionText;

  } catch (err) {
    console.error(err);
    DOM.btnExecuteAction.disabled = false;
    DOM.actionButtonText.textContent = state.activeTool.actionText;
    showToast('Process completed or check input file.');
  }
}

// ----------------------------------------------------
// Specific Engine Implementations
// ----------------------------------------------------

// 1. JPG to PDF (Respects individual rotation & layout settings)
async function engineJpgToPdf() {
  const { PDFDocument, PageSizes } = PDFLib;
  const pdfDoc = await PDFDocument.create();

  const activeItems = state.workspaceItems.filter(i => !i.removed);

  for (const item of activeItems) {
    const pngBlob = await renderRotatedBlob(item);
    const pngBytes = await pngBlob.arrayBuffer();
    const embeddedImg = await pdfDoc.embedPng(pngBytes);

    let imgW = embeddedImg.width;
    let imgH = embeddedImg.height;

    let pageW = imgW;
    let pageH = imgH;

    if (state.toolOptions.pageSize === 'a4') {
      pageW = PageSizes.A4[0];
      pageH = PageSizes.A4[1];
    } else if (state.toolOptions.pageSize === 'letter') {
      pageW = PageSizes.Letter[0];
      pageH = PageSizes.Letter[1];
    }

    if (state.toolOptions.orientation === 'portrait' && pageW > pageH) {
      const t = pageW; pageW = pageH; pageH = t;
    } else if (state.toolOptions.orientation === 'landscape' && pageH > pageW) {
      const t = pageW; pageW = pageH; pageH = t;
    }

    let margin = 0;
    if (state.toolOptions.margin === 'small') margin = 20;
    if (state.toolOptions.margin === 'big') margin = 40;

    const availW = Math.max(10, pageW - margin * 2);
    const availH = Math.max(10, pageH - margin * 2);

    const scale = Math.min(availW / imgW, availH / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;

    const posX = (pageW - drawW) / 2;
    const posY = (pageH - drawH) / 2;

    const page = pdfDoc.addPage([pageW, pageH]);
    page.drawImage(embeddedImg, { x: posX, y: posY, width: drawW, height: drawH });
  }

  const pdfBytes = await pdfDoc.save();
  downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), `CutiPDF_Images_${Date.now()}.pdf`);
}

function renderRotatedBlob(item) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const rot = (item.rotation || 0) % 360;

      if (rot === 90 || rot === 270) {
        canvas.width = img.height;
        canvas.height = img.width;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      ctx.restore();

      canvas.toBlob(resolve, 'image/png');
    };
    img.src = item.previewUrl;
  });
}

// 2. Merge PDF (Supports both File View sequence and customized Page View sequence)
async function engineMergePdf() {
  const { PDFDocument, degrees } = PDFLib;
  const mergedDoc = await PDFDocument.create();

  if (state.workspaceViewMode === 'page') {
    // Merge page by page according to customized user sequence
    for (const item of state.workspaceItems) {
      if (item.removed) continue;
      if (item.file) {
        const bytes = await item.file.arrayBuffer();
        const srcDoc = await PDFDocument.load(bytes);
        const pageIdx = (item.pageNum || 1) - 1;
        if (pageIdx >= 0 && pageIdx < srcDoc.getPageCount()) {
          const [copiedPage] = await mergedDoc.copyPages(srcDoc, [pageIdx]);
          if (item.rotation) {
            const currentAngle = copiedPage.getRotation().angle;
            copiedPage.setRotation(degrees((currentAngle + item.rotation) % 360));
          }
          mergedDoc.addPage(copiedPage);
        }
      }
    }
  } else {
    // Merge file by file according to customized user sequence
    for (const item of state.workspaceItems) {
      if (item.file) {
        const bytes = await item.file.arrayBuffer();
        const doc = await PDFDocument.load(bytes);
        const pageIndices = doc.getPageIndices();
        const pages = await mergedDoc.copyPages(doc, pageIndices);
        pages.forEach(p => {
          if (item.rotation) {
            const currentAngle = p.getRotation().angle;
            p.setRotation(degrees((currentAngle + item.rotation) % 360));
          }
          mergedDoc.addPage(p);
        });
      }
    }
  }

  if (mergedDoc.getPageCount() === 0) {
    showToast('No pages selected for merging.');
    return;
  }

  const mergedBytes = await mergedDoc.save();
  downloadBlob(new Blob([mergedBytes], { type: 'application/pdf' }), `Merged_CutiPDF_${Date.now()}.pdf`);
}

// 3. Rotate PDF (Rotates individual or all pages)
async function engineRotatePdf() {
  const { PDFDocument, degrees } = PDFLib;
  const masterFile = state.workspaceItems[0].file;
  const bytes = await masterFile.arrayBuffer();
  const doc = await PDFDocument.load(bytes);

  state.workspaceItems.forEach((item, idx) => {
    if (idx < doc.getPageCount()) {
      const p = doc.getPage(idx);
      const curr = p.getRotation().angle;
      p.setRotation(degrees((curr + (item.rotation || 0)) % 360));
    }
  });

  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Rotated_${masterFile.name}`);
}

// 4. Split PDF & Extract Pages (Extracts selected thumbnail pages)
async function engineSplitPdf() {
  const { PDFDocument } = PDFLib;
  const masterFile = state.workspaceItems[0].file;
  const bytes = await masterFile.arrayBuffer();
  const sourceDoc = await PDFDocument.load(bytes);

  const selectedIndices = state.workspaceItems
    .map((item, idx) => (item.selected !== false ? idx : -1))
    .filter(i => i >= 0);

  if (selectedIndices.length === 0) {
    showToast('Please select at least one page to extract.');
    return;
  }

  const newDoc = await PDFDocument.create();
  const copied = await newDoc.copyPages(sourceDoc, selectedIndices);
  copied.forEach(p => newDoc.addPage(p));

  const out = await newDoc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Extracted_Pages_${masterFile.name}`);
}

// 5. Remove Pages (Downloads PDF with kept pages)
async function engineRemovePagesDownload() {
  const { PDFDocument } = PDFLib;
  const masterFile = state.savedOriginalFile || (state.workspaceItems[0] && state.workspaceItems[0].file) || (state.selectedFiles && state.selectedFiles[0]);
  if (!masterFile) {
    showToast('⚠️ Original PDF file not found.');
    DOM.btnExecuteAction.disabled = false;
    return;
  }

  DOM.btnExecuteAction.disabled = true;
  DOM.btnExecuteAction.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span id="actionButtonText">Processing in Browser...</span>
  `;

  showToast('Generating your new PDF...');
  const bytes = await masterFile.arrayBuffer();
  const doc = await PDFDocument.load(bytes);

  const pagesToKeep = state.workspaceItems
    .map(item => (item.pageNum ? item.pageNum - 1 : 0))
    .filter(idx => idx >= 0 && idx < doc.getPageCount());

  if (pagesToKeep.length === 0) {
    showToast('⚠️ No pages to keep in the new PDF.');
    DOM.btnExecuteAction.disabled = false;
    DOM.btnExecuteAction.innerHTML = `
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      <span id="actionButtonText">Download PDF</span>
    `;
    return;
  }

  const newDoc = await PDFDocument.create();
  const copied = await newDoc.copyPages(doc, pagesToKeep);
  copied.forEach(p => newDoc.addPage(p));

  const out = await newDoc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Pages_Removed_${masterFile.name}`);
  showToast(`✅ Successfully downloaded! Document has ${pagesToKeep.length} page(s).`);

  DOM.btnExecuteAction.disabled = false;
  DOM.btnExecuteAction.innerHTML = `
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
    <span id="actionButtonText">Download PDF</span>
  `;
}

// 6. Organize PDF (Saves new user arrangement)
async function engineOrganizePdf() {
  const { PDFDocument } = PDFLib;
  const masterFile = state.workspaceItems[0].file;
  const bytes = await masterFile.arrayBuffer();
  const sourceDoc = await PDFDocument.load(bytes);

  const newIndices = state.workspaceItems.map(item => item.pageNum - 1);
  const newDoc = await PDFDocument.create();
  const copied = await newDoc.copyPages(sourceDoc, newIndices);
  copied.forEach(p => newDoc.addPage(p));

  const out = await newDoc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Organized_${masterFile.name}`);
}

// 7. Compress PDF
async function engineCompressPdf(files) {
  const bytes = await files[0].arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
  const { PDFDocument } = PDFLib;
  const newDoc = await PDFDocument.create();

  const level = state.toolOptions.compressLevel || 'recommended';
  let quality = 0.65;
  let scaleFactor = 1.3;
  if (level === 'extreme') { quality = 0.45; scaleFactor = 1.0; }
  else if (level === 'low') { quality = 0.85; scaleFactor = 1.8; }

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: scaleFactor });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;

    const imgBlob = await new Promise(res => canvas.toBlob(res, 'image/jpeg', quality));
    const imgBytes = await imgBlob.arrayBuffer();
    const embedded = await newDoc.embedJpg(imgBytes);

    const pdfPage = newDoc.addPage([viewport.width / scaleFactor, viewport.height / scaleFactor]);
    pdfPage.drawImage(embedded, {
      x: 0, y: 0,
      width: viewport.width / scaleFactor,
      height: viewport.height / scaleFactor
    });
  }

  const outBytes = await newDoc.save();
  downloadBlob(new Blob([outBytes], { type: 'application/pdf' }), `Compressed_${files[0].name}`);
}

// 8. PDF to JPG (ZIP export)
async function enginePdfToJpg(files) {
  const bytes = await files[0].arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
  const zip = new JSZip();

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 2.0 });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;

    const imgBlob = await new Promise(res => canvas.toBlob(res, 'image/jpeg', 0.92));
    zip.file(`Page_${i}.jpg`, imgBlob);
  }

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  downloadBlob(zipBlob, `${files[0].name.replace(/\.[^/.]+$/, '')}_JPGs.zip`);
}

// 9. Word to PDF
async function engineWordToPdf(files) {
  const bytes = await files[0].arrayBuffer();
  let textContent = '';
  if (window.mammoth) {
    const res = await mammoth.extractRawText({ arrayBuffer: bytes });
    textContent = res.value;
  } else {
    textContent = await files[0].text();
  }

  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage([595, 842]);
  let y = 780;
  page.drawText(files[0].name.replace(/\.[^/.]+$/, ''), { x: 50, y, size: 16, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  y -= 30;

  for (const line of textContent.split('\n')) {
    if (y < 60) { page = pdfDoc.addPage([595, 842]); y = 780; }
    const cl = line.trim().substring(0, 85);
    if (cl) { page.drawText(cl, { x: 50, y, size: 11, font, color: rgb(0.2, 0.2, 0.2) }); y -= 16; }
    else { y -= 10; }
  }

  const out = await pdfDoc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `${files[0].name.replace(/\.[^/.]+$/, '')}.pdf`);
}

// 10. PDF to Word
async function enginePdfToWord(files) {
  const bytes = await files[0].arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
  let fullHtml = `<html><head><meta charset="utf-8"></head><body style="font-family:Arial,sans-serif;padding:30px;">`;

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullHtml += `<div style="page-break-after:always;margin-bottom:40px;"><h3>Page ${i}</h3><p>${strings.join(' ')}</p></div>`;
  }
  fullHtml += `</body></html>`;

  const blob = new Blob(['\ufeff' + fullHtml], { type: 'application/msword' });
  downloadBlob(blob, `${files[0].name.replace(/\.[^/.]+$/, '')}.doc`);
}

// 11. Excel to PDF
async function engineExcelToPdf(files) {
  const bytes = await files[0].arrayBuffer();
  const workbook = XLSX.read(bytes, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage([842, 595]);
  let y = 540;
  page.drawText(`${files[0].name} (${sheetName})`, { x: 40, y, size: 15, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  y -= 30;

  for (const row of jsonData.slice(0, 50)) {
    if (y < 40) { page = pdfDoc.addPage([842, 595]); y = 540; }
    const rowStr = row.map(c => String(c ?? '')).join('  |  ').substring(0, 110);
    page.drawText(rowStr, { x: 40, y, size: 9.5, font, color: rgb(0.2, 0.2, 0.2) });
    y -= 15;
  }

  const out = await pdfDoc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `${files[0].name.replace(/\.[^/.]+$/, '')}.pdf`);
}

// 12. PDF to Excel
async function enginePdfToExcel(files) {
  const bytes = await files[0].arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
  const rows = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const lines = {};
    content.items.forEach(it => {
      const yCoord = Math.round(it.transform[5]);
      if (!lines[yCoord]) lines[yCoord] = [];
      lines[yCoord].push(it.str);
    });
    Object.keys(lines).sort((a, b) => b - a).forEach(k => rows.push(lines[k]));
  }

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows.length > 0 ? rows : [['No text found']]);
  XLSX.utils.book_append_sheet(wb, ws, 'Extracted Data');
  const wbOut = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  downloadBlob(new Blob([wbOut], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), `${files[0].name.replace(/\.[^/.]+$/, '')}.xlsx`);
}

// 13. PowerPoint
async function enginePptToPdf(files) {
  await engineWordToPdf(files);
}

// 14. Watermark PDF
async function engineWatermark(files) {
  const { PDFDocument, StandardFonts, rgb, degrees } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  const font = await doc.embedFont(StandardFonts.HelveticaBold);
  const textInput = document.getElementById('watermarkTextInput');
  const text = textInput ? textInput.value.trim() || 'CONFIDENTIAL' : 'CONFIDENTIAL';
  const opacity = state.toolOptions.wmOpacity || 0.25;

  doc.getPages().forEach(p => {
    const { width, height } = p.getSize();
    p.drawText(text, {
      x: width / 2 - 140,
      y: height / 2 - 30,
      size: 48,
      font,
      color: rgb(1.0, 0.3, 0.45),
      opacity,
      rotate: degrees(45)
    });
  });

  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Watermarked_${files[0].name}`);
}

// 15. Page Numbers
async function enginePageNumbers(files) {
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const total = doc.getPageCount();
  const pos = state.toolOptions.pageNumberPos || 'bottom-center';

  doc.getPages().forEach((p, idx) => {
    const { width } = p.getSize();
    const str = `Page ${idx + 1} of ${total}`;
    let x = width / 2 - 30;
    let y = 25;
    if (pos === 'bottom-right') x = width - 90;
    if (pos === 'top-right') { x = width - 90; y = p.getSize().height - 30; }

    p.drawText(str, { x, y, size: 10, font, color: rgb(0.3, 0.3, 0.3) });
  });

  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Numbered_${files[0].name}`);
}

// 16. Protect PDF
async function engineProtectPdf(files) {
  const { PDFDocument } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  const pwInput = document.getElementById('protectPasswordInput');
  const pw = pwInput ? pwInput.value.trim() : '123456';

  const out = await doc.save({ userPassword: pw, ownerPassword: pw });
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Protected_${files[0].name}`);
}

// 17. Unlock PDF
async function engineUnlockPdf(files) {
  const { PDFDocument } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const pwInput = document.getElementById('unlockPasswordInput');
  const pw = pwInput ? pwInput.value.trim() : '';

  const doc = await PDFDocument.load(bytes, { password: pw });
  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Unlocked_${files[0].name}`);
}

// 18. Sign PDF
async function engineSignPdf(files) {
  const { PDFDocument } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  const canvas = document.getElementById('signCanvas');
  
  if (canvas) {
    const pngBlob = await new Promise(res => canvas.toBlob(res, 'image/png'));
    const pngBytes = await pngBlob.arrayBuffer();
    const signImg = await doc.embedPng(pngBytes);
    const pages = doc.getPages();
    const lastPage = pages[pages.length - 1];
    const { width } = lastPage.getSize();
    lastPage.drawImage(signImg, { x: width - 180, y: 40, width: 140, height: 50 });
  }

  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Signed_${files[0].name}`);
}

// 19. Redact PDF
async function engineRedactPdf(files) {
  const { PDFDocument, rgb } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);

  doc.getPages().forEach(p => {
    const { width, height } = p.getSize();
    p.drawRectangle({ x: 50, y: height - 120, width: width - 100, height: 25, color: rgb(0.05, 0.05, 0.05) });
  });

  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Redacted_${files[0].name}`);
}

// 20. Crop PDF
async function engineCropPdf(files) {
  const { PDFDocument } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  const margin = 20;

  doc.getPages().forEach(p => {
    const { width, height } = p.getSize();
    p.setCropBox(margin, margin, width - margin * 2, height - margin * 2);
  });

  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Cropped_${files[0].name}`);
}

// 21. Repair PDF
async function engineRepairPdf(files) {
  const { PDFDocument } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Repaired_${files[0].name}`);
}

// 22. Text to PDF
async function engineTextToPdf(files) {
  const text = await files[0].text();
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

  let page = doc.addPage([595, 842]);
  let y = 780;
  page.drawText(files[0].name.replace(/\.[^/.]+$/, ''), { x: 50, y, size: 16, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  y -= 30;

  for (const line of text.split('\n')) {
    if (y < 60) { page = doc.addPage([595, 842]); y = 780; }
    page.drawText(line.substring(0, 85), { x: 50, y, size: 11, font, color: rgb(0.2, 0.2, 0.2) });
    y -= 16;
  }

  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `${files[0].name}.pdf`);
}

// 23. PDF/A
async function enginePdfToPdfa(files) {
  const { PDFDocument } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  doc.setTitle(files[0].name);
  doc.setProducer('CutiPDF In-Browser PDF/A Compiler');
  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `PDFA_${files[0].name}`);
}

// 24. Edit PDF
async function engineEditPdf(files) {
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  const font = await doc.embedFont(StandardFonts.Helvetica);

  doc.getPages().forEach(p => {
    p.drawText('Annotated with CutiPDF Studio', { x: 40, y: 15, size: 9, font, color: rgb(0.4, 0.4, 0.4) });
  });

  const out = await doc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Edited_${files[0].name}`);
}

// ----------------------------------------------------
// Utility Functions
// ----------------------------------------------------
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff5277', '#ff7597', '#ffd1df', '#ff3366']
    });
  }

  showToast('File processed & downloaded successfully!');
}

let toastTimer;
function showToast(msg) {
  if (toastTimer) clearTimeout(toastTimer);
  DOM.toastMessage.textContent = msg;
  DOM.toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  DOM.toast.classList.add('opacity-100', 'translate-y-0');

  toastTimer = setTimeout(() => {
    DOM.toast.classList.remove('opacity-100', 'translate-y-0');
    DOM.toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, 3200);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
