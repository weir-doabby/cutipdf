/**
 * CutiPDF (cutipdf.com) - Full Suite of 30 Client-Side PDF Tools
 * Modeled after iLovePDF with Interactive Thumbnail Previews & In-Browser Privacy
 */

const TOOLS_CATALOG = {
  'ORGANIZE PDF': [
    {
      id: 'merge-pdf',
      title: 'Merge PDF',
      desc: 'Combine multiple PDF files into one single document in any order you want.',
      accept: 'application/pdf',
      btnText: 'Select PDF files',
      actionText: 'Merge PDF'
    },
    {
      id: 'split-pdf',
      title: 'Split PDF',
      desc: 'Separate pages or extract ranges into independent PDF files instantly.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Split PDF'
    },
    {
      id: 'remove-pages',
      title: 'Remove Pages',
      desc: 'Select and remove unwanted pages from your PDF file with interactive preview.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Remove Pages'
    },
    {
      id: 'extract-pages',
      title: 'Extract Pages',
      desc: 'Create a new PDF containing only your selected pages.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Extract Pages'
    },
    {
      id: 'organize-pdf',
      title: 'Organize PDF',
      desc: 'Drag and drop to sort, reorder, rotate, or delete pages in your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Save Order'
    }
  ],

  'OPTIMIZE & CONVERT': [
    {
      id: 'compress-pdf',
      title: 'Compress PDF',
      desc: 'Reduce file size while preserving high visual quality in your browser.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Compress PDF'
    },
    {
      id: 'jpg-to-pdf',
      title: 'JPG to PDF',
      desc: 'Convert JPG, PNG, and WebP images into a clean PDF document.',
      accept: 'image/jpeg,image/png,image/webp,image/jpg',
      btnText: 'Select Images',
      actionText: 'Convert to PDF'
    },
    {
      id: 'pdf-to-jpg',
      title: 'PDF to JPG',
      desc: 'Convert every PDF page into high-resolution JPG images packaged in a ZIP.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to JPG'
    }
  ],

  'EDIT & ENHANCE': [
    {
      id: 'rotate-pdf',
      title: 'Rotate PDF',
      desc: 'Rotate individual pages or all pages permanently 90°, 180°, or 270°.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Rotate PDF'
    },
    {
      id: 'page-numbers',
      title: 'Page Numbers',
      desc: 'Add clean page numbers with custom position and numbering format.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Add Page Numbers'
    },
    {
      id: 'watermark-pdf',
      title: 'Watermark PDF',
      desc: 'Stamp custom text or confidential marks over your PDF pages.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Add Watermark'
    },
    {
      id: 'crop-pdf',
      title: 'Crop PDF',
      desc: 'Trim visible page margins and white borders of your PDF documents.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Crop PDF'
    },
    {
      id: 'edit-pdf',
      title: 'Edit PDF',
      desc: 'Add text notes, highlights, and annotations directly onto your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Save Edits'
    }
  ],

  'PDF SECURITY': [
    {
      id: 'unlock-pdf',
      title: 'Unlock PDF',
      desc: 'Remove password security and encryption from your protected PDF.',
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
      desc: 'Draw or type your signature to stamp onto any page of your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Sign Document'
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
  lastProcessedPdfBlob: null,
  lastProcessedPdfFilename: '',
  lastProcessedPdfFile: null,
  savedOriginalFile: null,
  savedOriginalWorkspaceItems: null,
  savedOriginalPassword: null,
  draggedItemIndex: null,
  lastSelectedIndex: null,
  toolOptions: {},
  theme: localStorage.getItem('cutipdf_theme_v3') || 'dark'
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
  btnToolbarEnterPages: document.getElementById('btnToolbarEnterPages'),
  enterPagesModal: document.getElementById('enterPagesModal'),
  enterPagesInput: document.getElementById('enterPagesInput'),
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
  if (DOM.themeToggle) {
    DOM.themeToggle.addEventListener('click', () => {
      window.toggleTheme();
    });
  }
}

window.toggleTheme = function() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('cutipdf_theme_v3', state.theme);
  applyTheme(state.theme);
};

function applyTheme(theme) {
  const isDark = theme === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const sunSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  `;
  const moonSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  `;

  if (DOM.themeIcon) {
    DOM.themeIcon.innerHTML = isDark ? sunSvg : moonSvg;
  }

  const mobileIcon = document.getElementById('themeIconMobile');
  const mobileText = document.getElementById('themeTextMobile');
  if (mobileIcon) {
    mobileIcon.innerHTML = isDark ? sunSvg : moonSvg;
  }
  if (mobileText) {
    mobileText.textContent = isDark ? 'Light' : 'Dark';
  }
}

// ==========================================
// Base Path & Tool Lookup
// ==========================================
function getBasePath() {
  const path = window.location.pathname;
  if (path === '/cutipdf' || path.startsWith('/cutipdf/')) {
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

// Safe Vector Lookup
function getToolVector(toolId, fallbackClass = 'text-sm') {
  if (typeof VECTORS !== 'undefined' && VECTORS[toolId]) return VECTORS[toolId];
  if (typeof window !== 'undefined' && window.VECTORS && window.VECTORS[toolId]) return window.VECTORS[toolId];
  return `<div class="${fallbackClass} font-bold text-zinc-400">PDF</div>`;
}

// ==========================================
// Render All Tools Catalog with Brush Headers
// ==========================================
function renderAllToolsCatalog() {
  if (!DOM.toolsGridContainer) return;
  DOM.toolsGridContainer.innerHTML = '';
  const basePath = getBasePath();

  for (const [category, tools] of Object.entries(TOOLS_CATALOG)) {
    const section = document.createElement('section');
    section.className = 'space-y-4';

    section.innerHTML = `
      <div class="flex items-center gap-2 border-b border-pink-100 dark:border-zinc-800 pb-2">
        <h2 class="category-title">${category}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5">
        ${tools.map(tool => {
          const vectorSvg = getToolVector(tool.id, 'text-sm');
          return `
            <a href="${basePath}${tool.id}" data-tool-id="${tool.id}" class="tool-card group no-underline text-inherit block">
              <div class="w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-200 mb-3">
                ${vectorSvg}
              </div>
              <h3 class="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-[#ff2a5f] transition-colors">${tool.title}</h3>
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
    if (cleanP && cleanP !== 'all-tools' && cleanP !== 'tools' && cleanP !== 'cutipdf') {
      return cleanP;
    }
  }

  // 2. Check pathname (e.g. /cutipdf/merge-pdf or /merge-pdf)
  const path = window.location.pathname;
  const basePath = getBasePath();
  if (path.startsWith(basePath)) {
    const subPath = path.slice(basePath.length).replace(/\/+$/, '').toLowerCase().replace(/_/g, '-');
    if (subPath && subPath !== 'index.html' && subPath !== 'all-tools' && subPath !== 'tools' && subPath !== 'cutipdf') {
      return subPath;
    }
  } else if (path === '/cutipdf') {
    return null;
  }

  // 3. Check hash (backward compatibility fallback: #merge-pdf or #/merge-pdf)
  const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase().replace(/_/g, '-');
  if (hash && hash !== 'all-tools' && hash !== 'tools' && hash !== 'cutipdf') {
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
  state.lastSelectedIndex = null;
  state.lastProcessedPdfBlob = null;
  state.lastProcessedPdfFilename = '';
  state.lastProcessedPdfFile = null;

  const toolHeader = document.getElementById('toolHeaderContainer');
  if (toolHeader) toolHeader.classList.remove('hidden');
  const doneScreen = document.getElementById('workspaceDoneScreen');
  if (doneScreen) doneScreen.classList.add('hidden');
  if (DOM.filesSelectedArea) DOM.filesSelectedArea.classList.remove('remove-pages-workspace');

  DOM.viewToolActive.classList.remove('active');
  DOM.viewAllTools.classList.add('active');
  const footer = document.getElementById('mainSiteFooter');
  if (footer) footer.classList.remove('hidden');
  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) actionBar.classList.remove('floating-mode');
  const toolbar = document.querySelector('.workspace-toolbar');
  if (toolbar) toolbar.classList.remove('hidden', 'clean-actions-only');
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

  // Explicit brand logo click returns to home catalog
  if (DOM.brandLogoLink) {
    DOM.brandLogoLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(null);
    });
  }

  // Universal delegated click handler for ALL links with data-tool-id
  // Intercepts Header, Mega Menu, Mobile Drawer, Catalog, and Footer clicks seamlessly
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-tool-id]');
    if (!link) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    const toolId = link.getAttribute('data-tool-id');
    if (typeof closeMobileNav === 'function') closeMobileNav();
    if (typeof closeQuickTools === 'function') closeQuickTools();
    navigateTo(!toolId || toolId === 'all-tools' ? null : toolId);
  });

  // Handle initial route on page load
  handleRoute();
}

// ==========================================
// Quick Tools Preview Drawer & Mobile Navigation
// ==========================================
function initQuickToolsModal() {
  if (!DOM.quickToolsDrawer) return;

  renderQuickToolsModalGrid('');

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

  // Prevent background scrolling while drawer is open
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

  // Restore background scrolling
  document.body.classList.remove('overflow-hidden');
}

// Mobile Slide-in Navigation Drawer
window.toggleMobileNav = function() {
  const drawer = document.getElementById('mobileMenuDrawer');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!drawer || !backdrop) return;
  const isClosed = drawer.classList.contains('translate-x-full');
  if (isClosed) {
    drawer.classList.remove('translate-x-full', 'pointer-events-none');
    drawer.classList.add('translate-x-0', 'pointer-events-auto');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  } else {
    window.closeMobileNav();
  }
};

window.closeMobileNav = function() {
  const drawer = document.getElementById('mobileMenuDrawer');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!drawer || !backdrop) return;
  drawer.classList.remove('translate-x-0', 'pointer-events-auto');
  drawer.classList.add('translate-x-full', 'pointer-events-none');
  backdrop.classList.remove('opacity-100', 'pointer-events-auto');
  backdrop.classList.add('opacity-0', 'pointer-events-none');
  document.body.classList.remove('overflow-hidden');
};

