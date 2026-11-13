/**
 * CutiPDF (cutipdf.com) - Cute & Minimalist Japanese-style PDF Studio
 * 100% Client-side conversion, zero server tracking, pure kawaii vibes.
 */

// State Management
const state = {
  currentTab: 'home',
  files: [],
  conversionMode: 'images-to-pdf', // 'images-to-pdf', 'text-to-pdf', 'merge-pdf'
  history: JSON.parse(localStorage.getItem('cutipdf_history') || '[]'),
  sakuraEnabled: localStorage.getItem('cutipdf_sakura') !== 'false',
  stats: JSON.parse(localStorage.getItem('cutipdf_stats') || '{"converted": 0, "savedMb": 0}'),
  selectedKaomoji: localStorage.getItem('cutipdf_kaomoji') || '(｡♥‿♥｡)'
};

// DOM Elements
const elements = {
  tabPanes: document.querySelectorAll('.tab-pane'),
  navItems: document.querySelectorAll('.nav-item'),
  fabButton: document.getElementById('fabUpload'),
  fileInput: document.getElementById('fileInput'),
  dropzone: document.getElementById('dropzone'),
  fileListContainer: document.getElementById('fileListContainer'),
  fileList: document.getElementById('fileList'),
  actionButtons: document.getElementById('actionButtons'),
  btnConvert: document.getElementById('btnConvert'),
  btnClearFiles: document.getElementById('btnClearFiles'),
  progressContainer: document.getElementById('progressContainer'),
  progressBar: document.getElementById('progressBar'),
  progressText: document.getElementById('progressText'),
  toast: document.getElementById('toast'),
  toastText: document.getElementById('toastText'),
  sakuraContainer: document.getElementById('sakuraContainer'),
  sakuraToggle: document.getElementById('sakuraToggle'),
  historyList: document.getElementById('historyList'),
  statConverted: document.getElementById('statConverted'),
  userKaomoji: document.getElementById('userKaomoji'),
  kaomojiPicker: document.getElementById('kaomojiPicker')
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initDragAndDrop();
  initFileInput();
  initConversionEngine();
  initSakuraEffect();
  renderHistory();
  renderStats();
  initKaomojiPicker();
});

// Navigation Handling
function initNavigation() {
  elements.navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Center FAB (+) button
  if (elements.fabButton) {
    elements.fabButton.addEventListener('click', () => {
      // If not on home, switch to home first
      switchTab('home');
      // Trigger file selector
      elements.fileInput.click();
    });
  }
}

function switchTab(tabId) {
  state.currentTab = tabId;

  // Update tabs visibility
  elements.tabPanes.forEach(pane => {
    pane.classList.remove('active');
    if (pane.id === `tab-${tabId}`) {
      pane.classList.add('active');
    }
  });

  // Update nav item active state
  elements.navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Drag & Drop Handling
function initDragAndDrop() {
  const dropzone = elements.dropzone;
  if (!dropzone) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('drag-active');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('drag-active');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const droppedFiles = Array.from(dt.files);
    handleNewFiles(droppedFiles);
  });

  dropzone.addEventListener('click', (e) => {
    // Avoid re-triggering if clicked on inner buttons
    if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
      elements.fileInput.click();
    }
  });
}

// File Input
function initFileInput() {
  elements.fileInput.addEventListener('change', (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleNewFiles(selectedFiles);
    elements.fileInput.value = ''; // reset so same file can be picked again
  });

  elements.btnClearFiles.addEventListener('click', () => {
    state.files = [];
    renderFileList();
    showToast('(・_・;) لیست فایل‌ها پاک شد');
  });
}

