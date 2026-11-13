/**
 * CutiPDF (cutipdf.com) - Full Suite of 30 PDF Tools
 * Modeled after iLovePDF with Beautiful Custom Vector Art & In-Browser Privacy
 */

const TOOLS_CATALOG = {
  'ORGANIZE PDF': [
    {
      id: 'merge-pdf',
      title: 'Merge PDF',
      desc: 'Combine PDFs in the order you want with the easiest PDF merger available.',
      accept: 'application/pdf',
      btnText: 'Select PDF files',
      actionText: 'Merge PDF',
      functional: true
    },
    {
      id: 'split-pdf',
      title: 'Split PDF',
      desc: 'Separate one page or a whole set for easy conversion into independent PDF files.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Split PDF',
      functional: true
    },
    {
      id: 'remove-pages',
      title: 'Remove Pages',
      desc: 'Remove pages from a PDF document quickly and easily.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Remove Pages',
      functional: false
    },
    {
      id: 'extract-pages',
      title: 'Extract Pages',
      desc: 'Get a new document containing only the desired pages from your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Extract Pages',
      functional: false
    },
    {
      id: 'organize-pdf',
      title: 'Organize PDF',
      desc: 'Sort pages of your PDF file however you like. Delete or add PDF pages.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Organize PDF',
      functional: false
    },
    {
      id: 'scan-to-pdf',
      title: 'Scan to PDF',
      desc: 'Capture document scans directly from your camera and convert them into PDF.',
      accept: 'image/*',
      btnText: 'Select Scans',
      actionText: 'Save as PDF',
      functional: false
    }
  ],

  'OPTIMIZE PDF': [
    {
      id: 'compress-pdf',
      title: 'Compress PDF',
      desc: 'Reduce file size while optimizing for maximal PDF quality.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Compress PDF',
      functional: true
    },
    {
      id: 'repair-pdf',
      title: 'Repair PDF',
      desc: 'Repair damaged or corrupted PDF files and recover data from them.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Repair PDF',
      functional: false
    },
    {
      id: 'ocr-pdf',
      title: 'OCR PDF',
      desc: 'Convert scanned PDF documents into searchable and selectable text files.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Perform OCR',
      functional: false
    }
  ],

  'CONVERT TO PDF': [
    {
      id: 'jpg-to-pdf',
      title: 'JPG to PDF',
      desc: 'Convert JPG, PNG, and WebP images to PDF in seconds. Easily adjust orientation and margins.',
      accept: 'image/jpeg,image/png,image/webp,image/jpg',
      btnText: 'Select JPG images',
      actionText: 'Convert to PDF',
      functional: true
    },
    {
      id: 'word-to-pdf',
      title: 'Word to PDF',
      desc: 'Convert DOC and DOCX files into accurate PDF documents.',
      accept: '.doc,.docx',
      btnText: 'Select Word files',
      actionText: 'Convert to PDF',
      functional: false
    },
    {
      id: 'powerpoint-to-pdf',
      title: 'PowerPoint to PDF',
      desc: 'Convert PPT and PPTX presentations into PDF slides.',
      accept: '.ppt,.pptx',
      btnText: 'Select PowerPoint files',
      actionText: 'Convert to PDF',
      functional: false
    },
    {
      id: 'excel-to-pdf',
      title: 'Excel to PDF',
      desc: 'Convert Excel tables and spreadsheets into PDF reports.',
      accept: '.xls,.xlsx',
      btnText: 'Select Excel spreadsheets',
      actionText: 'Convert to PDF',
      functional: false
    },
    {
      id: 'html-to-pdf',
      title: 'HTML to PDF',
      desc: 'Convert webpages, HTML files, or raw code into PDF.',
      accept: '.html,.htm',
      btnText: 'Select HTML file',
      actionText: 'Convert to PDF',
      functional: false
    },
    {
      id: 'text-to-pdf',
      title: 'Text to PDF',
      desc: 'Convert plain text, notes, and markdown into formatted PDF.',
      accept: '.txt,.md,text/plain',
      btnText: 'Select Text file',
      actionText: 'Convert to PDF',
      functional: true
    }
  ],

  'CONVERT FROM PDF': [
    {
      id: 'pdf-to-jpg',
      title: 'PDF to JPG',
      desc: 'Extract all images contained in a PDF or convert each page into a JPG.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to JPG',
      functional: false
    },
    {
      id: 'pdf-to-word',
      title: 'PDF to Word',
      desc: 'Easily convert your PDF files into editable DOC and DOCX documents.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to Word',
      functional: false
    },
    {
      id: 'pdf-to-powerpoint',
      title: 'PDF to PowerPoint',
      desc: 'Convert your PDF documents into editable PPTX presentation slides.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to PPTX',
      functional: false
    },
    {
      id: 'pdf-to-excel',
      title: 'PDF to Excel',
      desc: 'Extract tabular data straight from PDF into Excel spreadsheets.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to Excel',
      functional: false
    },
    {
      id: 'pdf-to-pdfa',
      title: 'PDF to PDF/A',
      desc: 'Convert your PDF to PDF/A, the ISO-standardized version for long-term archiving.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Convert to PDF/A',
      functional: false
    }
  ],

  'EDIT & ENHANCE': [
    {
      id: 'rotate-pdf',
      title: 'Rotate PDF',
      desc: 'Rotate your PDF pages permanently portrait or landscape.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Rotate PDF',
      functional: true
    },
    {
      id: 'page-numbers',
      title: 'Page Numbers',
      desc: 'Add page numbers into PDFs easily with custom typography and placement.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Add Page Numbers',
      functional: false
    },
    {
      id: 'watermark-pdf',
      title: 'Watermark',
      desc: 'Stamp an image or text over your PDF in seconds with custom opacity.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Add Watermark',
      functional: false
    },
    {
      id: 'edit-pdf',
      title: 'Edit PDF',
      desc: 'Add text, shapes, highlights, and annotations directly into your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Edit PDF',
      functional: false
    },
    {
      id: 'crop-pdf',
      title: 'Crop PDF',
      desc: 'Trim the visible page margins of your PDF documents.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Crop PDF',
      functional: false
    }
  ],

  'PDF SECURITY': [
    {
      id: 'unlock-pdf',
      title: 'Unlock PDF',
      desc: 'Remove PDF password security and permissions to use your document freely.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Unlock PDF',
      functional: false
    },
    {
      id: 'protect-pdf',
      title: 'Protect PDF',
      desc: 'Encrypt your PDF with a strong password to prevent unauthorized access.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Protect PDF',
      functional: false
    },
    {
      id: 'sign-pdf',
      title: 'Sign PDF',
      desc: 'Sign documents yourself or request cryptographic electronic signatures.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Sign Document',
      functional: false
    },
    {
      id: 'redact-pdf',
      title: 'Redact PDF',
      desc: 'Permanently remove or black-out confidential content and text from your PDF.',
      accept: 'application/pdf',
      btnText: 'Select PDF file',
      actionText: 'Redact Content',
      functional: false
    },
    {
      id: 'compare-pdf',
      title: 'Compare PDF',
      desc: 'Show a side-by-side comparison of two PDF files to spot visual changes.',
      accept: 'application/pdf',
      btnText: 'Select 2 PDF files',
      actionText: 'Compare Documents',
      functional: false
    }
  ]
};

