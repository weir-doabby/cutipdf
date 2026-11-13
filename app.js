/**
 * CutiPDF (cutipdf.com) - Modern Minimalist PDF Studio
 * Inspired by iLovePDF & Documents by Readdle
 * 100% In-Browser & Client-Side Privacy
 */

// Application State
const state = {
  currentTab: 'convert', // 'convert', 'tools', 'history'
  activeTool: 'image-to-pdf', // 'image-to-pdf', 'merge-pdf', 'text-to-pdf'
  
  // Image to PDF Workspace
  images: [], // { id, file, url, name, size, width, height, rotation: 0 }
  settings: {
    orientation: 'auto', // 'auto', 'portrait', 'landscape'
    pageSize: 'fit', // 'fit', 'a4', 'letter'
    margin: 'none', // 'none', 'small', 'big'
    outputName: 'CutiPDF_Document'
  },
  
  // Merge PDF Workspace
  pdfFiles: [], // { id, file, name, size, pageCount }
  
  // Text to PDF
  textNote: '',
  textTitle: 'My Notes',

  // History & Stats
  history: JSON.parse(localStorage.getItem('cutipdf_history') || '[]'),
  stats: JSON.parse(localStorage.getItem('cutipdf_stats') || '{"converted": 0, "images": 0}')
};

// DOM Elements
const DOM = {
  tabContents: document.querySelectorAll('.tab-content'),
  navButtons: document.querySelectorAll('.nav-btn'),
  fabUpload: document.getElementById('fabUpload'),
  fileInputImages: document.getElementById('fileInputImages'),
  fileInputPdfs: document.getElementById('fileInputPdfs'),
  
  // Convert tab sections
  dropzoneInitial: document.getElementById('dropzoneInitial'),
  workspaceActive: document.getElementById('workspaceActive'),
  imagesGrid: document.getElementById('imagesGrid'),
  btnAddMoreImages: document.getElementById('btnAddMoreImages'),
  
  // Conversion Settings Controls
  btnOrientation: document.querySelectorAll('[data-orientation]'),
  btnPageSize: document.querySelectorAll('[data-pagesize]'),
  btnMargin: document.querySelectorAll('[data-margin]'),
  inputFilename: document.getElementById('inputFilename'),
  btnConvertImages: document.getElementById('btnConvertImages'),
  btnClearWorkspace: document.getElementById('btnClearWorkspace'),
  
  // Progress & Result
  conversionProgress: document.getElementById('conversionProgress'),
  progressBar: document.getElementById('progressBar'),
  progressLabel: document.getElementById('progressLabel'),
  
  // History & Profile
  historyList: document.getElementById('historyList'),
  statTotalConverted: document.getElementById('statTotalConverted'),
  statTotalImages: document.getElementById('statTotalImages'),
  btnClearHistory: document.getElementById('btnClearHistory'),
  
  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initDropzones();
  initSettingsControls();
  initImageWorkspace();
  initMergeWorkspace();
  initTextWorkspace();
  renderHistory();
  renderStats();
});

// ==========================================
// Navigation & Tabs
// ==========================================
function initNavigation() {
  DOM.navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  if (DOM.fabUpload) {
    DOM.fabUpload.addEventListener('click', () => {
      switchTab('convert');
      if (DOM.fileInputImages) {
        DOM.fileInputImages.click();
      }
    });
  }
}

function switchTab(tabId) {
  state.currentTab = tabId;

  DOM.tabContents.forEach(tab => {
    tab.classList.remove('active');
    if (tab.id === `tab-${tabId}`) {
      tab.classList.add('active');
    }
  });

  DOM.navButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.switchTab = switchTab;

// ==========================================
// Settings Controls (iLovePDF / Readdle style)
// ==========================================
function initSettingsControls() {
  // Orientation
  DOM.btnOrientation.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.btnOrientation.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.settings.orientation = btn.getAttribute('data-orientation');
    });
  });

  // Page Size
  DOM.btnPageSize.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.btnPageSize.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.settings.pageSize = btn.getAttribute('data-pagesize');
    });
  });

  // Margin
  DOM.btnMargin.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.btnMargin.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.settings.margin = btn.getAttribute('data-margin');
    });
  });

  // Filename input
  if (DOM.inputFilename) {
    DOM.inputFilename.addEventListener('input', (e) => {
      state.settings.outputName = e.target.value.trim() || 'CutiPDF_Document';
    });
  }

  // Clear workspace
  if (DOM.btnClearWorkspace) {
    DOM.btnClearWorkspace.addEventListener('click', () => {
      state.images = [];
      updateWorkspaceView();
      showToast('Workspace cleared');
    });
  }
}