function handleNewFiles(newFiles) {
  if (!newFiles || newFiles.length === 0) return;

  // Filter allowed file types
  const validFiles = newFiles.filter(file => {
    const type = file.type;
    const name = file.name.toLowerCase();
    return (
      type.startsWith('image/') ||
      type === 'application/pdf' ||
      name.endsWith('.pdf') ||
      name.endsWith('.txt') ||
      name.endsWith('.md')
    );
  });

  if (validFiles.length === 0) {
    showToast('(・`ω´・) لطفاً فایل تصویری، پی‌دی‌اف یا متن انتخاب کنید!');
    return;
  }

  // Detect mode based on files
  const hasPdfs = validFiles.some(f => f.name.endsWith('.pdf') || f.type === 'application/pdf');
  const hasImages = validFiles.some(f => f.type.startsWith('image/'));

  if (hasPdfs && !hasImages) {
    state.conversionMode = 'merge-pdf';
  } else {
    state.conversionMode = 'images-to-pdf';
  }

  state.files.push(...validFiles);
  renderFileList();
  showToast(`(◕‿◕✿) ${validFiles.length} فایل جدید اضافه شد`);
}

function renderFileList() {
  if (state.files.length === 0) {
    elements.fileListContainer.classList.add('hidden');
    elements.actionButtons.classList.add('hidden');
    return;
  }

  elements.fileListContainer.classList.remove('hidden');
  elements.actionButtons.classList.remove('hidden');
  elements.fileList.innerHTML = '';

  state.files.forEach((file, index) => {
    const card = document.createElement('div');
    card.className = 'flex items-center justify-between p-3.5 bg-white border border-[#fae1e8] rounded-2xl shadow-sm hover:border-[#ff85a1] transition-all';

    const isImage = file.type.startsWith('image/');
    const isPdf = file.name.toLowerCase().endsWith('.pdf');
    const iconBadge = isImage ? '🌸 عکس' : isPdf ? '📑 PDF' : '📝 متن';
    const sizeStr = formatBytes(file.size);

    let previewHtml = '';
    if (isImage) {
      const url = URL.createObjectURL(file);
      previewHtml = `<img src="${url}" class="w-12 h-12 object-cover rounded-xl border border-pink-100 flex-shrink-0" />`;
    } else {
      previewHtml = `
        <div class="w-12 h-12 rounded-xl bg-[#fff0f3] text-[#ff5d8f] flex items-center justify-center font-bold text-lg flex-shrink-0">
          ${isPdf ? 'PDF' : 'TXT'}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="flex items-center gap-3 overflow-hidden">
        ${previewHtml}
        <div class="text-right overflow-hidden">
          <p class="font-medium text-sm text-[#2b2d42] truncate max-w-[180px] sm:max-w-xs" title="${file.name}">${file.name}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#fff0f3] text-[#ff5d8f]">${iconBadge}</span>
            <span class="text-[11px] text-gray-400 font-latin">${sizeStr}</span>
          </div>
        </div>
      </div>
      <button onclick="removeFile(${index})" class="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors" title="حذف">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    `;
    elements.fileList.appendChild(card);
  });

  // Update button text
  if (state.conversionMode === 'merge-pdf') {
    elements.btnConvert.innerHTML = `<span>ادغام ${state.files.length} فایل PDF ✨</span>`;
  } else {
    elements.btnConvert.innerHTML = `<span>تبدیل ${state.files.length} فایل به PDF ✨</span>`;
  }
}

window.removeFile = function(index) {
  state.files.splice(index, 1);
  renderFileList();
};

// Conversion Engine (100% In-Browser using PDFLib & jsPDF)
function initConversionEngine() {
  elements.btnConvert.addEventListener('click', async () => {
    if (state.files.length === 0) return;

    try {
      showProgress(15, 'در حال آماده‌سازی جادو... (｡♥‿♥｡)');
      elements.btnConvert.disabled = true;

      let pdfBytes;
      let outputFileName = `cutipdf_${Date.now()}.pdf`;

      if (state.conversionMode === 'merge-pdf') {
        pdfBytes = await mergePdfFiles(state.files);
      } else {
        pdfBytes = await convertImagesToPdf(state.files);
      }

      showProgress(90, 'در حال پردازش نهایی...');

      // Create download blob
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const downloadUrl = URL.createObjectURL(blob);

      // Trigger instant download
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = outputFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      showProgress(100, 'تبدیل با موفقیت انجام شد! (◕‿◕✿)');

      // Kawaii confetti celebration
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#ff85a1', '#ffccd5', '#b7e4c7', '#bde0fe']
        });
      }

      // Record to history and stats
      addHistoryRecord(outputFileName, blob.size, state.files.length);

      setTimeout(() => {
        elements.progressContainer.classList.add('hidden');
        elements.btnConvert.disabled = false;
        showToast('(｡♥‿♥｡) فایل پی‌دی‌اف شما با موفقیت دانلود شد!');
      }, 1200);

    } catch (err) {
      console.error(err);
      elements.progressContainer.classList.add('hidden');
      elements.btnConvert.disabled = false;
      showToast('(╥﹏╥) متاسفانه خطایی در تبدیل فایل‌ها رخ داد.');
    }
  });
}