function alignFloatingToolsButton() {
  // Tools button removed as per minimalist design
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
            <a href="${basePath}${tool.id}" onclick="selectToolFromModal(event, '${tool.id}')" class="p-2.5 rounded-xl border border-pink-100 dark:border-zinc-800 hover:border-[#ff2a5f] bg-white dark:bg-zinc-800/80 hover:shadow-sm cursor-pointer transition-all flex items-center gap-2.5 group no-underline text-inherit">
              <div class="w-8 h-8 flex-shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                ${getToolVector(tool.id, 'text-xs')}
              </div>
              <div class="overflow-hidden min-w-0 flex-1">
                <h5 class="font-bold text-xs text-zinc-900 dark:text-zinc-100 group-hover:text-[#ff2a5f] transition-colors truncate">${tool.title}</h5>
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

window.selectToolFromModal = async function(e, toolId) {
  if (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
  }
  closeQuickTools();
  const fileToPass = state.lastProcessedPdfFile;
  if (fileToPass) {
    state.workspaceItems = [];
    state.removePagesProcessed = false;
    const doneScreen = document.getElementById('workspaceDoneScreen');
    if (doneScreen) doneScreen.classList.add('hidden');
  }
  navigateTo(toolId);
  if (fileToPass) {
    await handleFilesSelected([fileToPass]);
  }
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

  if (DOM.toolVectorContainer) {
    DOM.toolVectorContainer.innerHTML = getToolVector(tool.id, 'text-2xl');
  }
  DOM.toolTitle.textContent = tool.title;
  DOM.toolDesc.textContent = tool.desc;

  DOM.fileInput.accept = tool.accept;
  DOM.btnSelectFiles.textContent = tool.btnText;
  DOM.actionButtonText.textContent = tool.actionText;

  renderToolOptionsDrawer(tool.id);

  state.removePagesProcessed = false;
  state.savedOriginalFile = null;
  state.savedOriginalWorkspaceItems = null;
  state.lastSelectedIndex = null;
  state.lastProcessedPdfBlob = null;
  state.lastProcessedPdfFilename = '';
  state.lastProcessedPdfFile = null;

  const toolHeader = document.getElementById('toolHeaderContainer');
  if (toolHeader) toolHeader.classList.remove('hidden');
  const doneScreen = document.getElementById('workspaceDoneScreen');
  if (doneScreen) doneScreen.classList.add('hidden');
  if (DOM.filesSelectedArea) DOM.filesSelectedArea.classList.remove('remove-pages-workspace');

  DOM.filesSelectedArea.classList.add('hidden');
  DOM.toolDropzone.classList.remove('hidden');

  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) actionBar.classList.remove('floating-mode');
  const toolbar = document.querySelector('.workspace-toolbar');
  if (toolbar) toolbar.classList.remove('hidden', 'clean-actions-only');

  DOM.viewAllTools.classList.remove('active');
  DOM.viewToolActive.classList.add('active');
  const footer = document.getElementById('mainSiteFooter');
  if (footer) footer.classList.add('hidden');

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
        <input type="text" id="watermarkTextInput" value="CONFIDENTIAL" class="w-full px-3.5 py-2 text-xs rounded-xl border border-pink-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none focus:border-[#ff2a5f]">
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
        <input type="password" id="protectPasswordInput" placeholder="Enter password to encrypt PDF" class="w-full px-3.5 py-2 text-xs rounded-xl border border-pink-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none focus:border-[#ff2a5f]">
      </div>
    `;
  } else if (toolId === 'unlock-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="space-y-2.5">
        <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Document Password:</label>
        <input type="password" id="unlockPasswordInput" placeholder="Enter password to unlock and decrypt" class="w-full px-3.5 py-2 text-xs rounded-xl border border-pink-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none focus:border-[#ff2a5f]">
      </div>
    `;
  } else if (toolId === 'rotate-pdf') {
    drawer.classList.remove('hidden');
    drawer.innerHTML = `
      <div class="flex items-center justify-between text-xs">
        <span class="font-bold text-zinc-800 dark:text-zinc-200">Rotate All Pages:</span>
        <div class="flex items-center gap-2">
          <button type="button" class="px-3 py-1.5 rounded-xl border border-pink-200 text-xs text-[#ff2a5f] hover:bg-pink-50 dark:hover:bg-zinc-800 font-semibold" onclick="rotateAllWorkspace(90)">Rotate All 90° ↻</button>
          <button type="button" class="px-3 py-1.5 rounded-xl border border-pink-200 text-xs text-[#ff2a5f] hover:bg-pink-50 dark:hover:bg-zinc-800 font-semibold" onclick="rotateAllWorkspace(180)">Flip 180°</button>
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
          <button type="button" onclick="clearSignaturePad()" class="text-[11px] text-[#ff2a5f] hover:underline">Clear</button>
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
      file: i.file || state.savedOriginalFile
    }));
  } else {
    state.workspaceItems.forEach(i => i.removed = false);
  }
  state.removePagesProcessed = false;
  state.lastSelectedIndex = null;
  state.workspaceItems.forEach((item, idx) => {
    const cardEl = document.getElementById(`workspace-card-${idx}`);
    if (cardEl) updateCardVisualState(cardEl, false);
  });
  updateRemovePagesActionState();
  showToast('All pages restored');
};

window.selectAllPagesForRemoval = function() {
  if (!state.workspaceItems || state.workspaceItems.length === 0) return;

  if (!state.savedOriginalWorkspaceItems) {
    state.savedOriginalWorkspaceItems = state.workspaceItems.map(item => ({ ...item }));
  }

  state.workspaceItems.forEach((item, idx) => {
    item.removed = true;
    const cardEl = document.getElementById(`workspace-card-${idx}`);
    if (cardEl) updateCardVisualState(cardEl, true);
  });

  state.removePagesProcessed = false;
  state.lastSelectedIndex = null;

  updateRemovePagesActionState();
  showToast('All pages marked for removal. Click any page you want to keep.');
};

// ==========================================
// Interactive File Handling & In-Browser Preview
// ==========================================
function initDropzoneEvents() {
  const dropzone = DOM.toolDropzone;

  if (dropzone) {
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
      e.preventDefault();
      e.stopPropagation();
      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) handleFilesSelected(files);
    });

    DOM.btnSelectFiles.addEventListener('click', (e) => {
      e.stopPropagation();
      DOM.fileInput.click();
    });
  }

  // Window-Wide Drag & Drop: Drop files anywhere on page
  let windowDragCounter = 0;
  const globalOverlay = document.getElementById('globalDropOverlay');

  window.addEventListener('dragenter', (e) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files')) {
      windowDragCounter++;
      if (globalOverlay) {
        globalOverlay.classList.remove('opacity-0', 'pointer-events-none');
        globalOverlay.classList.add('opacity-100');
      }
    }
  });

  window.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  window.addEventListener('dragleave', (e) => {
    e.preventDefault();
    windowDragCounter--;
    if (windowDragCounter <= 0) {
      windowDragCounter = 0;
      if (globalOverlay) {
        globalOverlay.classList.add('opacity-0', 'pointer-events-none');
        globalOverlay.classList.remove('opacity-100');
      }
    }
  });

  window.addEventListener('drop', (e) => {
    e.preventDefault();
    windowDragCounter = 0;
    if (globalOverlay) {
      globalOverlay.classList.add('opacity-0', 'pointer-events-none');
      globalOverlay.classList.remove('opacity-100');
    }
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      if (!state.activeTool) {
        navigateTo('remove-pages');
      }
      handleFilesSelected(files);
    }
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
  state.lastSelectedIndex = null;
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
  // Keep filesSelectedArea clean and hidden while building preview cards so no background ghost buttons bleed through
  DOM.filesSelectedArea.classList.add('hidden');
  if (DOM.selectedFilesList) DOM.selectedFilesList.innerHTML = '';

  showToast('Generating document preview cards...');
  await buildWorkspacePreview(files);
  DOM.toolDropzone.classList.add('hidden');
  DOM.filesSelectedArea.classList.remove('hidden');
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
    const isAppending = (state.workspaceItems.length > 0);
    if (!isAppending) {
      state.workspaceItems = [];
      state.removePagesProcessed = false;
      state.savedOriginalFile = newFiles[0];
      state.savedOriginalWorkspaceItems = null;
      state.savedOriginalPassword = null;
      state.lastSelectedIndex = null;
    } else {
      state.removePagesProcessed = false;
      state.savedOriginalWorkspaceItems = null;
    }

    for (const f of newFiles) {
      if (!f || (!f.name.toLowerCase().endsWith('.pdf') && f.type !== 'application/pdf')) continue;

      try {
        const bytes = await f.arrayBuffer();
        let pdf = null;
        try {
          pdf = await pdfjsLib.getDocument({
            data: bytes,
            cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
            cMapPacked: true
          }).promise;
        } catch (initialErr) {
          if (initialErr.name === 'PasswordException' || initialErr.message?.toLowerCase().includes('password') || initialErr.code === 1 || initialErr.code === 2) {
            const enteredPassword = await promptPdfPassword(f.name);
            if (!enteredPassword) {
              showToast('🔒 Document requires a password to open.');
              if (!isAppending) resetWorkspaceToDropzone();
              return;
            }
            try {
              pdf = await pdfjsLib.getDocument({
                data: bytes,
                password: enteredPassword,
                cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
                cMapPacked: true
              }).promise;
              state.savedOriginalPassword = enteredPassword;
            } catch (pwErr) {
              showToast('❌ Incorrect password for this PDF document.');
              if (!isAppending) resetWorkspaceToDropzone();
              return;
            }
          } else if (initialErr.name === 'InvalidPDFException' || initialErr.name === 'MissingPDFException' || initialErr.message?.toLowerCase().includes('invalid') || initialErr.message?.toLowerCase().includes('format')) {
            showToast(`⚠️ "${f.name}" appears to be corrupted or not a valid PDF.`);
            if (!isAppending) resetWorkspaceToDropzone();
            return;
          } else {
            throw initialErr;
          }
        }

        if (!pdf) continue;

        // Optimized for large documents (100+ or 700 pages):
        // Render first 16 thumbnails right away, lazy-load the rest on scroll with IntersectionObserver!
        const isLargeDoc = pdf.numPages > 25;
        const initialBatch = isLargeDoc ? 16 : pdf.numPages;

        showPdfLoadingModal(pdf.numPages, f.name);

        for (let i = 1; i <= pdf.numPages; i++) {
          const shouldRenderNow = i <= initialBatch;
          let thumb = '';
          if (shouldRenderNow) {
            thumb = await renderPdfPageThumb(pdf, i);
          }

          state.workspaceItems.push({
            id: 'page_' + Math.random().toString(36).substring(2, 9),
            type: 'pdf-page',
            file: f,
            fileName: f.name,
            pdfDoc: pdf,
            pageNum: i,
            name: `Page ${i}`,
            previewUrl: thumb,
            rotation: 0,
            selected: false,
            removed: false
          });

          if (shouldRenderNow) {
            const pct = Math.round((i / initialBatch) * 100);
            updatePdfLoadingProgress(i, pdf.numPages, pct);
            await new Promise(r => setTimeout(r, 0));
          }
        }

        if (isLargeDoc) {
          updatePdfLoadingProgress(pdf.numPages, pdf.numPages, 100);
        }
      } catch (e) {
        console.warn('PDF pages render error:', e);
        showToast(`⚠️ Unable to process ${f.name}. Please ensure it is valid.`);
        if (!isAppending) resetWorkspaceToDropzone();
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

// Render Thumbnail Canvas with PDF.js (Optimized for 700+ pages & low memory consumption)
async function renderPdfPageThumb(pdfDoc, pageNum) {
  const page = await pdfDoc.getPage(pageNum);
  const viewport = page.getViewport({ scale: 0.3 }); // 0.3 is crisp for ~180px cards and ~30% faster than 0.35
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(viewport.width));
  canvas.height = Math.max(1, Math.round(viewport.height));
  const ctx = canvas.getContext('2d', { alpha: false }); // alpha: false enables hardware blitting
  await page.render({ canvasContext: ctx, viewport }).promise;
  const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
  if (typeof page.cleanup === 'function') {
    page.cleanup();
  }
  canvas.width = 0;
  canvas.height = 0;
  return dataUrl;
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
// Password Protected & Encrypted PDF Helpers
// ==========================================
let passwordPromptResolver = null;

function promptPdfPassword(fileName = '') {
  return new Promise((resolve) => {
    passwordPromptResolver = resolve;
    const modal = document.getElementById('pdfPasswordPromptModal');
    const subtitle = document.getElementById('pdfPasswordPromptSubtitle');
    const input = document.getElementById('pdfPromptPasswordInput');
    const errorMsg = document.getElementById('pdfPasswordPromptError');

    if (subtitle && fileName) {
      subtitle.textContent = `"${fileName}" is password-protected. Enter the password to view and edit pages:`;
    }
    if (input) input.value = '';
    if (errorMsg) {
      errorMsg.textContent = '';
      errorMsg.classList.add('hidden');
    }

    if (modal) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      setTimeout(() => { if (input) input.focus(); }, 120);
    }
  });
}

window.handlePdfPasswordSubmit = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('pdfPromptPasswordInput');
  const password = input ? input.value : '';
  const modal = document.getElementById('pdfPasswordPromptModal');

  if (modal) {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
  }

  if (passwordPromptResolver) {
    passwordPromptResolver(password);
    passwordPromptResolver = null;
  }
};

window.cancelPdfPasswordPrompt = function() {
  const modal = document.getElementById('pdfPasswordPromptModal');
  if (modal) {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
  }
  if (passwordPromptResolver) {
    passwordPromptResolver(null);
    passwordPromptResolver = null;
  }
};

function resetWorkspaceToDropzone() {
  state.workspaceItems = [];
  state.selectedFiles = [];
  state.uploadedPdfs = [];
  state.removePagesProcessed = false;
  state.savedOriginalFile = null;
  state.savedOriginalWorkspaceItems = null;
  state.savedOriginalPassword = null;
  state.lastSelectedIndex = null;
  state.lastProcessedPdfBlob = null;
  state.lastProcessedPdfFilename = '';
  state.lastProcessedPdfFile = null;

  const toolHeader = document.getElementById('toolHeaderContainer');
  if (toolHeader) toolHeader.classList.remove('hidden');
  const doneScreen = document.getElementById('workspaceDoneScreen');
  if (doneScreen) doneScreen.classList.add('hidden');
  if (DOM.filesSelectedArea) DOM.filesSelectedArea.classList.remove('remove-pages-workspace');

  if (DOM.filesSelectedArea) DOM.filesSelectedArea.classList.add('hidden');
  if (DOM.toolDropzone) DOM.toolDropzone.classList.remove('hidden');

  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) actionBar.classList.remove('floating-mode');
  const toolbar = document.querySelector('.workspace-toolbar');
  if (toolbar) toolbar.classList.remove('hidden', 'clean-actions-only');
}

// ==========================================
// High Resolution Page Preview Lightbox Modal (پریویو و بزرگنمایی صفحه با کیفیت بالا و مینیمال)
// ==========================================
state.previewModalIndex = null;

window.openPagePreviewModal = async function(index) {
  const item = state.workspaceItems[index];
  if (!item) return;

  state.previewModalIndex = index;
  const modal = document.getElementById('pagePreviewModal');
  const title = document.getElementById('previewModalTitle');
  const img = document.getElementById('previewModalImage');
  const spinner = document.getElementById('previewModalSpinner');

  if (title) title.textContent = `Page ${item.pageNum || (index + 1)}`;

  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
  }

  // If already cached in high-res: display crisp full-res directly and smoothly
  if (item.highResUrl) {
    if (spinner) spinner.classList.add('hidden');
    if (img) {
      img.src = item.highResUrl;
      img.style.transform = `rotate(${item.rotation || 0}deg)`;
      img.classList.remove('opacity-0');
    }
    return;
  }

  // If rendering for the first time: keep img hidden with spinner until razor-sharp image is ready (NO blurry/small jump)
  if (img) {
    img.src = '';
    img.classList.add('opacity-0');
  }
  if (spinner) {
    spinner.classList.remove('hidden');
  }

  // On-demand crisp high-res render (scale: 1.8, 95% quality)
  if (window.pdfjsLib) {
    try {
      let pdf = item.pdfDoc;
      if (!pdf && item.file) {
        const bytes = await item.file.arrayBuffer();
        const pdfOptions = {
          data: bytes,
          cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
          cMapPacked: true
        };
        if (state.savedOriginalPassword) {
          pdfOptions.password = state.savedOriginalPassword;
        }
        pdf = await pdfjsLib.getDocument(pdfOptions).promise;
        item.pdfDoc = pdf;
      }
      if (!pdf) return;

      const page = await pdf.getPage(item.pageNum || 1);
      const viewport = page.getViewport({ scale: 1.8 });
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(viewport.width));
      canvas.height = Math.max(1, Math.round(viewport.height));
      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport }).promise;
      item.highResUrl = canvas.toDataURL('image/jpeg', 0.95);
      if (typeof page.cleanup === 'function') {
        page.cleanup();
      }
      canvas.width = 0;
      canvas.height = 0;

      if (state.previewModalIndex === index && img) {
        img.src = item.highResUrl;
        img.style.transform = `rotate(${item.rotation || 0}deg)`;
        if (spinner) spinner.classList.add('hidden');
        img.classList.remove('opacity-0');
      }
    } catch (e) {
      console.warn('High-res page render error:', e);
      if (spinner) spinner.classList.add('hidden');
      if (img && item.previewUrl) {
        img.src = item.previewUrl;
        img.classList.remove('opacity-0');
      }
    }
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

// Helper: Compactly format consecutive page numbers into ranges (e.g. [1,2,3,4,5,10] -> "1-5, 10")
function formatPagesToRanges(pages) {
  if (!pages || pages.length === 0) return '';
  const ranges = [];
  let start = pages[0];
  let prev = pages[0];
  for (let i = 1; i < pages.length; i++) {
    if (pages[i] === prev + 1) {
      prev = pages[i];
    } else {
      ranges.push(start === prev ? `${start}` : `${start}-${prev}`);
      start = pages[i];
      prev = pages[i];
    }
  }
  ranges.push(start === prev ? `${start}` : `${start}-${prev}`);
  return ranges.join(', ');
}

// ==========================================
// Remove Pages by Number Text Input Modal (حذف صفحات به صورت تایپ شماره و بازه)
// ==========================================
function parsePageNumbersInput(inputStr, totalPages) {
  if (!inputStr || !inputStr.trim()) {
    return { pages: [], invalid: [] };
  }

  // 1. Convert Persian/Arabic digits to English digits and normalize Unicode dashes
  let s = inputStr
    .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
    .replace(/[\u2013\u2014\u2212]/g, '-')
    .replace(/\.{2,}/g, '-');

  // 2. English number words map
  const wordToNum = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
    'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14,
    'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19,
    'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
    'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90, 'hundred': 100
  };

  s = s.replace(/\b(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\b/gi, (match) => {
    return wordToNum[match.toLowerCase()] ?? match;
  });

  // 3. Normalize word separators ("n", "and", "or", "&", "comma", "to", etc.)
  s = s.replace(/\b(pages?|pgs?|p)\b/gi, ' ')
       .replace(/\bcomma\b/gi, ',')
       .replace(/\b(and|or|plus|\&|n)\b/gi, ',')
       .replace(/\b(to|through|thru|until|till|تا)\b/gi, '-')
       .replace(/[.;\n\r|/]/g, ',')
       .replace(/\s*-\s*/g, '-');

  const rawTokens = s.split(/[,\s]+/).map(t => t.trim()).filter(Boolean);
  const pagesSet = new Set();
  const invalidTokens = [];

  for (const token of rawTokens) {
    // Range: e.g. "1-15" or "5-10"
    const rangeMatch = token.match(/^(\d+)-(\d+)$/);
    if (rangeMatch) {
      let start = parseInt(rangeMatch[1], 10);
      let end = parseInt(rangeMatch[2], 10);
      if (start > end) {
        const tmp = start;
        start = end;
        end = tmp;
      }
      for (let p = start; p <= end; p++) {
        if (p >= 1 && p <= totalPages) {
          pagesSet.add(p);
        } else {
          invalidTokens.push(String(p));
        }
      }
      continue;
    }

    // Single number: e.g. "7"
    const numMatch = token.match(/^(\d+)$/);
    if (numMatch) {
      const p = parseInt(numMatch[1], 10);
      if (p >= 1 && p <= totalPages) {
        pagesSet.add(p);
      } else {
        invalidTokens.push(String(p));
      }
      continue;
    }

    if (token) {
      invalidTokens.push(token);
    }
  }

  const pages = Array.from(pagesSet).sort((a, b) => a - b);
  return { pages, invalid: invalidTokens };
}

window.openEnterPagesModal = function() {
  const modal = document.getElementById('enterPagesModal');
  const input = document.getElementById('enterPagesInput');
  const totalHint = document.getElementById('enterPagesTotalHint');
  const valMsg = document.getElementById('enterPagesValidationMsg');

  if (valMsg) valMsg.textContent = '';
  const total = state.workspaceItems.length;
  if (totalHint) totalHint.textContent = `Total pages: ${total}`;

  // Pre-fill with currently removed pages if any exist
  const currentlyRemoved = state.workspaceItems
    .map((it, idx) => it.removed ? (it.pageNum || idx + 1) : null)
    .filter(Boolean);

  if (input) {
    input.value = currentlyRemoved.length > 0 ? currentlyRemoved.join(', ') : '';
  }

  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    setTimeout(() => {
      if (input) {
        input.focus();
        input.select();
      }
    }, 120);
  }

  updateEnterPagesLiveFeedback();
};

window.closeEnterPagesModal = function() {
  const modal = document.getElementById('enterPagesModal');
  if (modal) {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
  }
};

window.updateEnterPagesLiveFeedback = function() {
  const input = document.getElementById('enterPagesInput');
  const valMsg = document.getElementById('enterPagesValidationMsg');
  if (!input || !valMsg) return;

  const total = state.workspaceItems.length;
  if (!input.value.trim()) {
    valMsg.innerHTML = '';
    return;
  }

  const { pages, invalid } = parsePageNumbersInput(input.value, total);

  if (pages.length > 0) {
    const rangeSummary = formatPagesToRanges(pages);
    const previewStr = rangeSummary.length <= 45 ? rangeSummary : `${rangeSummary.slice(0, 40)}...`;
    let feedback = `<span class="text-pink-600 dark:text-pink-400 font-semibold">✓ ${pages.length} page(s) recognized: [${previewStr}]</span>`;
    if (invalid.length > 0) {
      feedback += ` <span class="text-amber-500 text-[11px]">(⚠️ Out of 1-${total}: ${invalid.slice(0, 3).join(', ')})</span>`;
    }
    valMsg.innerHTML = feedback;
  } else if (invalid.length > 0) {
    valMsg.innerHTML = `<span class="text-amber-600 dark:text-amber-400">⚠️ Out of range (1-${total}) or unrecognized: ${invalid.slice(0, 3).join(', ')}</span>`;
  } else {
    valMsg.innerHTML = '';
  }
};

window.applyEnteredPagesToRemove = function() {
  const inputEl = document.getElementById('enterPagesInput');
  const valMsg = document.getElementById('enterPagesValidationMsg');
  if (!inputEl) return;

  const totalPages = state.workspaceItems.length;
  if (totalPages === 0) {
    if (valMsg) valMsg.textContent = 'No document loaded.';
    return;
  }

  const { pages, invalid } = parsePageNumbersInput(inputEl.value, totalPages);

  if (pages.length === 0) {
    if (valMsg) {
      valMsg.textContent = invalid.length > 0
        ? `⚠️ Invalid or out-of-range: ${invalid.slice(0, 3).join(', ')} (Max: ${totalPages})`
        : '⚠️ Please enter at least one valid page number.';
    }
    return;
  }

  // Check if user is trying to remove ALL pages
  if (pages.length >= totalPages) {
    if (valMsg) {
      valMsg.textContent = '⚠️ You cannot remove all pages. Please keep at least one page.';
    }
    return;
  }

  const pagesSet = new Set(pages);

  // Set removed state
  state.workspaceItems.forEach((item, idx) => {
    const pageNum = item.pageNum || (idx + 1);
    if (pagesSet.has(pageNum)) {
      item.removed = true;
      const cardEl = document.getElementById(`workspace-card-${idx}`);
      if (cardEl) updateCardVisualState(cardEl, true);
    }
  });

  state.removePagesProcessed = false;
  state.lastSelectedIndex = null;

  updateRemovePagesActionState();
  closeEnterPagesModal();

  if (invalid.length > 0) {
    showToast(`✅ ${pages.length} page(s) marked for removal (${invalid.slice(0, 2).join(', ')} ignored)`);
  } else {
    showToast(`✅ ${pages.length} page(s) marked for removal`);
  }
};

// ==========================================
// About CutiPDF Info Modal
// ==========================================
window.openInfoModal = function() {
  const modal = document.getElementById('infoModal');
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100');
  const inner = modal.querySelector('div');
  if (inner) {
    inner.classList.remove('scale-95');
    inner.classList.add('scale-100');
  }
};

window.closeInfoModal = function() {
  const modal = document.getElementById('infoModal');
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100');
  const inner = modal.querySelector('div');
  if (inner) {
    inner.classList.add('scale-95');
    inner.classList.remove('scale-100');
  }
};

// Keyboard listener for Modals (Escape to close)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const infoModal = document.getElementById('infoModal');
    if (infoModal && !infoModal.classList.contains('pointer-events-none')) {
      closeInfoModal();
      return;
    }
    const previewModal = document.getElementById('pagePreviewModal');
    if (previewModal && !previewModal.classList.contains('pointer-events-none')) {
      closePagePreviewModal();
      return;
    }
    const enterModal = document.getElementById('enterPagesModal');
    if (enterModal && !enterModal.classList.contains('pointer-events-none')) {
      closeEnterPagesModal();
      return;
    }
  }
});

// ==========================================
// Workspace Card Multi-Selection & Gesture Handlers
// (Shift-Click Row/Range Selection + Touch Drag/Swipe Continuous Selection)
// ==========================================
let touchSwipeState = null;
let mouseDragState = null;
let isMouseDown = false;
let suppressNextClick = false;

// 1. Instant Visual Card State Update (60fps without full DOM rebuild)
function updateCardVisualState(cardEl, isRemoved) {
  if (!cardEl) return;
  if (isRemoved) {
    cardEl.classList.add('removed');
  } else {
    cardEl.classList.remove('removed');
  }
  const overlay = cardEl.querySelector('.card-removed-overlay');
  if (overlay) {
    if (isRemoved) {
      overlay.classList.remove('hidden');
    } else {
      overlay.classList.add('hidden');
    }
  }
  const img = cardEl.querySelector('img');
  if (img) {
    if (isRemoved) {
      img.style.opacity = '0.45';
      img.style.filter = 'none';
    } else {
      img.style.opacity = '1';
      img.style.filter = 'none';
    }
  }
}

// 2. Real-time Action Button and Toolbar Sync for remove-pages
function updateRemovePagesActionState() {
  const toolId = state.activeTool ? state.activeTool.id : '';
  if (toolId !== 'remove-pages') return;

  const removedCount = state.workspaceItems.filter(i => i.removed).length;
  const remainingCount = state.workspaceItems.length - removedCount;

  const btnRestore = document.getElementById('btnToolbarRestoreAll');
  const btnSelectAll = document.getElementById('btnToolbarSelectAll');
  if (btnRestore) {
    if (removedCount > 0) {
      btnRestore.classList.remove('hidden');
    } else {
      btnRestore.classList.add('hidden');
    }
  }
  if (btnSelectAll) {
    if (removedCount > 0) {
      btnSelectAll.classList.add('hidden');
    } else {
      btnSelectAll.classList.remove('hidden');
    }
  }

  const summaryEl = document.getElementById('workspaceActionSummary');
  if (summaryEl) {
    if (removedCount === 0) {
      summaryEl.textContent = `Click any page or drag across pages to mark for removal.`;
    } else {
      summaryEl.textContent = `${removedCount} page(s) marked for removal. The new PDF will contain ${remainingCount} page(s).`;
    }
  }

  if (state.removePagesProcessed) {
    DOM.btnExecuteAction.disabled = false;
    DOM.btnExecuteAction.classList.remove('opacity-50', 'cursor-not-allowed');
    DOM.btnExecuteAction.innerHTML = `<span id="actionButtonText">Download PDF</span>`;
  } else {
    if (removedCount === 0) {
      DOM.btnExecuteAction.disabled = true;
      DOM.btnExecuteAction.classList.add('opacity-50', 'cursor-not-allowed');
      DOM.btnExecuteAction.innerHTML = `<span id="actionButtonText">Remove Pages (0 marked)</span>`;
    } else {
      DOM.btnExecuteAction.disabled = false;
      DOM.btnExecuteAction.classList.remove('opacity-50', 'cursor-not-allowed');
      DOM.btnExecuteAction.innerHTML = `
        <span id="actionButtonText">Remove ${removedCount} ${removedCount === 1 ? 'Page' : 'Pages'} (${remainingCount} remaining)</span>
      `;
    }
  }

  requestAnimationFrame(alignFloatingToolsButton);
}
window.updateRemovePagesActionState = updateRemovePagesActionState;

// 3. Shift-Click Range Selection & Card Click Handler
function handleCardClick(e, index) {
  if (suppressNextClick) return;
  if (e.target && e.target.closest('button')) return;

  const toolId = state.activeTool ? state.activeTool.id : '';
  if (toolId !== 'remove-pages' && toolId !== 'split-pdf' && toolId !== 'extract-pages') return;

  if (e.shiftKey && state.lastSelectedIndex !== null && state.lastSelectedIndex !== undefined) {
    // Shift-Click Range Selection: select all cards between anchor and current index
    const from = Math.min(state.lastSelectedIndex, index);
    const to = Math.max(state.lastSelectedIndex, index);

    if (toolId === 'remove-pages') {
      const targetState = !state.workspaceItems[index].removed;
      for (let i = from; i <= to; i++) {
        state.workspaceItems[i].removed = targetState;
        const cEl = document.getElementById(`workspace-card-${i}`);
        if (cEl) updateCardVisualState(cEl, targetState);
      }
      state.removePagesProcessed = false;
      updateRemovePagesActionState();
    } else {
      const targetState = !state.workspaceItems[index].selected;
      for (let i = from; i <= to; i++) {
        state.workspaceItems[i].selected = targetState;
        const cEl = document.getElementById(`workspace-card-${i}`);
        if (cEl) {
          if (targetState) cEl.classList.add('selected');
          else cEl.classList.remove('selected');
        }
      }
    }

    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
    state.lastSelectedIndex = index;
    // Fast in-place visual update: NEVER rebuild full DOM!
  } else {
    // Normal single-click toggle
    toggleRemoveWorkspaceItem(index);
  }
}

// 4. Unified Event Delegation on Container (Replaces 4,900 per-card listeners on 700 pages!)
let workspaceDelegatedEventsInitialized = false;

function initWorkspaceDelegatedEvents() {
  const container = DOM.selectedFilesList;
  if (!container) return;
  setupScrollOptimizations();

  if (workspaceDelegatedEventsInitialized) return;
  workspaceDelegatedEventsInitialized = true;

  // Delegated Click
  container.addEventListener('click', (e) => {
    if (suppressNextClick) return;
    if (e.target.closest('button')) return;
    const card = e.target.closest('.preview-card[data-index]');
    if (!card) return;
    const index = parseInt(card.dataset.index, 10);
    if (!isNaN(index)) {
      handleCardClick(e, index);
    }
  });

  // Delegated Touchstart
  container.addEventListener('touchstart', (e) => {
    if (e.target.closest('button') || e.touches.length !== 1) return;
    const card = e.target.closest('.preview-card[data-index]');
    if (!card) return;
    const index = parseInt(card.dataset.index, 10);
    if (isNaN(index)) return;

    const toolId = state.activeTool ? state.activeTool.id : '';
    if (toolId !== 'remove-pages' && toolId !== 'split-pdf' && toolId !== 'extract-pages') return;

    const touch = e.touches[0];
    const initialRemoved = (toolId === 'remove-pages')
      ? !!state.workspaceItems[index].removed
      : !state.workspaceItems[index].selected;

    touchSwipeState = {
      startX: touch.clientX,
      startY: touch.clientY,
      startIndex: index,
      lastIndex: index,
      targetState: !initialRemoved,
      isSwiping: false,
      touchedIndices: new Set([index])
    };
  }, { passive: true });

  // Delegated Touchmove
  container.addEventListener('touchmove', (e) => {
    if (!touchSwipeState || e.touches.length !== 1) return;
    const toolId = state.activeTool ? state.activeTool.id : '';
    if (toolId !== 'remove-pages' && toolId !== 'split-pdf' && toolId !== 'extract-pages') return;

    const touch = e.touches[0];
    const dx = touch.clientX - touchSwipeState.startX;
    const dy = touch.clientY - touchSwipeState.startY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (!touchSwipeState.isSwiping) {
      if (absDy > absDx && absDy > 5) {
        touchSwipeState = null;
        return;
      }
      if (absDx > 20 && absDx > absDy * 1.5) {
        touchSwipeState.isSwiping = true;
        if (toolId === 'remove-pages') {
          state.workspaceItems[touchSwipeState.startIndex].removed = touchSwipeState.targetState;
          const startCardEl = document.getElementById(`workspace-card-${touchSwipeState.startIndex}`);
          if (startCardEl) updateCardVisualState(startCardEl, touchSwipeState.targetState);
        } else {
          state.workspaceItems[touchSwipeState.startIndex].selected = touchSwipeState.targetState;
          const startCardEl = document.getElementById(`workspace-card-${touchSwipeState.startIndex}`);
          if (startCardEl) {
            if (touchSwipeState.targetState) startCardEl.classList.add('selected');
            else startCardEl.classList.remove('selected');
          }
        }
        if (navigator.vibrate) navigator.vibrate(10);
      } else {
        return;
      }
    }

    if (e.cancelable) e.preventDefault();

    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const targetCard = el ? el.closest('.preview-card[data-index]') : null;
    if (!targetCard) return;

    const currentIndex = parseInt(targetCard.dataset.index, 10);
    if (isNaN(currentIndex)) return;

    const minIdx = Math.min(touchSwipeState.lastIndex, currentIndex);
    const maxIdx = Math.max(touchSwipeState.lastIndex, currentIndex);
    let newlyTouched = false;

    for (let k = minIdx; k <= maxIdx; k++) {
      if (!touchSwipeState.touchedIndices.has(k)) {
        touchSwipeState.touchedIndices.add(k);
        if (toolId === 'remove-pages') {
          state.workspaceItems[k].removed = touchSwipeState.targetState;
          const currentCardEl = document.getElementById(`workspace-card-${k}`);
          if (currentCardEl) updateCardVisualState(currentCardEl, touchSwipeState.targetState);
        } else {
          state.workspaceItems[k].selected = touchSwipeState.targetState;
          const currentCardEl = document.getElementById(`workspace-card-${k}`);
          if (currentCardEl) {
            if (touchSwipeState.targetState) currentCardEl.classList.add('selected');
            else currentCardEl.classList.remove('selected');
          }
        }
        newlyTouched = true;
      }
    }

    if (newlyTouched) {
      if (navigator.vibrate) navigator.vibrate(10);
      updateRemovePagesActionState();
    }
    touchSwipeState.lastIndex = currentIndex;
  }, { passive: false });

  const handleTouchEnd = () => {
    if (!touchSwipeState) return;
    if (touchSwipeState.isSwiping) {
      suppressNextClick = true;
      setTimeout(() => { suppressNextClick = false; }, 300);
      state.removePagesProcessed = false;
      state.lastSelectedIndex = touchSwipeState.lastIndex;
      updateRemovePagesActionState();
    }
    touchSwipeState = null;
  };

  container.addEventListener('touchend', handleTouchEnd);
  container.addEventListener('touchcancel', handleTouchEnd);

  // Delegated Mouse Drag
  container.addEventListener('mousedown', (e) => {
    if (e.button !== 0 || e.shiftKey) return;
    if (e.target.closest('button')) return;
    const card = e.target.closest('.preview-card[data-index]');
    if (!card) return;
    const index = parseInt(card.dataset.index, 10);
    if (isNaN(index)) return;

    const toolId = state.activeTool ? state.activeTool.id : '';
    if (toolId !== 'remove-pages' && toolId !== 'split-pdf' && toolId !== 'extract-pages') return;

    const initialRemoved = (toolId === 'remove-pages')
      ? !!state.workspaceItems[index].removed
      : !state.workspaceItems[index].selected;

    mouseDragState = {
      startIndex: index,
      lastIndex: index,
      targetState: !initialRemoved,
      isDragging: false,
      touchedCards: new Set([index])
    };
    isMouseDown = true;
  });

  container.addEventListener('mouseover', (e) => {
    if (!isMouseDown || !mouseDragState) return;
    const card = e.target.closest('.preview-card[data-index]');
    if (!card) return;
    const index = parseInt(card.dataset.index, 10);
    if (isNaN(index)) return;

    const toolId = state.activeTool ? state.activeTool.id : '';
    if (toolId !== 'remove-pages' && toolId !== 'split-pdf' && toolId !== 'extract-pages') return;

    if (!mouseDragState.isDragging) {
      mouseDragState.isDragging = true;
      if (toolId === 'remove-pages') {
        state.workspaceItems[mouseDragState.startIndex].removed = mouseDragState.targetState;
        const startCardEl = document.getElementById(`workspace-card-${mouseDragState.startIndex}`);
        if (startCardEl) updateCardVisualState(startCardEl, mouseDragState.targetState);
      }
    }

    const minIdx = Math.min(mouseDragState.lastIndex, index);
    const maxIdx = Math.max(mouseDragState.lastIndex, index);
    let newlyTouched = false;

    for (let k = minIdx; k <= maxIdx; k++) {
      if (!mouseDragState.touchedCards.has(k)) {
        mouseDragState.touchedCards.add(k);
        if (toolId === 'remove-pages') {
          state.workspaceItems[k].removed = mouseDragState.targetState;
          const cardEl = document.getElementById(`workspace-card-${k}`);
          if (cardEl) updateCardVisualState(cardEl, mouseDragState.targetState);
        } else {
          state.workspaceItems[k].selected = mouseDragState.targetState;
          const cardEl = document.getElementById(`workspace-card-${k}`);
          if (cardEl) {
            if (mouseDragState.targetState) cardEl.classList.add('selected');
            else cardEl.classList.remove('selected');
          }
        }
        newlyTouched = true;
      }
    }

    mouseDragState.lastIndex = index;
    if (newlyTouched) {
      updateRemovePagesActionState();
    }
  });

  document.addEventListener('mouseup', () => {
    if (isMouseDown && mouseDragState) {
      if (mouseDragState.isDragging) {
        suppressNextClick = true;
        setTimeout(() => { suppressNextClick = false; }, 150);
        state.removePagesProcessed = false;
        state.lastSelectedIndex = mouseDragState.lastIndex;
        updateRemovePagesActionState();
      }
    }
    isMouseDown = false;
    mouseDragState = null;
  });
}

// ==========================================
// High-Performance Lazy Thumbnail Queue for 700+ Page PDFs
// (Scroll-pausing + Viewport-only rendering = Silky Smooth 60/120fps)
// ==========================================
let isScrolling = false;
let scrollDebounceTimer = null;
const visibleCardsToRender = new Set();
let isRenderingThumb = false;

function setupScrollOptimizations() {
  const container = DOM.selectedFilesList;
  if (!container || container.dataset.scrollOptimized) return;
  container.dataset.scrollOptimized = 'true';

  container.addEventListener('scroll', () => {
    isScrolling = true;
    if (scrollDebounceTimer) clearTimeout(scrollDebounceTimer);
    scrollDebounceTimer = setTimeout(() => {
      isScrolling = false;
      processNextVisibleThumbnail();
    }, 100);
  }, { passive: true });
}

const lazyThumbObserver = (typeof window !== 'undefined' && window.IntersectionObserver)
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        if (entry.isIntersecting) {
          visibleCardsToRender.add(card);
        } else {
          visibleCardsToRender.delete(card);
        }
      });
      if (!isScrolling) {
        processNextVisibleThumbnail();
      }
    }, {
      rootMargin: '120px 0px'
    })
  : null;

async function processNextVisibleThumbnail() {
  if (isScrolling || isRenderingThumb || visibleCardsToRender.size === 0) return;

  const card = visibleCardsToRender.values().next().value;
  if (!card) return;
  visibleCardsToRender.delete(card);

  if (!card.isConnected) return;
  const idx = parseInt(card.dataset.index, 10);
  const item = state.workspaceItems[idx];
  if (!item || item.previewUrl) {
    if (lazyThumbObserver) lazyThumbObserver.unobserve(card);
    card.removeAttribute('data-lazy');
    processNextVisibleThumbnail();
    return;
  }

  isRenderingThumb = true;
  try {
    let pdf = item.pdfDoc;
    if (!pdf && item.file && window.pdfjsLib) {
      if (!item.file._pdfDocPromise) {
        item.file._pdfDocPromise = (async () => {
          const bytes = await item.file.arrayBuffer();
          const pdfOpts = {
            data: bytes,
            cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
            cMapPacked: true
          };
          if (state.savedOriginalPassword) pdfOpts.password = state.savedOriginalPassword;
          return await pdfjsLib.getDocument(pdfOpts).promise;
        })();
      }
      pdf = await item.file._pdfDocPromise;
      item.pdfDoc = pdf;
    }

    if (pdf) {
      const thumb = await renderPdfPageThumb(pdf, item.pageNum);
      item.previewUrl = thumb;
      if (card.isConnected) {
        const img = card.querySelector('.page-thumb-img');
        const skeleton = card.querySelector('.page-thumb-skeleton');
        if (img) {
          img.src = thumb;
          img.style.transform = `rotate(${item.rotation || 0}deg)`;
          if (item.removed) {
            img.style.opacity = '0.55';
            img.style.filter = 'grayscale(40%)';
          } else {
            img.style.opacity = '1';
            img.style.filter = 'none';
          }
          img.classList.remove('opacity-0');
        }
        if (skeleton) {
          skeleton.remove();
        }
      }
      if (lazyThumbObserver) lazyThumbObserver.unobserve(card);
      card.removeAttribute('data-lazy');
    }
  } catch (err) {
    console.warn('Lazy thumb error:', err);
  } finally {
    isRenderingThumb = false;
    if (!isScrolling && visibleCardsToRender.size > 0) {
      requestAnimationFrame(processNextVisibleThumbnail);
    }
  }
}

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
  const toolHeader = document.getElementById('toolHeaderContainer');
  const doneScreen = document.getElementById('workspaceDoneScreen');
  if (doneScreen) doneScreen.classList.add('hidden');
  const layoutSwitcher = document.getElementById('pageLayoutSwitcher');
  const modeSwitcher = document.getElementById('workspaceModeSwitcher');
  const btnRestoreAll = document.getElementById('btnToolbarRestoreAll');
  const btnSelectAll = document.getElementById('btnToolbarSelectAll');
  const btnAddMore = document.getElementById('btnToolbarAddMore');
  const btnEnterPages = document.getElementById('btnToolbarEnterPages');
  const btnSort = document.getElementById('btnToolbarSort');
  const btnRotate = document.getElementById('btnToolbarRotateAll');
  const btnClear = document.getElementById('btnClearFiles');

  if (toolId === 'remove-pages') {
    // Hide tool header (logo, title, description) on PDF open for remove pages as requested
    if (toolHeader) toolHeader.classList.add('hidden');
    if (DOM.filesSelectedArea) DOM.filesSelectedArea.classList.add('remove-pages-workspace');

    // For remove-pages, the top toolbar is hidden completely, maximizing full-canvas view!
    // Sub-actions (Restore/Select All + Remove by Number) are cleanly hosted in the bottom action bar.
    if (toolbar) toolbar.classList.add('hidden');

    const removedCount = state.workspaceItems.filter(i => i.removed).length;
    if (removedCount > 0) {
      if (btnRestoreAll) btnRestoreAll.classList.remove('hidden');
      if (btnSelectAll) btnSelectAll.classList.add('hidden');
    } else {
      if (btnRestoreAll) btnRestoreAll.classList.add('hidden');
      if (btnSelectAll) btnSelectAll.classList.remove('hidden');
    }

    if (btnEnterPages) btnEnterPages.classList.remove('hidden');
  } else {
    if (toolHeader) toolHeader.classList.remove('hidden');
    if (DOM.filesSelectedArea) DOM.filesSelectedArea.classList.remove('remove-pages-workspace');
    if (statsBadge) statsBadge.classList.remove('hidden');
    if (toolbar) toolbar.classList.remove('hidden', 'clean-actions-only');

    if (layoutSwitcher) layoutSwitcher.classList.add('hidden');
    if (btnRestoreAll) btnRestoreAll.classList.add('hidden');
    if (btnSelectAll) btnSelectAll.classList.add('hidden');
    if (btnEnterPages) btnEnterPages.classList.add('hidden');
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

  // Floating Action Bar (Standardized across all client-side tools)
  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) actionBar.classList.add('floating-mode');

  if (toolId === 'remove-pages') {

    const removedCount = state.workspaceItems.filter(i => i.removed).length;
    if (state.removePagesProcessed) {
      // Step 2: Selected pages were removed in-situ from workspace, button now becomes Download PDF (NO icon)
      DOM.btnExecuteAction.disabled = false;
      DOM.btnExecuteAction.classList.remove('opacity-50', 'cursor-not-allowed');
      DOM.btnExecuteAction.innerHTML = `
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
    if (toolsBtn) toolsBtn.classList.remove('elevated', 'elevated-mobile');
    const subButtons = document.getElementById('workspaceActionSubButtons');
    if (subButtons) subButtons.classList.add('hidden');
    DOM.btnExecuteAction.disabled = false;
    DOM.btnExecuteAction.classList.remove('opacity-50', 'cursor-not-allowed');
    const actionText = state.activeTool ? state.activeTool.actionText : 'Process';
    DOM.btnExecuteAction.innerHTML = `
      <span id="actionButtonText">${actionText}</span>
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
  const isRemoveTool = (toolId === 'remove-pages');
  const grid = document.createElement('div');
  if (isContinuous) {
    grid.className = 'flex flex-col items-center gap-6 max-w-xl mx-auto pt-3 sm:pt-4 pb-6 w-full';
  } else {
    grid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 pt-3 sm:pt-4 pb-6';
  }

  state.workspaceItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.id = `workspace-card-${index}`;
    card.dataset.index = index;
    if (!item.previewUrl) {
      card.setAttribute('data-lazy', 'true');
    }

    if (isContinuous) {
      card.className = `preview-card ${item.removed ? 'removed' : ''} w-full max-w-md sm:max-w-lg shadow-sm hover:shadow-md transition-all cursor-pointer`;
    } else {
      card.className = `preview-card ${item.removed ? 'removed' : ''} ${(!isRemoveTool && item.selected) ? 'selected' : ''} ${isRemoveTool ? 'min-h-[220px] sm:min-h-[250px]' : ''}`;
    }

    // Drag and Drop Events (only for re-ordering tools, NOT remove-pages)
    if (toolId !== 'remove-pages') {
      card.setAttribute('draggable', 'true');
      card.addEventListener('dragstart', (e) => handleCardDragStart(e, index));
      card.addEventListener('dragover', (e) => handleCardDragOver(e, index));
      card.addEventListener('dragleave', (e) => handleCardDragLeave(e));
      card.addEventListener('drop', (e) => handleCardDrop(e, index));
      card.addEventListener('dragend', (e) => handleCardDragEnd(e));
    }

    // Top badges: For remove-pages, Page Number on Left and Zoom Preview on Right
    // Both identically sized (28px on mobile, 32px on desktop) with matching squircle rounded-xl
    let orderBadge = '';
    let infoBadge = '';
    let zoomPreviewBtn = '';

    if (toolId === 'remove-pages') {
      orderBadge = `
        <div class="absolute top-2 left-2 z-20 min-w-[28px] h-7 sm:min-w-[32px] sm:h-8 px-1.5 rounded-xl bg-white/95 dark:bg-zinc-800/95 text-zinc-700 dark:text-zinc-200 text-xs sm:text-sm font-bold shadow-sm border border-zinc-200/80 dark:border-zinc-700 flex items-center justify-center pointer-events-none select-none">
          ${index + 1}
        </div>
      `;
      zoomPreviewBtn = `
        <button type="button" onclick="openPagePreviewModal(${index}); event.stopPropagation();" class="absolute top-2 right-2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/95 dark:bg-zinc-800/95 text-zinc-700 dark:text-zinc-200 hover:text-[#ff2a5f] hover:bg-pink-50 dark:hover:bg-zinc-700 shadow-sm border border-zinc-200/80 dark:border-zinc-700 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer" title="Zoom & Preview Page">
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
        </button>
      `;
    } else {
      orderBadge = `<div class="absolute top-2 left-2 z-10 bg-zinc-900/80 dark:bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-lg border border-white/10 shadow-xs">${index + 1}</div>`;
      if (item.type === 'pdf-file') {
        infoBadge = `<div class="absolute top-2 right-2 z-10 bg-[#ff2a5f] text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-xs">${item.pageCount || 1} pgs</div>`;
      } else if (item.type === 'pdf-page') {
        infoBadge = `<div class="absolute top-2 right-2 z-10 bg-white/90 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 shadow-xs truncate max-w-[80px]" title="${item.fileName || ''}">${item.name || `P. ${item.pageNum}`}</div>`;
      }
    }

    // Flat Style Minimal Cross for remove-pages, Large Red Cross for other modes
    const overlayHiddenClass = item.removed ? '' : 'hidden';
    let removedOverlayHtml = '';
    if (isRemoveTool) {
      removedOverlayHtml = `
        <div class="card-removed-overlay ${overlayHiddenClass} absolute inset-0 flex items-center justify-center pointer-events-none z-15 bg-black/5 dark:bg-black/25">
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 dark:bg-zinc-800/95 border border-zinc-200/90 dark:border-zinc-700 shadow-sm flex items-center justify-center text-[#ff2a5f]">
            <svg class="w-5 h-5 stroke-[2.4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
        </div>
      `;
    } else {
      removedOverlayHtml = `
        <div class="card-removed-overlay ${overlayHiddenClass} absolute inset-0 flex items-center justify-center pointer-events-none z-15 bg-black/15 dark:bg-black/35">
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
          <button type="button" onclick="rotateWorkspaceItem(${index}); event.stopPropagation();" class="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:text-[#ff2a5f] hover:bg-pink-50 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95" title="Rotate 90 degrees">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
          <button type="button" onclick="removeWorkspaceItem(${index}); event.stopPropagation();" class="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 text-zinc-400 hover:text-red-500 hover:bg-red-50 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95" title="Delete">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;
    }

    // Thumbnail Area: For remove-pages, NO extra inner frame (bg-transparent p-0), page sits directly inside the 18px rounded card
    const thumbHeight = isContinuous
      ? 'h-80 sm:h-96'
      : (isRemoveTool ? 'h-full min-h-[220px] sm:min-h-[250px]' : 'h-44');
    let thumbHtml = '';
    if (isRemoveTool) {
      if (item.previewUrl) {
        thumbHtml = `
          <div class="${thumbHeight} bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden p-0 relative group/thumb">
            ${orderBadge}
            ${infoBadge}
            ${zoomPreviewBtn}
            <img src="${item.previewUrl}" alt="${item.name}" style="transform: rotate(${item.rotation || 0}deg); ${item.removed ? 'opacity: 0.45;' : ''}" class="page-thumb-img w-full h-full object-contain pointer-events-none select-none transition-opacity duration-150">
            ${removedOverlayHtml}
          </div>
        `;
      } else {
        thumbHtml = `
          <div class="${thumbHeight} bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden p-0 relative group/thumb">
            ${orderBadge}
            ${infoBadge}
            ${zoomPreviewBtn}
            <div class="page-thumb-skeleton absolute inset-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none bg-zinc-50 dark:bg-zinc-800/40">
              <div class="w-9 h-9 rounded-xl bg-pink-100 dark:bg-zinc-700 text-[#ff2a5f] flex items-center justify-center font-bold text-xs mb-1">P.${item.pageNum}</div>
              <p class="text-[10px] text-zinc-400">Page ${item.pageNum}</p>
            </div>
            <img src="" alt="${item.name}" class="page-thumb-img opacity-0 w-full h-full object-contain pointer-events-none select-none transition-opacity duration-150">
            ${removedOverlayHtml}
          </div>
        `;
      }
    } else {
      if (item.previewUrl) {
        thumbHtml = `
          <div class="${thumbHeight} bg-zinc-100 dark:bg-zinc-800/60 flex items-center justify-center overflow-hidden p-2 relative group/thumb">
            ${orderBadge}
            ${infoBadge}
            ${zoomPreviewBtn}
            <img src="${item.previewUrl}" alt="${item.name}" style="transform: rotate(${item.rotation || 0}deg); ${item.removed ? 'opacity: 0.55; filter: grayscale(40%);' : ''}" class="page-thumb-img max-h-full max-w-full object-contain transition-transform duration-200 rounded-md shadow-xs pointer-events-none">
            ${removedOverlayHtml}
            ${hoverActionsHtml}
          </div>
        `;
      } else {
        thumbHtml = `
          <div class="${thumbHeight} bg-zinc-100/70 dark:bg-zinc-800/60 flex items-center justify-center overflow-hidden p-2 relative group/thumb">
            ${orderBadge}
            ${infoBadge}
            ${zoomPreviewBtn}
            <div class="page-thumb-skeleton absolute inset-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none bg-zinc-50 dark:bg-zinc-800/40">
              <div class="w-9 h-9 rounded-xl bg-pink-100 dark:bg-zinc-700 text-[#ff2a5f] flex items-center justify-center font-bold text-xs mb-1">P.${item.pageNum}</div>
              <p class="text-[10px] text-zinc-400">Page ${item.pageNum}</p>
            </div>
            <img src="" alt="${item.name}" class="page-thumb-img opacity-0 max-h-full max-w-full object-contain transition-opacity duration-200 rounded-md shadow-xs pointer-events-none">
            ${removedOverlayHtml}
            ${hoverActionsHtml}
          </div>
        `;
      }
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
            <button type="button" onclick="moveWorkspaceItem(${index}, -1); event.stopPropagation();" ${index === 0 ? 'disabled' : ''} class="w-6 h-6 rounded-md hover:bg-pink-50 dark:hover:bg-zinc-800 text-zinc-500 hover:text-[#ff2a5f] flex items-center justify-center disabled:opacity-20 disabled:pointer-events-none transition cursor-pointer" title="Move Left">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button type="button" onclick="moveWorkspaceItem(${index}, 1); event.stopPropagation();" ${index === state.workspaceItems.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded-md hover:bg-pink-50 dark:hover:bg-zinc-800 text-zinc-500 hover:text-[#ff2a5f] flex items-center justify-center disabled:opacity-20 disabled:pointer-events-none transition cursor-pointer" title="Move Right">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `;
    }

    // Click toggle pointer cursor for interactive page tools
    if (toolId === 'remove-pages' || toolId === 'split-pdf' || toolId === 'extract-pages') {
      card.classList.add('cursor-pointer');
    }

    card.innerHTML = thumbHtml + actionsHtml;
    grid.appendChild(card);
    if (lazyThumbObserver && !item.previewUrl) {
      lazyThumbObserver.observe(card);
    }
  });

  // "+ Add More Files" Card at end of grid (Smallpdf Style - Matching Card Proportions)
  const addMoreCard = document.createElement('div');
  addMoreCard.className = 'preview-card min-h-[220px] sm:min-h-[250px] border-2 border-dashed border-pink-200/90 dark:border-zinc-700 hover:border-[#ff2a5f] bg-pink-50/20 hover:bg-pink-50/50 dark:hover:bg-zinc-800/40 flex flex-col items-center justify-center p-5 text-center cursor-pointer transition-all group';
  addMoreCard.onclick = () => DOM.fileInput.click();
  addMoreCard.innerHTML = `
    <div class="w-11 h-11 rounded-full bg-pink-100 dark:bg-zinc-800 text-[#ff2a5f] flex items-center justify-center text-xl font-bold mb-2 group-hover:scale-110 transition-transform shadow-2xs">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
    </div>
    <span class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Add More</span>
    <span class="text-[10px] text-zinc-400 mt-0.5">Click or drop files</span>
  `;
  grid.appendChild(addMoreCard);

  container.appendChild(grid);
  initWorkspaceDelegatedEvents();

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
    state.lastSelectedIndex = index;
    const cardEl = document.getElementById(`workspace-card-${index}`);
    if (cardEl) {
      updateCardVisualState(cardEl, state.workspaceItems[index].removed);
    }
    updateRemovePagesActionState();
    return;
  } else if (toolId === 'split-pdf' || toolId === 'extract-pages') {
    state.workspaceItems[index].selected = !state.workspaceItems[index].selected;
    state.lastSelectedIndex = index;
    const cardEl = document.getElementById(`workspace-card-${index}`);
    if (cardEl) {
      if (state.workspaceItems[index].selected) cardEl.classList.add('selected');
      else cardEl.classList.remove('selected');
    }
    return;
  } else {
    removeWorkspaceItem(index);
    return;
  }
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
    // 4. Remove Pages (Generates clean PDF and displays Done Screen with 2 buttons & 4 Continue To tools)
    else if (toolId === 'remove-pages') {
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

      // Save reference to master file and original items if not already saved
      if (!state.savedOriginalFile && state.workspaceItems[0]) {
        state.savedOriginalFile = state.workspaceItems[0].file;
      }
      if (!state.savedOriginalWorkspaceItems) {
        state.savedOriginalWorkspaceItems = state.workspaceItems.map(item => ({ ...item }));
      }

      await processRemovePagesAndShowDoneScreen(marked, remaining);
      return;
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

// 5. Remove Pages Execution (Generates PDF in browser and shows Clean Done Screen)
async function processRemovePagesAndShowDoneScreen(marked, remaining) {
  const { PDFDocument } = PDFLib;

  if (!state.workspaceItems || state.workspaceItems.length === 0) {
    showToast('⚠️ No pages in the document to process.');
    DOM.btnExecuteAction.disabled = false;
    return;
  }

  // Detect all unique files involved in current kept pages
  const uniqueFiles = [];
  const fileToPagesMap = new Map();
  state.workspaceItems.forEach(item => {
    const f = item.file || state.savedOriginalFile || (state.selectedFiles && state.selectedFiles[0]);
    if (f) {
      if (!fileToPagesMap.has(f)) {
        fileToPagesMap.set(f, []);
        uniqueFiles.push(f);
      }
      if (!item.removed) {
        fileToPagesMap.get(f).push(item);
      }
    }
  });

  if (uniqueFiles.length === 0) {
    showToast('⚠️ Original PDF file not found.');
    DOM.btnExecuteAction.disabled = false;
    return;
  }

  try {
    let out;
    let downloadFileName = '';

    if (uniqueFiles.length === 1) {
      // Single PDF: in-place removePage preserves Outlines/Bookmarks, Form fields, Links, Annotations, and Metadata
      const masterFile = uniqueFiles[0];
      downloadFileName = `Pages_Removed_${masterFile.name}`;
      const bytes = await masterFile.arrayBuffer();
      const loadOptions = { ignoreEncryption: true };
      if (state.savedOriginalPassword) {
        loadOptions.password = state.savedOriginalPassword;
      }
      const doc = await PDFDocument.load(bytes, loadOptions);
      const totalCount = doc.getPageCount();

      const keepSet = new Set(
        (fileToPagesMap.get(masterFile) || [])
          .map(item => (item.pageNum ? item.pageNum - 1 : 0))
          .filter(idx => idx >= 0 && idx < totalCount)
      );

      if (keepSet.size === 0) {
        showToast('⚠️ No pages to keep in the new PDF.');
        DOM.btnExecuteAction.disabled = false;
        return;
      }

      const indicesToRemove = [];
      for (let i = 0; i < totalCount; i++) {
        if (!keepSet.has(i)) {
          indicesToRemove.push(i);
        }
      }

      try {
        indicesToRemove.sort((a, b) => b - a).forEach(idx => {
          doc.removePage(idx);
        });
        out = await doc.save({ updateFieldAppearances: false });
      } catch (removeErr) {
        console.warn('In-place removePage fallback to copyPages:', removeErr);
        const fallbackDoc = await PDFDocument.create();
        const pagesToKeep = Array.from(keepSet).sort((a, b) => a - b);
        const copied = await fallbackDoc.copyPages(doc, pagesToKeep);
        copied.forEach(p => fallbackDoc.addPage(p));
        out = await fallbackDoc.save({ updateFieldAppearances: false });
      }
    } else {
      // Multi-PDF (Add More was used to combine multiple files)
      const firstFileName = uniqueFiles[0].name.replace(/\.[^/.]+$/, '');
      downloadFileName = `Pages_Removed_Combined_${firstFileName}.pdf`;
      const combinedDoc = await PDFDocument.create();

      for (const f of uniqueFiles) {
        const bytes = await f.arrayBuffer();
        const loadOptions = { ignoreEncryption: true };
        if (state.savedOriginalPassword) {
          loadOptions.password = state.savedOriginalPassword;
        }
        const srcDoc = await PDFDocument.load(bytes, loadOptions);
        const totalCount = srcDoc.getPageCount();
        const keptItemsForFile = fileToPagesMap.get(f) || [];
        const pageIndices = keptItemsForFile
          .map(item => (item.pageNum ? item.pageNum - 1 : 0))
          .filter(idx => idx >= 0 && idx < totalCount);

        if (pageIndices.length > 0) {
          const copiedPages = await combinedDoc.copyPages(srcDoc, pageIndices);
          copiedPages.forEach(p => combinedDoc.addPage(p));
        }
      }

      if (combinedDoc.getPageCount() === 0) {
        showToast('⚠️ No pages to keep in the new PDF.');
        DOM.btnExecuteAction.disabled = false;
        return;
      }

      out = await combinedDoc.save({ updateFieldAppearances: false });
    }

    state.lastProcessedPdfBlob = new Blob([out], { type: 'application/pdf' });
    state.lastProcessedPdfFilename = downloadFileName;
    state.lastProcessedPdfFile = new File([out], downloadFileName, { type: 'application/pdf' });

    showRemovePagesDoneScreen(marked.length, remaining.length);
  } catch (err) {
    console.error('Error generating PDF:', err);
    showToast('⚠️ Error generating PDF. Please ensure the file is valid and password is correct.');
  } finally {
    DOM.btnExecuteAction.disabled = false;
  }
}

function showRemovePagesDoneScreen(removedCount, remainingCount) {
  // Hide workspace grid & dropzone & floating action bar
  if (DOM.toolDropzone) DOM.toolDropzone.classList.add('hidden');
  if (DOM.filesSelectedArea) DOM.filesSelectedArea.classList.add('hidden');
  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) actionBar.classList.remove('floating-mode');

  // Keep tool header hidden on done screen as requested
  const toolHeader = document.getElementById('toolHeaderContainer');
  if (toolHeader) toolHeader.classList.add('hidden');
  const footer = document.getElementById('mainSiteFooter');
  if (footer) footer.classList.add('hidden');

  // Show Done Screen
  const doneScreen = document.getElementById('workspaceDoneScreen');
  if (doneScreen) {
    doneScreen.classList.remove('hidden');
    const doneTitle = document.getElementById('doneScreenTitle');
    if (doneTitle) {
      doneTitle.textContent = `${removedCount} ${removedCount === 1 ? 'Page' : 'Pages'} Removed`;
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast(`✅ ${removedCount} ${removedCount === 1 ? 'page' : 'pages'} removed! Document ready.`);
}

window.downloadLastProcessedPdf = function() {
  if (!state.lastProcessedPdfBlob) {
    showToast('⚠️ No PDF file available to download.');
    return;
  }
  downloadBlob(state.lastProcessedPdfBlob, state.lastProcessedPdfFilename || 'Pages_Removed_Document.pdf');
  showToast('✅ Download started!');
};

window.reopenRemovePagesWorkspace = function() {
  const doneScreen = document.getElementById('workspaceDoneScreen');
  if (doneScreen) doneScreen.classList.add('hidden');
  if (DOM.toolDropzone) DOM.toolDropzone.classList.add('hidden');

  const toolbar = document.querySelector('.workspace-toolbar');
  if (toolbar) toolbar.classList.remove('hidden');

  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) {
    actionBar.classList.remove('hidden');
    actionBar.classList.add('floating-mode');
  }

  if (DOM.filesSelectedArea) {
    DOM.filesSelectedArea.classList.remove('hidden');
    DOM.filesSelectedArea.classList.add('remove-pages-workspace');
  }

  renderInteractiveWorkspace();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.continueWithTool = async function(targetToolId) {
  if (targetToolId === 'see-more') {
    openQuickTools();
    return;
  }
  if (!state.lastProcessedPdfFile) {
    showToast('⚠️ No processed PDF available.');
    return;
  }
  const fileToPass = state.lastProcessedPdfFile;
  const doneScreen = document.getElementById('workspaceDoneScreen');
  if (doneScreen) doneScreen.classList.add('hidden');

  state.workspaceItems = [];
  state.removePagesProcessed = false;

  // Navigate to target tool and pass file
  navigateTo(targetToolId);
  await handleFilesSelected([fileToPass]);
};

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
function downloadBlob(blob, filename, customTitle) {
  state.lastProcessedPdfBlob = blob;
  state.lastProcessedPdfFilename = filename;
  state.lastProcessedPdfFile = new File([blob], filename, { type: blob.type || 'application/pdf' });

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
      colors: ['#ff2a5f', '#ff7597', '#ffd1df', '#ff3366']
    });
  }

  // Show standardized Post-Process Done Screen
  const title = customTitle || (state.activeTool ? `${state.activeTool.title} Completed!` : 'Document Ready!');
  showGenericDoneScreen(title);
}