// ==========================================
// Dropzone & File Input
// ==========================================
function initDropzones() {
  const dropzone = DOM.dropzoneInitial;
  if (!dropzone) return;

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
    handleSelectedImages(files);
  });

  dropzone.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
      DOM.fileInputImages.click();
    }
  });

  if (DOM.fileInputImages) {
    DOM.fileInputImages.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      handleSelectedImages(files);
      DOM.fileInputImages.value = '';
    });
  }

  if (DOM.btnAddMoreImages) {
    DOM.btnAddMoreImages.addEventListener('click', () => {
      DOM.fileInputImages.click();
    });
  }
}

// ==========================================
// Image Workspace Management
// ==========================================
async function handleSelectedImages(files) {
  const imageFiles = files.filter(f => f.type.startsWith('image/'));
  if (imageFiles.length === 0) {
    showToast('Please select valid image files (JPG, PNG, WebP)');
    return;
  }

  for (const file of imageFiles) {
    const imgData = await readImageFile(file);
    state.images.push(imgData);
  }

  updateWorkspaceView();
  showToast(`${imageFiles.length} images added to workspace`);
}

function readImageFile(file) {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      resolve({
        id: Math.random().toString(36).substring(2, 9),
        file,
        url,
        name: file.name,
        size: formatBytes(file.size),
        width: img.width,
        height: img.height,
        rotation: 0
      });
    };
    img.src = url;
  });
}

function updateWorkspaceView() {
  if (state.images.length === 0) {
    DOM.dropzoneInitial.classList.remove('hidden');
    DOM.workspaceActive.classList.add('hidden');
    return;
  }

  DOM.dropzoneInitial.classList.add('hidden');
  DOM.workspaceActive.classList.remove('hidden');
  renderImageThumbnails();

  DOM.btnConvertImages.innerHTML = `
    <span>Convert ${state.images.length} ${state.images.length === 1 ? 'Image' : 'Images'} to PDF</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  `;
}

function renderImageThumbnails() {
  DOM.imagesGrid.innerHTML = '';

  state.images.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'thumbnail-card group flex flex-col justify-between';
    card.innerHTML = `
      <div class="relative bg-zinc-100 flex items-center justify-center h-48 overflow-hidden">
        <!-- Page Number Pill -->
        <div class="absolute top-2.5 left-2.5 z-10 bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-800 text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
          Page ${index + 1}
        </div>

        <!-- Quick Action Buttons -->
        <div class="absolute top-2.5 right-2.5 z-10 flex items-center gap-1">
          <button onclick="rotateImage(${index})" class="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-700 hover:text-[#e63946] flex items-center justify-center shadow-xs transition-colors" title="Rotate 90°">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button onclick="removeImage(${index})" class="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-700 hover:text-red-600 flex items-center justify-center shadow-xs transition-colors" title="Remove">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Thumbnail Image with Rotation -->
        <img src="${item.url}" 
             alt="${item.name}" 
             style="transform: rotate(${item.rotation}deg);" 
             class="max-h-full max-w-full object-contain transition-transform duration-200" />
      </div>

      <!-- Card Footer with Reorder and Details -->
      <div class="p-3 bg-white border-t border-zinc-100 flex items-center justify-between">
        <div class="overflow-hidden pr-2">
          <p class="text-xs font-semibold text-zinc-800 truncate" title="${item.name}">${item.name}</p>
          <p class="text-[10px] text-zinc-400">${item.width}×${item.height} • ${item.size}</p>
        </div>

        <!-- Reorder arrows -->
        <div class="flex items-center gap-1">
          <button onclick="moveImage(${index}, -1)" ${index === 0 ? 'disabled' : ''} class="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 disabled:opacity-30 disabled:pointer-events-none" title="Move Left">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onclick="moveImage(${index}, 1)" ${index === state.images.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 disabled:opacity-30 disabled:pointer-events-none" title="Move Right">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    `;

    DOM.imagesGrid.appendChild(card);
  });
}

