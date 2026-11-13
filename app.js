/**
 * CutiPDF (cutipdf.com) - Minimalist & Clean PDF Studio
 * Structured like iLovePDF • 100% In-Browser Privacy
 */

// Tools Catalog Definition (Structured cleanly like iLovePDF)
const TOOLS_CATALOG = {
  'CONVERT TO PDF': [
    {
      id: 'jpg-to-pdf',
      title: 'JPG to PDF',
      desc: 'Convert JPG, PNG, and WebP images to PDF in seconds.',
      icon: '🖼️',
      color: '#e63946',
      accept: 'image/jpeg,image/png,image/webp,image/jpg',
      btnText: 'Select JPG images',
      actionText: 'Convert to PDF',
      functional: true
    },
    {
      id: 'word-to-pdf',
      title: 'Word to PDF',
      desc: 'Convert DOC and DOCX documents to high quality PDF.',
      icon: '📄',
      color: '#2b579a',
      accept: '.doc,.docx',
      btnText: 'Select Word files',
      actionText: 'Convert to PDF',
      functional: false
    },
    {
      id: 'powerpoint-to-pdf',
      title: 'PowerPoint to PDF',
      desc: 'Convert PPT and PPTX presentations to PDF slides.',
      icon: '📊',
      color: '#d24726',
      accept: '.ppt,.pptx',
      btnText: 'Select Powerpoint files',
      actionText: 'Convert to PDF',
      functional: false
    },
    {
      id: 'excel-to-pdf',
      title: 'Excel to PDF',
      desc: 'Convert Excel spreadsheets into neat PDF tables.',
      icon: '📈',
      color: '#217346',
      accept: '.xls,.xlsx',
      btnText: 'Select Excel spreadsheets',
      actionText: 'Convert to PDF',
      functional: false
    },
    {
      id: 'html-to-pdf',
      title: 'HTML to PDF',
      desc: 'Convert web pages or HTML code to PDF document.',
      icon: '🌐',
      color: '#e44d26',
      accept: '.html,.htm',
      btnText: 'Select HTML files',
      actionText: 'Convert to PDF',
      functional: false
    }
  ],
  'ORGANIZE PDF': [
    {
      id: 'merge-pdf',
      title: 'Merge PDF',
      desc: 'Combine multiple PDF files in the order you want.',
      icon: '📑',
      color: '#e63946',
      accept: 'application/pdf',
      btnText: 'Select PDF files',
      actionText: 'Merge PDF',
      functional: true
    },
    {
      id: 'split-pdf',
      title: 'Split PDF',
      desc: 'Separate one page or a whole set for easy extraction.',
      icon: '✂️',
      color: '#f59e0b',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Split PDF',
      functional: true
    },
    {
      id: 'remove-pages',
      title: 'Remove Pages',
      desc: 'Select and remove unwanted pages from your document.',
      icon: '🗑️',
      color: '#ef4444',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Remove Pages',
      functional: false
    }
  ],
  'CONVERT FROM PDF': [
    {
      id: 'pdf-to-jpg',
      title: 'PDF to JPG',
      desc: 'Extract all images or convert each page to high-res JPG.',
      icon: '🖼️',
      color: '#10b981',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to JPG',
      functional: false
    },
    {
      id: 'pdf-to-word',
      title: 'PDF to Word',
      desc: 'Easily convert your PDF files into editable DOCX.',
      icon: '📄',
      color: '#2b579a',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to Word',
      functional: false
    },
    {
      id: 'pdf-to-excel',
      title: 'PDF to Excel',
      desc: 'Extract tables and data straight into Excel sheets.',
      icon: '📈',
      color: '#217346',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to Excel',
      functional: false
    }
  ],
  'OPTIMIZE & EDIT': [
    {
      id: 'compress-pdf',
      title: 'Compress PDF',
      desc: 'Reduce file size while keeping the best PDF quality.',
      icon: '🗜️',
      color: '#8b5cf6',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Compress PDF',
      functional: true
    },
    {
      id: 'text-to-pdf',
      title: 'Text to PDF',
      desc: 'Convert notes, markdown, and plain text to PDF.',
      icon: '📝',
      color: '#6366f1',
      accept: '.txt,.md,text/plain',
      btnText: 'Select Text file',
      actionText: 'Convert to PDF',
      functional: true
    },
    {
      id: 'rotate-pdf',
      title: 'Rotate PDF',
      desc: 'Rotate your PDF pages to portrait or landscape.',
      icon: '🔄',
      color: '#3b82f6',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Rotate PDF',
      functional: true
    }
  ],
  'PDF SECURITY': [
    {
      id: 'protect-pdf',
      title: 'Protect PDF',
      desc: 'Encrypt your PDF with a password to secure privacy.',
      icon: '🔒',
      color: '#ec4899',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Protect PDF',
      functional: false
    },
    {
      id: 'unlock-pdf',
      title: 'Unlock PDF',
      desc: 'Remove PDF password protection for quick access.',
      icon: '🔓',
      color: '#14b8a6',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Unlock PDF',
      functional: false
    }
  ]
};