// Convert Images to PDF via PDF-Lib
async function convertImagesToPdf(files) {
  const { PDFDocument } = PDFLib;
  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const progress = Math.round(20 + (i / files.length) * 60);
    showProgress(progress, `تبدیل صفحه ${i + 1} از ${files.length}...`);

    const arrayBuffer = await file.arrayBuffer();
    let embeddedImage;

    if (file.type === 'image/jpeg' || file.name.toLowerCase().endsWith('.jpg') || file.name.toLowerCase().endsWith('.jpeg')) {
      embeddedImage = await pdfDoc.embedJpg(arrayBuffer);
    } else if (file.type === 'image/png' || file.name.toLowerCase().endsWith('.png')) {
      embeddedImage = await pdfDoc.embedPng(arrayBuffer);
    } else {
      // For webp or other formats, convert to PNG via Canvas first
      const pngBuffer = await convertImageToPngBuffer(file);
      embeddedImage = await pdfDoc.embedPng(pngBuffer);
    }

    const { width, height } = embeddedImage.scale(1);
    
    // Create page matching image aspect ratio (or A4 scale)
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(embeddedImage, {
      x: 0,
      y: 0,
      width: width,
      height: height,
    });
  }

  return await pdfDoc.save();
}

// Merge Multiple PDFs
async function mergePdfFiles(files) {
  const { PDFDocument } = PDFLib;
  const mergedPdf = await PDFDocument.create();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    showProgress(Math.round(20 + (i / files.length) * 60), `ادغام فایل ${i + 1} از ${files.length}...`);

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  return await mergedPdf.save();
}

// Helper: Convert Any Image to PNG Buffer via Canvas
function convertImageToPngBuffer(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        blob.arrayBuffer().then(resolve).catch(reject);
      }, 'image/png');
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

function showProgress(percent, text) {
  elements.progressContainer.classList.remove('hidden');
  elements.progressBar.style.width = `${percent}%`;
  elements.progressText.textContent = text;
}

// Toast notification
let toastTimeout;
function showToast(message) {
  if (toastTimeout) clearTimeout(toastTimeout);
  elements.toastText.textContent = message;
  elements.toast.classList.remove('opacity-0', 'translate-y-6', 'pointer-events-none');
  elements.toast.classList.add('opacity-100', 'translate-y-0');

  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove('opacity-100', 'translate-y-0');
    elements.toast.classList.add('opacity-0', 'translate-y-6', 'pointer-events-none');
  }, 3200);
}

// History & Stats
function addHistoryRecord(filename, size, fileCount) {
  const record = {
    id: Date.now(),
    filename,
    size: formatBytes(size),
    fileCount,
    date: new Date().toLocaleDateString('fa-IR')
  };

  state.history.unshift(record);
  if (state.history.length > 20) state.history.pop();
  localStorage.setItem('cutipdf_history', JSON.stringify(state.history));

  // Update stats
  state.stats.converted += 1;
  state.stats.savedMb += Math.round(size / (1024 * 1024) * 10) / 10;
  localStorage.setItem('cutipdf_stats', JSON.stringify(state.stats));

  renderHistory();
  renderStats();
}