// Global Image Actions
window.rotateImage = function(index) {
  state.images[index].rotation = (state.images[index].rotation + 90) % 360;
  renderImageThumbnails();
};

window.removeImage = function(index) {
  state.images.splice(index, 1);
  updateWorkspaceView();
};

window.moveImage = function(index, direction) {
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= state.images.length) return;
  const temp = state.images[index];
  state.images[index] = state.images[newIndex];
  state.images[newIndex] = temp;
  renderImageThumbnails();
};

// ==========================================
// Real PDF Conversion Engine (iLovePDF Grade)
// ==========================================
function initImageWorkspace() {
  DOM.btnConvertImages.addEventListener('click', async () => {
    if (state.images.length === 0) return;

    try {
      showProgress(15, 'Preparing document canvas...');
      DOM.btnConvertImages.disabled = true;

      const { PDFDocument, PageSizes } = PDFLib;
      const pdfDoc = await PDFDocument.create();

      for (let i = 0; i < state.images.length; i++) {
        const item = state.images[i];
        const progress = Math.round(20 + (i / state.images.length) * 70);
        showProgress(progress, `Rendering page ${i + 1} of ${state.images.length}...`);

        // Convert image to PNG buffer with applied rotation via canvas
        const orientedBlob = await renderRotatedImageBlob(item);
        const arrayBuffer = await orientedBlob.arrayBuffer();
        const embeddedImage = await pdfDoc.embedPng(arrayBuffer);

        const imgWidth = embeddedImage.width;
        const imgHeight = embeddedImage.height;

        // Determine Page Size & Dimensions
        let pageWidth, pageHeight;
        if (state.settings.pageSize === 'a4') {
          pageWidth = PageSizes.A4[0];
          pageHeight = PageSizes.A4[1];
        } else if (state.settings.pageSize === 'letter') {
          pageWidth = PageSizes.Letter[0];
          pageHeight = PageSizes.Letter[1];
        } else {
          // 'fit' mode: exactly match image
          pageWidth = imgWidth;
          pageHeight = imgHeight;
        }

        // Apply orientation if explicitly chosen
        if (state.settings.orientation === 'portrait' && pageWidth > pageHeight) {
          const temp = pageWidth;
          pageWidth = pageHeight;
          pageHeight = temp;
        } else if (state.settings.orientation === 'landscape' && pageHeight > pageWidth) {
          const temp = pageWidth;
          pageWidth = pageHeight;
          pageHeight = temp;
        }

        // Margins
        let margin = 0;
        if (state.settings.margin === 'small') margin = 20;
        if (state.settings.margin === 'big') margin = 40;

        const availWidth = Math.max(10, pageWidth - margin * 2);
        const availHeight = Math.max(10, pageHeight - margin * 2);

        // Scale image within available area preserving aspect ratio
        const scale = Math.min(availWidth / imgWidth, availHeight / imgHeight);
        const finalWidth = imgWidth * scale;
        const finalHeight = imgHeight * scale;

        // Center on page
        const posX = (pageWidth - finalWidth) / 2;
        const posY = (pageHeight - finalHeight) / 2;

        const page = pdfDoc.addPage([pageWidth, pageHeight]);
        page.drawImage(embeddedImage, {
          x: posX,
          y: posY,
          width: finalWidth,
          height: finalHeight
        });
      }

      showProgress(95, 'Finalizing PDF output...');
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const downloadUrl = URL.createObjectURL(blob);

      const filename = `${state.settings.outputName || 'CutiPDF_Document'}.pdf`;

      // Trigger automatic instant download
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Celebrate with confetti
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#e63946', '#18181b', '#f87171', '#d4d4d8']
        });
      }

      // Record History & Stats
      addHistoryRecord(filename, blob.size, state.images.length);

      showProgress(100, 'Conversion successful! Downloading...');
      setTimeout(() => {
        DOM.conversionProgress.classList.add('hidden');
        DOM.btnConvertImages.disabled = false;
        showToast('🎉 Your PDF has been downloaded successfully!');
      }, 1000);

    } catch (err) {
      console.error(err);
      DOM.conversionProgress.classList.add('hidden');
      DOM.btnConvertImages.disabled = false;
      showToast('Error during conversion. Please check your images.');
    }
  });
}