// Application State
const state = {
  currentView: 'all-tools', // 'all-tools' or 'tool-active'
  activeTool: null,
  selectedFiles: [],
  theme: localStorage.getItem('cutipdf_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};

// DOM Elements
const DOM = {
  viewAllTools: document.getElementById('view-all-tools'),
  viewToolActive: document.getElementById('view-tool-active'),
  toolsGridContainer: document.getElementById('toolsGridContainer'),
  btnBackToTools: document.getElementById('btnBackToTools'),
  floatingToolsBtn: document.getElementById('floatingToolsBtn'),
  themeToggle: document.getElementById('themeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  
  // Active Tool Elements
  toolIcon: document.getElementById('toolIcon'),
  toolTitle: document.getElementById('toolTitle'),
  toolDesc: document.getElementById('toolDesc'),
  toolDropzone: document.getElementById('toolDropzone'),
  fileInput: document.getElementById('fileInput'),
  btnSelectFiles: document.getElementById('btnSelectFiles'),
  dropzoneText: document.getElementById('dropzoneText'),
  
  // Active Tool File Management
  filesSelectedArea: document.getElementById('filesSelectedArea'),
  selectedFilesList: document.getElementById('selectedFilesList'),
  btnClearFiles: document.getElementById('btnClearFiles'),
  btnExecuteAction: document.getElementById('btnExecuteAction'),
  actionButtonText: document.getElementById('actionButtonText'),
  
  // Global Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderAllToolsCatalog();
  initToolEvents();
  initDropzoneEvents();
});

// ==========================================
// Theme Management (Light / Dark)
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
// Render All Tools Catalog (iLovePDF Style)
// ==========================================
function renderAllToolsCatalog() {
  DOM.toolsGridContainer.innerHTML = '';

  for (const [category, tools] of Object.entries(TOOLS_CATALOG)) {
    const section = document.createElement('section');
    section.className = 'space-y-4';

    section.innerHTML = `
      <div class="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <h2 class="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">${category}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${tools.map(tool => `
          <div onclick="openToolPage('${tool.id}')" class="tool-card group">
            <div class="flex items-start justify-between mb-4">
              <span class="text-3xl">${tool.icon}</span>
              ${!tool.functional ? '<span class="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">Coming Soon</span>' : ''}
            </div>
            <h3 class="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-[#e63946] transition-colors">${tool.title}</h3>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">${tool.desc}</p>
          </div>
        `).join('')}
      </div>
    `;

    DOM.toolsGridContainer.appendChild(section);
  }
}

// ==========================================
// Tool Navigation & Dedicated Pages
// ==========================================
function findToolById(id) {
  for (const tools of Object.values(TOOLS_CATALOG)) {
    const found = tools.find(t => t.id === id);
    if (found) return found;
  }
  return null;
}

window.openToolPage = function(toolId) {
  const tool = findToolById(toolId);
  if (!tool) return;

  state.activeTool = tool;
  state.selectedFiles = [];

  // Update Tool Header
  DOM.toolIcon.textContent = tool.icon;
  DOM.toolTitle.textContent = tool.title;
  DOM.toolDesc.textContent = tool.desc;

  // Update Input & Button Texts
  DOM.fileInput.accept = tool.accept;
  DOM.btnSelectFiles.textContent = tool.btnText;
  DOM.actionButtonText.textContent = tool.actionText;

  // Reset File Views
  DOM.filesSelectedArea.classList.add('hidden');
  DOM.toolDropzone.classList.remove('hidden');

  // Switch View
  DOM.viewAllTools.classList.remove('active');
  DOM.viewToolActive.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function showAllTools() {
  state.currentView = 'all-tools';
  DOM.viewToolActive.classList.remove('active');
  DOM.viewAllTools.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.showAllTools = showAllTools;

function initToolEvents() {
  DOM.btnBackToTools.addEventListener('click', showAllTools);
  DOM.floatingToolsBtn.addEventListener('click', showAllTools);

  DOM.btnClearFiles.addEventListener('click', () => {
    state.selectedFiles = [];
    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');
  });

  DOM.btnExecuteAction.addEventListener('click', executeActiveToolAction);
}

// ==========================================
// Dropzone & File Selection
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

  dropzone.addEventListener('click', (e) => {
    DOM.fileInput.click();
  });

  DOM.fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    handleFilesSelected(files);
    DOM.fileInput.value = '';
  });
}

function handleFilesSelected(files) {
  if (!files || files.length === 0) return;

  state.selectedFiles = files;
  renderSelectedFilesList();

  DOM.toolDropzone.classList.add('hidden');
  DOM.filesSelectedArea.classList.remove('hidden');
}

function renderSelectedFilesList() {
  DOM.selectedFilesList.innerHTML = '';

  state.selectedFiles.forEach((file, index) => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between p-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl';
    row.innerHTML = `
      <div class="flex items-center gap-3 overflow-hidden">
        <span class="text-2xl">${state.activeTool ? state.activeTool.icon : '📄'}</span>
        <div class="overflow-hidden">
          <p class="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate max-w-[200px] sm:max-w-md">${file.name}</p>
          <p class="text-[11px] text-zinc-400">${formatBytes(file.size)}</p>
        </div>
      </div>
      <button onclick="removeSelectedFile(${index})" class="text-zinc-400 hover:text-red-500 p-1 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    `;
    DOM.selectedFilesList.appendChild(row);
  });

  DOM.actionButtonText.textContent = `${state.activeTool.actionText} (${state.selectedFiles.length})`;
}