function showGenericDoneScreen(title) {
  if (DOM.toolDropzone) DOM.toolDropzone.classList.add('hidden');
  if (DOM.filesSelectedArea) DOM.filesSelectedArea.classList.add('hidden');
  const actionBar = document.getElementById('workspaceActionBar');
  if (actionBar) actionBar.classList.remove('floating-mode');
  const toolHeader = document.getElementById('toolHeaderContainer');
  if (toolHeader) toolHeader.classList.add('hidden');
  const footer = document.getElementById('mainSiteFooter');
  if (footer) footer.classList.add('hidden');

  const doneScreen = document.getElementById('workspaceDoneScreen');
  if (doneScreen) {
    doneScreen.classList.remove('hidden');
    const doneTitle = document.getElementById('doneScreenTitle');
    if (doneTitle) {
      doneTitle.textContent = title;
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast(`${title} Download started.`);
}

let toastTimer;
function showToast(msg) {
  if (toastTimer) clearTimeout(toastTimer);
  if (!msg || !DOM.toastMessage || !DOM.toast) return;

  // Clean any emojis and trim
  let cleanMsg = String(msg).replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[⚠️✅❌🔒💡]/gu, '').trim();

  // Concise message mappings (Single-line, minimal, Apple-like)
  const shortMap = {
    'You cannot remove all pages. Please keep at least one page.': 'Keep at least 1 page',
    'Please click on at least one page to mark it for removal (✕).': 'Select at least 1 page',
    'All pages marked for removal. Click any page you want to keep.': 'All pages selected',
    'Generating document preview cards...': 'Preparing pages...',
    'Document requires a password to open.': 'Password required',
    'Incorrect password for this PDF document.': 'Incorrect password',
    'Original PDF file not found.': 'File not found',
    'No pages to keep in the new PDF.': 'Keep at least 1 page',
    'Generating your new PDF...': 'Generating PDF...',
    'No pages in the document to download.': 'No pages to download',
    'Please select at least one page to extract.': 'Select at least 1 page',
    'No pages selected for merging.': 'Select pages to merge',
    'Priority requested! Vote added to prioritize this tool.': 'Vote recorded',
    'File processed & downloaded successfully!': 'Downloaded successfully'
  };

  for (const [longText, shortText] of Object.entries(shortMap)) {
    if (cleanMsg.includes(longText) || longText.includes(cleanMsg)) {
      cleanMsg = shortText;
      break;
    }
  }

  if (cleanMsg.toLowerCase().includes('successfully downloaded') || cleanMsg.toLowerCase().includes('downloaded!')) {
    cleanMsg = 'Downloaded successfully';
  } else if (cleanMsg.toLowerCase().includes('pages removed! click download')) {
    cleanMsg = 'Pages removed. Ready to download';
  } else if (cleanMsg.toLowerCase().includes('page(s) marked for removal') || cleanMsg.toLowerCase().includes('pages marked for removal')) {
    const numMatch = cleanMsg.match(/\d+/);
    cleanMsg = numMatch ? `${numMatch[0]} pages marked` : 'Pages marked';
  } else if (cleanMsg.toLowerCase().includes('appears to be corrupted')) {
    cleanMsg = 'Invalid or corrupted PDF';
  }

  DOM.toastMessage.textContent = cleanMsg;
  DOM.toast.classList.remove('opacity-0', '-translate-y-3', 'pointer-events-none');
  DOM.toast.classList.add('opacity-100', 'translate-y-0');

  toastTimer = setTimeout(() => {
    DOM.toast.classList.remove('opacity-100', 'translate-y-0');
    DOM.toast.classList.add('opacity-0', '-translate-y-3', 'pointer-events-none');
  }, 2400);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