function renderHistory() {
  if (!elements.historyList) return;
  if (state.history.length === 0) {
    elements.historyList.innerHTML = `
      <div class="text-center py-8 text-gray-400">
        <div class="text-3xl mb-2">🌸</div>
        <p class="text-sm">هنوز فایلی تبدیل نشده است</p>
      </div>
    `;
    return;
  }

  elements.historyList.innerHTML = '';
  state.history.forEach(item => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between p-3 bg-white rounded-xl border border-[#fae1e8] shadow-xs hover:border-[#ff85a1] transition-all text-xs';
    row.innerHTML = `
      <div class="flex items-center gap-2 overflow-hidden">
        <span class="text-[#ff5d8f] text-base">📑</span>
        <div class="overflow-hidden">
          <p class="font-medium text-[#2b2d42] truncate max-w-[150px] font-latin">${item.filename}</p>
          <p class="text-[11px] text-gray-400 font-latin">${item.size} • ${item.date}</p>
        </div>
      </div>
      <span class="text-[#52b788] bg-[#e8f5e9] px-2 py-0.5 rounded-full font-semibold">موفق</span>
    `;
    elements.historyList.appendChild(row);
  });
}

function renderStats() {
  if (elements.statConverted) {
    elements.statConverted.textContent = state.stats.converted;
  }
}

// Kaomoji Picker
function initKaomojiPicker() {
  if (!elements.userKaomoji) return;
  elements.userKaomoji.textContent = state.selectedKaomoji;

  const kaomojis = ['(｡♥‿♥｡)', '(◕‿◕✿)', '(✿◠‿◠)', '(=^･ω･^=)', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '(づ｡◕‿‿◕｡)づ'];
  if (elements.kaomojiPicker) {
    elements.kaomojiPicker.innerHTML = '';
    kaomojis.forEach(km => {
      const btn = document.createElement('button');
      btn.className = 'px-3 py-1.5 rounded-xl border border-pink-100 bg-pink-50 text-xs text-[#ff5d8f] hover:bg-pink-100 transition-all font-latin font-semibold';
      btn.textContent = km;
      btn.onclick = () => {
        state.selectedKaomoji = km;
        localStorage.setItem('cutipdf_kaomoji', km);
        elements.userKaomoji.textContent = km;
        showToast(`${km} کاوموجی شما بروز شد!`);
      };
      elements.kaomojiPicker.appendChild(btn);
    });
  }
}

// Sakura Falling Petals Animation
function initSakuraEffect() {
  if (elements.sakuraToggle) {
    elements.sakuraToggle.checked = state.sakuraEnabled;
    elements.sakuraToggle.addEventListener('change', (e) => {
      state.sakuraEnabled = e.target.checked;
      localStorage.setItem('cutipdf_sakura', state.sakuraEnabled);
      if (!state.sakuraEnabled) {
        elements.sakuraContainer.innerHTML = '';
      }
    });
  }

  // Generate petals periodically
  setInterval(() => {
    if (!state.sakuraEnabled || !elements.sakuraContainer) return;
    createSakuraPetal();
  }, 1200);
}

function createSakuraPetal() {
  const petal = document.createElement('div');
  petal.className = 'sakura-petal';
  const size = Math.random() * 8 + 10;
  petal.style.width = `${size}px`;
  petal.style.height = `${size * 1.3}px`;
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${Math.random() * 5 + 6}s`;
  elements.sakuraContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 11000);
}

// Helper: Format Bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Tools Quick Launcher
window.openTool = function(toolType) {
  switchTab('home');
  if (toolType === 'images-to-pdf') {
    elements.fileInput.accept = 'image/*';
    elements.fileInput.click();
  } else if (toolType === 'merge-pdf') {
    elements.fileInput.accept = 'application/pdf';
    elements.fileInput.click();
  } else if (toolType === 'text-to-pdf') {
    elements.fileInput.accept = '.txt,.md,text/plain';
    elements.fileInput.click();
  }
};