window.removeSelectedFile = function(index) {
  state.selectedFiles.splice(index, 1);
  if (state.selectedFiles.length === 0) {
    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');
  } else {
    renderSelectedFilesList();
  }
};

// ==========================================
// Tool Execution Engine
// ==========================================
async function executeActiveToolAction() {
  if (!state.activeTool || state.selectedFiles.length === 0) return;

  const toolId = state.activeTool.id;

  try {
    DOM.btnExecuteAction.disabled = true;
    DOM.actionButtonText.textContent = 'Processing...';

    if (toolId === 'jpg-to-pdf') {
      await convertImagesToPdf(state.selectedFiles);
    } else if (toolId === 'merge-pdf') {
      await mergePdfs(state.selectedFiles);
    } else if (toolId === 'text-to-pdf') {
      await convertTextToPdf(state.selectedFiles);
    } else if (toolId === 'split-pdf') {
      await splitPdf(state.selectedFiles);
    } else if (toolId === 'compress-pdf' || toolId === 'rotate-pdf') {
      await processAndDownloadPdf(state.selectedFiles, toolId);
    } else {
      // Coming soon fallback
      showToast(`${state.activeTool.title} engine is coming soon!`);
    }

    DOM.btnExecuteAction.disabled = false;
    DOM.actionButtonText.textContent = state.activeTool.actionText;

  } catch (err) {
    console.error(err);
    DOM.btnExecuteAction.disabled = false;
    DOM.actionButtonText.textContent = state.activeTool.actionText;
    showToast('An error occurred during processing.');
  }
}