// Render rotated image to PNG Blob via Canvas
function renderRotatedImageBlob(item) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const rot = item.rotation % 360;

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

      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas blob failed'));
      }, 'image/png');
    };
    img.onerror = reject;
    img.src = item.url;
  });
}

function showProgress(percent, label) {
  DOM.conversionProgress.classList.remove('hidden');
  DOM.progressBar.style.width = `${percent}%`;
  DOM.progressLabel.textContent = label;
}

// ==========================================
// Merge PDF Workspace
// ==========================================
function initMergeWorkspace() {
  const dropzoneMerge = document.getElementById('dropzoneMerge');
  const fileInputPdfs = document.getElementById('fileInputPdfs');
  const btnMergePdfs = document.getElementById('btnMergePdfs');

  if (!dropzoneMerge || !fileInputPdfs) return;

  dropzoneMerge.addEventListener('click', () => fileInputPdfs.click());
  fileInputPdfs.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files).filter(f => f.name.toLowerCase().endsWith('.pdf') || f.type === 'application/pdf');
    if (files.length === 0) return;

    for (const f of files) {
      state.pdfFiles.push({
        id: Math.random().toString(36).substring(2, 9),
        file: f,
        name: f.name,
        size: formatBytes(f.size)
      });
    }

    renderPdfMergeList();
    fileInputPdfs.value = '';
  });

  if (btnMergePdfs) {
    btnMergePdfs.addEventListener('click', async () => {
      if (state.pdfFiles.length < 2) {
        showToast('Please select at least 2 PDF files to merge.');
        return;
      }

      try {
        btnMergePdfs.disabled = true;
        btnMergePdfs.textContent = 'Merging PDFs...';

        const { PDFDocument } = PDFLib;
        const mergedDoc = await PDFDocument.create();

        for (const item of state.pdfFiles) {
          const bytes = await item.file.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          const pages = await mergedDoc.copyPages(doc, doc.getPageIndices());
          pages.forEach(p => mergedDoc.addPage(p));
        }

        const mergedBytes = await mergedDoc.save();
        const blob = new Blob([mergedBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `Merged_${Date.now()}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        addHistoryRecord(`Merged_${Date.now()}.pdf`, blob.size, state.pdfFiles.length);
        showToast('PDF files merged successfully!');

        btnMergePdfs.disabled = false;
        btnMergePdfs.textContent = 'Merge PDF Files';
      } catch (err) {
        console.error(err);
        btnMergePdfs.disabled = false;
        btnMergePdfs.textContent = 'Merge PDF Files';
        showToast('Error merging PDF files.');
      }
    });
  }
}

function renderPdfMergeList() {
  const container = document.getElementById('pdfMergeList');
  const actionArea = document.getElementById('mergeActionArea');
  if (!container) return;

  if (state.pdfFiles.length === 0) {
    container.innerHTML = '';
    if (actionArea) actionArea.classList.add('hidden');
    return;
  }

  if (actionArea) actionArea.classList.remove('hidden');
  container.innerHTML = '';

  state.pdfFiles.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-xl';
    row.innerHTML = `
      <div class="flex items-center gap-3 overflow-hidden">
        <span class="w-8 h-8 rounded-lg bg-red-50 text-[#e63946] flex items-center justify-center font-bold text-xs">PDF</span>
        <div class="overflow-hidden">
          <p class="text-xs font-semibold text-zinc-800 truncate max-w-xs">${item.name}</p>
          <p class="text-[10px] text-zinc-400">${item.size}</p>
        </div>
      </div>
      <button onclick="removePdfFile(${index})" class="text-zinc-400 hover:text-red-500 p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    `;
    container.appendChild(row);
  });
}

window.removePdfFile = function(index) {
  state.pdfFiles.splice(index, 1);
  renderPdfMergeList();
};

// ==========================================
// Text to PDF Workspace
// ==========================================
function initTextWorkspace() {
  const btnConvertText = document.getElementById('btnConvertText');
  const inputNotes = document.getElementById('inputNotes');
  const inputNoteTitle = document.getElementById('inputNoteTitle');

  if (!btnConvertText) return;

  btnConvertText.addEventListener('click', async () => {
    const content = inputNotes.value.trim();
    if (!content) {
      showToast('Please type some notes or paste text to convert.');
      return;
    }

    try {
      const { PDFDocument, StandardFonts, rgb } = PDFLib;
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      const page = pdfDoc.addPage([595, 842]); // A4
      const title = inputNoteTitle.value.trim() || 'Notes';

      page.drawText(title, {
        x: 50,
        y: 780,
        size: 20,
        font: fontBold,
        color: rgb(0.09, 0.09, 0.11)
      });

      page.drawText(`Created with CutiPDF • ${new Date().toLocaleDateString()}`, {
        x: 50,
        y: 760,
        size: 10,
        font: font,
        color: rgb(0.44, 0.44, 0.48)
      });

      // Simple line wrapping
      const lines = content.split('\n');
      let currentY = 720;

      for (const line of lines) {
        if (currentY < 60) break;
        page.drawText(line.substring(0, 80), {
          x: 50,
          y: currentY,
          size: 11,
          font: font,
          color: rgb(0.16, 0.17, 0.2)
        });
        currentY -= 18;
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      addHistoryRecord(`${title}.pdf`, blob.size, 1);
      showToast('Notes converted to PDF successfully!');
    } catch (err) {
      console.error(err);
      showToast('Error converting text to PDF.');
    }
  });
}

// ==========================================
// History & Stats
// ==========================================
function addHistoryRecord(filename, size, fileCount) {
  const record = {
    id: Date.now(),
    filename,
    size: formatBytes(size),
    fileCount,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  };

  state.history.unshift(record);
  if (state.history.length > 25) state.history.pop();
  localStorage.setItem('cutipdf_history', JSON.stringify(state.history));

  state.stats.converted += 1;
  state.stats.images += fileCount;
  localStorage.setItem('cutipdf_stats', JSON.stringify(state.stats));

  renderHistory();
  renderStats();
}

function renderHistory() {
  if (!DOM.historyList) return;
  if (state.history.length === 0) {
    DOM.historyList.innerHTML = `
      <div class="text-center py-10 text-zinc-400">
        <div class="text-3xl mb-2">📑</div>
        <p class="text-xs">No converted documents yet</p>
      </div>
    `;
    return;
  }

  DOM.historyList.innerHTML = '';
  state.history.forEach(item => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between p-3.5 bg-white rounded-xl border border-zinc-200 shadow-2xs hover:border-[#e63946] transition-all text-xs';
    row.innerHTML = `
      <div class="flex items-center gap-2.5 overflow-hidden">
        <span class="text-[#e63946] text-base font-bold">📄</span>
        <div class="overflow-hidden">
          <p class="font-semibold text-zinc-900 truncate max-w-[180px] sm:max-w-xs">${item.filename}</p>
          <p class="text-[11px] text-zinc-400">${item.size} • ${item.date}</p>
        </div>
      </div>
      <span class="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold text-[10px]">Ready</span>
    `;
    DOM.historyList.appendChild(row);
  });
}

function renderStats() {
  if (DOM.statTotalConverted) DOM.statTotalConverted.textContent = state.stats.converted;
  if (DOM.statTotalImages) DOM.statTotalImages.textContent = state.stats.images;

  if (DOM.btnClearHistory) {
    DOM.btnClearHistory.addEventListener('click', () => {
      state.history = [];
      localStorage.removeItem('cutipdf_history');
      renderHistory();
      showToast('Conversion history cleared');
    });
  }
}

// ==========================================
// Quick Toast Notification
// ==========================================
let toastTimer;
function showToast(message) {
  if (toastTimer) clearTimeout(toastTimer);
  DOM.toastMessage.textContent = message;
  DOM.toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  DOM.toast.classList.add('opacity-100', 'translate-y-0');

  toastTimer = setTimeout(() => {
    DOM.toast.classList.remove('opacity-100', 'translate-y-0');
    DOM.toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, 3000);
}

// Format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Tool launcher from Tools Tab
window.launchTool = function(toolName) {
  if (toolName === 'image-to-pdf') {
    switchTab('convert');
    DOM.fileInputImages.click();
  } else if (toolName === 'merge-pdf') {
    switchTab('tools');
    const mergeSection = document.getElementById('toolSectionMerge');
    if (mergeSection) mergeSection.scrollIntoView({ behavior: 'smooth' });
  } else if (toolName === 'text-to-pdf') {
    switchTab('tools');
    const textSection = document.getElementById('toolSectionText');
    if (textSection) textSection.scrollIntoView({ behavior: 'smooth' });
  }
};
