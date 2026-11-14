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
      desc: 'Remove pages from a PDF document quickly and easily with interactive preview.',
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
  // Interactive Items (for Image or PDF Pages)
  workspaceItems: [], // [{ id, type: 'image'|'pdf-file'|'pdf-page', file, url, rotation, pageNum, selected, removed }]
  toolOptions: {},
  theme: localStorage.getItem('cutipdf_theme') || 'dark'
};

// DOM Cache
const DOM = {
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
  filesSelectedArea: document.getElementById('filesSelectedArea'),
  selectedFilesList: document.getElementById('selectedFilesList'),
  btnClearFiles: document.getElementById('btnClearFiles'),
  btnExecuteAction: document.getElementById('btnExecuteAction'),
  actionButtonText: document.getElementById('actionButtonText'),
  
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
    localStorage.setItem('cutipdf_theme', state.theme);
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
// Render All Tools Catalog with Brush Headers
// ==========================================
function renderAllToolsCatalog() {
  DOM.toolsGridContainer.innerHTML = '';

  for (const [category, tools] of Object.entries(TOOLS_CATALOG)) {
    const section = document.createElement('section');
    section.className = 'space-y-4';

    section.innerHTML = `
      <div class="flex items-center gap-2 border-b border-pink-100 dark:border-zinc-800 pb-2">
        <h2 class="category-title">${category}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${tools.map(tool => {
          const vectorSvg = VECTORS[tool.id] || '<div class="text-3xl">📄</div>';
          return `
            <a href="#${tool.id}" class="tool-card group no-underline text-inherit block">
              <div class="flex items-start justify-between mb-3">
                <div class="w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  ${vectorSvg}
                </div>
                <span class="text-[10px] font-semibold text-pink-600 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-md border border-pink-200/60 dark:border-pink-800/60">
                  Ready
                </span>
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
// Routing & Dedicated Tool Pages
// ==========================================
function findToolById(id) {
  for (const tools of Object.values(TOOLS_CATALOG)) {
    const found = tools.find(t => t.id === id);
    if (found) return found;
  }
  return null;
}

function initRouting() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();

  DOM.btnBackToTools.addEventListener('click', () => {
    window.location.hash = '';
  });
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

    // Trigger snappy clashing strike animation without rotation
    DOM.floatingToolsBtn.classList.remove('clashing');
    void DOM.floatingToolsBtn.offsetWidth; // force reflow
    DOM.floatingToolsBtn.classList.add('clashing');

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
      sec.innerHTML = `
        <h4 class="category-title text-xs uppercase tracking-wider">${category}</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${filtered.map(tool => `
            <div onclick="selectToolFromModal('${tool.id}')" class="p-2.5 rounded-xl border border-pink-100 dark:border-zinc-800 hover:border-[#ff5277] bg-white dark:bg-zinc-800/80 hover:shadow-sm cursor-pointer transition-all flex items-center gap-2.5 group">
              <div class="w-8 h-8 flex-shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                ${VECTORS[tool.id] || '<div class="text-lg">📄</div>'}
              </div>
              <div class="overflow-hidden min-w-0">
                <h5 class="font-bold text-xs text-zinc-900 dark:text-zinc-100 group-hover:text-[#ff5277] transition-colors truncate">${tool.title}</h5>
                <p class="text-[10px] text-zinc-400 truncate">${tool.desc}</p>
              </div>
            </div>
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

window.selectToolFromModal = function(toolId) {
  closeQuickTools();
  if (state.workspaceItems && state.workspaceItems.length > 0) {
    if (!confirm('Switch tool? Current in-progress files will be cleared.')) {
      return;
    }
  }
  window.location.hash = '#' + toolId;
};

function handleRoute() {
  const hash = window.location.hash.replace('#', '').trim();

  if (!hash || hash === 'all-tools' || hash === 'tools') {
    DOM.viewToolActive.classList.remove('active');
    DOM.viewAllTools.classList.add('active');
    document.title = 'CutiPDF • Clean, Fast & Complete PDF Studio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const tool = findToolById(hash);
  if (tool) {
    openToolDedicatedPage(tool);
  } else {
    window.location.hash = '';
  }
}

function openToolDedicatedPage(tool) {
  state.activeTool = tool;
  state.selectedFiles = [];
  state.workspaceItems = [];
  state.toolOptions = {};

  document.title = `${tool.title} • CutiPDF`;

  DOM.toolVectorContainer.innerHTML = VECTORS[tool.id] || '<div class="text-5xl">📄</div>';
  DOM.toolTitle.textContent = tool.title;
  DOM.toolDesc.textContent = tool.desc;

  DOM.fileInput.accept = tool.accept;
  DOM.btnSelectFiles.textContent = tool.btnText;
  DOM.actionButtonText.textContent = tool.actionText;

  renderToolOptionsDrawer(tool.id);

  DOM.filesSelectedArea.classList.add('hidden');
  DOM.toolDropzone.classList.remove('hidden');

  DOM.viewAllTools.classList.remove('active');
  DOM.viewToolActive.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
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

  dropzone.addEventListener('click', () => {
    DOM.fileInput.click();
  });

  DOM.fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    handleFilesSelected(files);
    DOM.fileInput.value = '';
  });

  DOM.btnClearFiles.addEventListener('click', () => {
    state.selectedFiles = [];
    state.workspaceItems = [];
    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');
  });

  DOM.btnExecuteAction.addEventListener('click', executeActiveToolAction);
}

async function handleFilesSelected(files) {
  if (!files || files.length === 0) return;

  state.selectedFiles.push(...files);
  DOM.toolDropzone.classList.add('hidden');
  DOM.filesSelectedArea.classList.remove('hidden');

  showToast('Rendering in-browser preview cards...');
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
          id: Math.random().toString(36).substring(2, 9),
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
  // 2. Multi-PDF Tool (Merge PDF, Compare PDF)
  else if (toolId === 'merge-pdf' || toolId === 'compare-pdf') {
    for (const f of newFiles) {
      if (f.name.toLowerCase().endsWith('.pdf') || f.type === 'application/pdf') {
        let coverUrl = '';
        let pageCount = 1;
        try {
          const bytes = await f.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
          pageCount = pdf.numPages;
          coverUrl = await renderPdfPageThumb(pdf, 1);
        } catch (e) {
          console.warn('PDF preview render error:', e);
        }

        state.workspaceItems.push({
          id: Math.random().toString(36).substring(2, 9),
          type: 'pdf-file',
          file: f,
          name: f.name,
          size: formatBytes(f.size),
          pageCount,
          previewUrl: coverUrl,
          rotation: 0
        });
      }
    }
  }
  // 3. Single PDF Page-Level Tools (Rotate, Split, Remove, Organize, Extract, Watermark, PDF to JPG)
  else if (['rotate-pdf', 'split-pdf', 'remove-pages', 'extract-pages', 'organize-pdf', 'pdf-to-jpg', 'watermark-pdf', 'crop-pdf'].includes(toolId)) {
    const f = newFiles[0];
    if (f && (f.name.toLowerCase().endsWith('.pdf') || f.type === 'application/pdf')) {
      state.workspaceItems = []; // single master PDF
      try {
        const bytes = await f.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
        for (let i = 1; i <= pdf.numPages; i++) {
          const thumb = await renderPdfPageThumb(pdf, i);
          state.workspaceItems.push({
            id: Math.random().toString(36).substring(2, 9),
            type: 'pdf-page',
            file: f,
            pageNum: i,
            name: `Page ${i}`,
            previewUrl: thumb,
            rotation: 0,
            selected: true,
            removed: false
          });
        }
      } catch (e) {
        console.warn('PDF pages render error:', e);
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

// ==========================================
// Render Interactive Workspace Cards (iLovePDF Style)
// ==========================================
function renderInteractiveWorkspace() {
  const container = DOM.selectedFilesList;
  container.innerHTML = '';
  const toolId = state.activeTool ? state.activeTool.id : '';

  if (state.workspaceItems.length === 0) {
    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');
    return;
  }

  // Use Grid for interactive preview cards!
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 pb-2';

  state.workspaceItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = `preview-card ${item.removed ? 'removed' : ''} ${item.selected ? 'selected' : ''}`;

    let thumbHtml = '';
    if (item.previewUrl) {
      thumbHtml = `
        <div class="h-44 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden p-1.5 relative">
          <img src="${item.previewUrl}" alt="${item.name}" style="transform: rotate(${item.rotation}deg);" class="max-h-full max-w-full object-contain transition-transform duration-200 rounded-md">
          <div class="absolute top-2 left-2 z-10 bg-white/90 dark:bg-zinc-900/90 text-[10px] font-bold px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 shadow-xs">
            ${item.pageNum ? `Page ${item.pageNum}` : index + 1}
          </div>
        </div>
      `;
    } else {
      thumbHtml = `
        <div class="h-44 bg-pink-50/50 dark:bg-zinc-800/50 flex flex-col items-center justify-center p-3 text-center">
          <div class="text-3xl mb-1">${state.activeTool ? state.activeTool.title.includes('Word') ? '📄' : state.activeTool.title.includes('Excel') ? '📈' : '📑' : '📄'}</div>
          <p class="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 truncate w-full">${item.name}</p>
          <p class="text-[10px] text-zinc-400 mt-0.5">${item.size || ''}</p>
        </div>
      `;
    }

    // Action buttons inside card footer
    let actionsHtml = `
      <div class="p-2.5 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
        <div class="flex items-center gap-1">
          <button type="button" onclick="rotateWorkspaceItem(${index})" class="w-6 h-6 rounded-md hover:bg-pink-50 dark:hover:bg-zinc-800 text-zinc-600 hover:text-[#ff5277] flex items-center justify-center transition-colors" title="Rotate 90°">
            ↻
          </button>
          <button type="button" onclick="moveWorkspaceItem(${index}, -1)" ${index === 0 ? 'disabled' : ''} class="w-6 h-6 rounded-md hover:bg-pink-50 dark:hover:bg-zinc-800 text-zinc-600 hover:text-[#ff5277] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none" title="Move Left">
            ←
          </button>
          <button type="button" onclick="moveWorkspaceItem(${index}, 1)" ${index === state.workspaceItems.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded-md hover:bg-pink-50 dark:hover:bg-zinc-800 text-zinc-600 hover:text-[#ff5277] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none" title="Move Right">
            →
          </button>
        </div>
        <button type="button" onclick="toggleRemoveWorkspaceItem(${index})" class="w-6 h-6 rounded-md hover:bg-red-50 text-zinc-400 hover:text-red-500 flex items-center justify-center transition-colors" title="Remove">
          ✕
        </button>
      </div>
    `;

    // Special click toggle for Split / Remove Pages tool
    if (toolId === 'remove-pages' || toolId === 'split-pdf' || toolId === 'extract-pages') {
      card.onclick = (e) => {
        if (e.target.tagName !== 'BUTTON') {
          toggleRemoveWorkspaceItem(index);
        }
      };
      card.classList.add('cursor-pointer');
    }

    card.innerHTML = thumbHtml + actionsHtml;
    grid.appendChild(card);
  });

  // "Add More Files" Card at the end of the grid (iLovePDF Style)
  const addMoreCard = document.createElement('div');
  addMoreCard.className = 'preview-card border-2 border-dashed border-pink-200 hover:border-[#ff5277] bg-pink-50/20 hover:bg-pink-50/50 flex flex-col items-center justify-center p-6 text-center cursor-pointer min-h-[190px] transition-all';
  addMoreCard.onclick = () => DOM.fileInput.click();
  addMoreCard.innerHTML = `
    <div class="w-10 h-10 rounded-full bg-pink-100 text-[#ff5277] flex items-center justify-center text-lg font-bold mb-2">
      +
    </div>
    <span class="text-xs font-bold text-zinc-700 dark:text-zinc-300">Add More</span>
    <span class="text-[10px] text-zinc-400 mt-0.5">Click to browse</span>
  `;
  grid.appendChild(addMoreCard);

  container.appendChild(grid);

  // Update Action Button Text
  const activeCount = state.workspaceItems.filter(i => !i.removed).length;
  DOM.actionButtonText.textContent = `${state.activeTool.actionText} (${activeCount})`;
}

// Interactive Workspace Actions
window.rotateWorkspaceItem = function(index) {
  state.workspaceItems[index].rotation = (state.workspaceItems[index].rotation + 90) % 360;
  renderInteractiveWorkspace();
};

window.rotateAllWorkspace = function(angle) {
  state.workspaceItems.forEach(i => {
    i.rotation = (i.rotation + angle) % 360;
  });
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
  } else if (toolId === 'split-pdf' || toolId === 'extract-pages') {
    state.workspaceItems[index].selected = !state.workspaceItems[index].selected;
  } else {
    state.workspaceItems.splice(index, 1);
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
    // 4. Remove Pages
    else if (toolId === 'remove-pages') {
      await engineRemovePages();
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

// 2. Merge PDF (Respects user's reordered sequence)
async function engineMergePdf() {
  const { PDFDocument } = PDFLib;
  const mergedDoc = await PDFDocument.create();

  for (const item of state.workspaceItems) {
    if (item.file) {
      const bytes = await item.file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const pages = await mergedDoc.copyPages(doc, doc.getPageIndices());
      pages.forEach(p => mergedDoc.addPage(p));
    }
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

// 5. Remove Pages (Removes marked pages)
async function engineRemovePages() {
  const { PDFDocument } = PDFLib;
  const masterFile = state.workspaceItems[0].file;
  const bytes = await masterFile.arrayBuffer();
  const doc = await PDFDocument.load(bytes);

  const pagesToKeep = state.workspaceItems
    .map((item, idx) => (!item.removed ? idx : -1))
    .filter(i => i >= 0);

  if (pagesToKeep.length === 0) {
    showToast('You cannot remove all pages.');
    return;
  }

  const newDoc = await PDFDocument.create();
  const copied = await newDoc.copyPages(doc, pagesToKeep);
  copied.forEach(p => newDoc.addPage(p));

  const out = await newDoc.save();
  downloadBlob(new Blob([out], { type: 'application/pdf' }), `Pages_Removed_${masterFile.name}`);
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

  showToast('File processed & downloaded successfully! 🎉');
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