// 1. JPG to PDF
async function convertImagesToPdf(files) {
  const { PDFDocument } = PDFLib;
  const pdfDoc = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    let embeddedImg;

    if (file.type === 'image/jpeg' || file.name.toLowerCase().endsWith('.jpg') || file.name.toLowerCase().endsWith('.jpeg')) {
      embeddedImg = await pdfDoc.embedJpg(arrayBuffer);
    } else {
      // Convert to PNG blob via canvas if needed
      const pngBlob = await imageToPngBlob(file);
      const pngBytes = await pngBlob.arrayBuffer();
      embeddedImg = await pdfDoc.embedPng(pngBytes);
    }

    const { width, height } = embeddedImg.scale(1);
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(embeddedImg, { x: 0, y: 0, width, height });
  }

  const pdfBytes = await pdfDoc.save();
  downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), `CutiPDF_Converted_${Date.now()}.pdf`);
}

// 2. Merge PDF
async function mergePdfs(files) {
  const { PDFDocument } = PDFLib;
  const mergedDoc = await PDFDocument.create();

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const doc = await PDFDocument.load(bytes);
    const pages = await mergedDoc.copyPages(doc, doc.getPageIndices());
    pages.forEach(p => mergedDoc.addPage(p));
  }

  const mergedBytes = await mergedDoc.save();
  downloadBlob(new Blob([mergedBytes], { type: 'application/pdf' }), `Merged_${Date.now()}.pdf`);
}

// 3. Text to PDF
async function convertTextToPdf(files) {
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  for (const file of files) {
    const text = await file.text();
    const page = pdfDoc.addPage([595, 842]);
    page.drawText(file.name.replace(/\.[^/.]+$/, ''), { x: 50, y: 790, size: 18, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

    const lines = text.split('\n');
    let y = 750;
    for (const line of lines) {
      if (y < 50) break;
      page.drawText(line.substring(0, 80), { x: 50, y, size: 11, font, color: rgb(0.2, 0.2, 0.2) });
      y -= 16;
    }
  }

  const pdfBytes = await pdfDoc.save();
  downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), `Document_${Date.now()}.pdf`);
}

// 4. Split PDF
async function splitPdf(files) {
  const { PDFDocument } = PDFLib;
  const sourceBytes = await files[0].arrayBuffer();
  const sourceDoc = await PDFDocument.load(sourceBytes);
  const total = sourceDoc.getPageCount();

  const newDoc = await PDFDocument.create();
  const [firstPage] = await newDoc.copyPages(sourceDoc, [0]);
  newDoc.addPage(firstPage);

  const bytes = await newDoc.save();
  downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `Split_Page_1.pdf`);
}

// 5. Rotate / Compress PDF
async function processAndDownloadPdf(files, action) {
  const { PDFDocument, degrees } = PDFLib;
  const bytes = await files[0].arrayBuffer();
  const doc = await PDFDocument.load(bytes);

  if (action === 'rotate-pdf') {
    doc.getPages().forEach(p => p.setRotation(degrees(90)));
  }

  const outBytes = await doc.save();
  downloadBlob(new Blob([outBytes], { type: 'application/pdf' }), `Processed_${Date.now()}.pdf`);
}

// Helper: Image to PNG
function imageToPngBlob(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(resolve, 'image/png');
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

// Download Helper with Confetti
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
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#e63946', '#2b2d42', '#f87171']
    });
  }

  showToast('File downloaded successfully!');
}

// Toast
let toastTimer;
function showToast(msg) {
  if (toastTimer) clearTimeout(toastTimer);
  DOM.toastMessage.textContent = msg;
  DOM.toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  DOM.toast.classList.add('opacity-100', 'translate-y-0');

  toastTimer = setTimeout(() => {
    DOM.toast.classList.remove('opacity-100', 'translate-y-0');
    DOM.toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, 2800);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