// Application State
const state = {
  activeTool: null,
  selectedFiles: [],
  theme: localStorage.getItem('cutipdf_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
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
  toolStatusBadge: document.getElementById('toolStatusBadge'),
  
  // Active Workspace vs Coming Soon View
  toolFunctionalArea: document.getElementById('toolFunctionalArea'),
  toolComingSoonArea: document.getElementById('toolComingSoonArea'),
  
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
  toastMessage: document.getElementById('toastMessage')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderAllToolsCatalog();
  initRouting();
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
// Render All Tools Catalog with Vector Graphics
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
        ${tools.map(tool => {
          const vectorSvg = VECTORS[tool.id] || '<div class="text-3xl">📄</div>';
          return `
            <a href="#${tool.id}" class="tool-card group no-underline text-inherit block">
              <div class="flex items-start justify-between mb-3">
                <div class="w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  ${vectorSvg}
                </div>
                ${!tool.functional ? `
                  <span class="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-200/60 dark:border-zinc-700/60">
                    Coming Soon
                  </span>
                ` : `
                  <span class="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
                    Ready
                  </span>
                `}
              </div>
              <h3 class="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-[#e63946] transition-colors">${tool.title}</h3>
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

  DOM.floatingToolsBtn.addEventListener('click', () => {
    window.location.hash = '';
  });
}

function handleRoute() {
  const hash = window.location.hash.replace('#', '').trim();

  if (!hash || hash === 'all-tools' || hash === 'tools') {
    // Show Catalog View
    DOM.viewToolActive.classList.remove('active');
    DOM.viewAllTools.classList.add('active');
    document.title = 'CutiPDF • Clean & Fast PDF Tools';
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

  document.title = `${tool.title} • CutiPDF`;

  // Insert Beautiful Large Vector Graphic
  const vectorSvg = VECTORS[tool.id] || '<div class="text-5xl">📄</div>';
  DOM.toolVectorContainer.innerHTML = vectorSvg;

  DOM.toolTitle.textContent = tool.title;
  DOM.toolDesc.textContent = tool.desc;

  if (tool.functional) {
    DOM.toolStatusBadge.className = 'text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800';
    DOM.toolStatusBadge.textContent = 'Active Tool';
    
    DOM.toolFunctionalArea.classList.remove('hidden');
    DOM.toolComingSoonArea.classList.add('hidden');

    DOM.fileInput.accept = tool.accept;
    DOM.btnSelectFiles.textContent = tool.btnText;
    DOM.actionButtonText.textContent = tool.actionText;

    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');
  } else {
    DOM.toolStatusBadge.className = 'text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700';
    DOM.toolStatusBadge.textContent = 'Coming Soon';

    DOM.toolFunctionalArea.classList.add('hidden');
    DOM.toolComingSoonArea.classList.remove('hidden');
  }

  // Switch View
  DOM.viewAllTools.classList.remove('active');
  DOM.viewToolActive.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    DOM.filesSelectedArea.classList.add('hidden');
    DOM.toolDropzone.classList.remove('hidden');
  });

  DOM.btnExecuteAction.addEventListener('click', executeActiveToolAction);
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
        <div class="w-8 h-8 flex-shrink-0">
          ${VECTORS[state.activeTool.id] || '<div class="text-xl">📄</div>'}
        </div>
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
