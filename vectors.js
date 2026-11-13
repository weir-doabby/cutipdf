/**
 * Vector Illustrations for CutiPDF
 * Clean, modern, duotone vector graphics for all 30 PDF tools
 */

const VECTORS = {
  // 1. JPG to PDF
  'jpg-to-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="14" width="26" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="13" cy="21" r="2.5" fill="#F59E0B"/>
      <path d="M8 32l6-7 5 5 6-7 5 9H8z" fill="#FCD34D"/>
      <path d="M26 25h7m-3-3l3 3-3 3" stroke="#E63946" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="34" y="10" width="24" height="34" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <path d="M46 10v9h12" fill="#FECACA" stroke="#E63946" stroke-width="2"/>
      <rect x="39" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="46" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
    </svg>
  `,

  // 2. Word to PDF
  'word-to-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="12" width="22" height="32" rx="4" fill="#DBEAFE" stroke="#2563EB" stroke-width="2.2"/>
      <path d="M11 22l2.5 10 3-8 3 8 2.5-10" stroke="#2563EB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 28h8m-3-3l3 3-3 3" stroke="#E63946" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="12" width="22" height="32" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="38" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="45" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
    </svg>
  `,

  // 3. PowerPoint to PDF
  'powerpoint-to-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="12" width="22" height="32" rx="4" fill="#FFEDD5" stroke="#EA580C" stroke-width="2.2"/>
      <text x="17" y="32" font-size="14" font-weight="800" fill="#EA580C" text-anchor="middle" font-family="sans-serif">P</text>
      <path d="M24 28h8m-3-3l3 3-3 3" stroke="#E63946" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="12" width="22" height="32" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="38" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="45" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
    </svg>
  `,

  // 4. Excel to PDF
  'excel-to-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="12" width="22" height="32" rx="4" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.2"/>
      <text x="17" y="32" font-size="13" font-weight="800" fill="#16A34A" text-anchor="middle" font-family="sans-serif">X</text>
      <path d="M24 28h8m-3-3l3 3-3 3" stroke="#E63946" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="12" width="22" height="32" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="38" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="45" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
    </svg>
  `,

  // 5. HTML to PDF
  'html-to-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="14" width="24" height="26" rx="4" fill="#F3F4F6" stroke="#4B5563" stroke-width="2"/>
      <path d="M6 21h24M10 18h1m2 0h1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M12 28l-3 3 3 3m7-6l3 3-3 3m-4 7l2-8" stroke="#EA580C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M25 27h7m-3-3l3 3-3 3" stroke="#E63946" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="10" width="24" height="34" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="39" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="46" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
    </svg>
  `,

  // 6. Text to PDF
  'text-to-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="8" y="10" width="24" height="34" rx="4" fill="#F3E8FF" stroke="#9333EA" stroke-width="2"/>
      <path d="M13 18h14M13 24h14M13 30h9" stroke="#9333EA" stroke-width="2" stroke-linecap="round"/>
      <path d="M26 27h7m-3-3l3 3-3 3" stroke="#E63946" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="10" width="24" height="34" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="39" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="46" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
    </svg>
  `,

  // 7. Merge PDF
  'merge-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="10" y="16" width="22" height="32" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2"/>
      <rect x="20" y="11" width="22" height="32" rx="4" fill="#FECDD3" stroke="#E11D48" stroke-width="2"/>
      <rect x="30" y="18" width="24" height="34" rx="4" fill="#FFFFFF" stroke="#E63946" stroke-width="2.5"/>
      <rect x="35" y="32" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="42" y="37" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
      <circle cx="21" cy="45" r="7" fill="#E63946"/>
      <path d="M21 41v8M17 45h8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 8. Split PDF
  'split-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <path d="M32 12v40" stroke="#E63946" stroke-width="2" stroke-dasharray="3 3"/>
      <circle cx="24" cy="38" r="3" fill="none" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="24" cy="46" r="3" fill="none" stroke="#F59E0B" stroke-width="2"/>
      <path d="M26 39l10-8M26 45l10 8" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
      <rect x="19" y="18" width="10" height="5" rx="1.5" fill="#E63946"/>
      <rect x="35" y="18" width="10" height="5" rx="1.5" fill="#E63946"/>
    </svg>
  `,

  // 9. Remove Pages
  'remove-pages': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="12" y="10" width="28" height="38" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2"/>
      <rect x="28" y="18" width="24" height="34" rx="4" fill="#FFFFFF" stroke="#DC2626" stroke-width="2.2"/>
      <circle cx="40" cy="35" r="8" fill="#DC2626"/>
      <path d="M36 31l8 8M44 31l-8 8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 10. Extract Pages
  'extract-pages': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="10" y="14" width="28" height="38" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2"/>
      <rect x="26" y="8" width="26" height="36" rx="4" fill="#FEF3C7" stroke="#D97706" stroke-width="2.2"/>
      <path d="M39 21v10m-4-6l4-4 4 4" stroke="#D97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  // 11. Organize PDF
  'organize-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="10" y="10" width="18" height="20" rx="3" fill="#FEE2E2" stroke="#E63946" stroke-width="1.8"/>
      <rect x="36" y="10" width="18" height="20" rx="3" fill="#FEE2E2" stroke="#E63946" stroke-width="1.8"/>
      <rect x="10" y="34" width="18" height="20" rx="3" fill="#FEE2E2" stroke="#E63946" stroke-width="1.8"/>
      <rect x="36" y="34" width="18" height="20" rx="3" fill="#FEE2E2" stroke="#E63946" stroke-width="1.8"/>
      <path d="M24 20h8m-3-3l3 3-3 3" stroke="#E63946" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 12. Scan to PDF
  'scan-to-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="18" width="36" height="32" rx="4" fill="#F3F4F6" stroke="#4B5563" stroke-width="2"/>
      <rect x="20" y="10" width="24" height="22" rx="3" fill="#FEE2E2" stroke="#E63946" stroke-width="1.8"/>
      <path d="M10 32h44" stroke="#06B6D4" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M16 42h6" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 13. Compress PDF
  'compress-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="16" y="10" width="32" height="44" rx="5" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="2.2"/>
      <path d="M8 32h8m-3-3l3 3-3 3" stroke="#8B5CF6" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M56 32h-8m3-3l-3 3 3 3" stroke="#8B5CF6" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="22" y="27" width="20" height="8" rx="2" fill="#8B5CF6"/>
      <text x="32" y="33" font-size="6" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
    </svg>
  `,

  // 14. Repair PDF
  'repair-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <path d="M22 24l8 8-4 4 12 2-2-12-4 4-8-8z" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/>
      <circle cx="40" cy="40" r="8" fill="#10B981"/>
      <path d="M40 36v8M36 40h8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 15. OCR PDF
  'ocr-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="12" y="10" width="36" height="44" rx="5" fill="#F3F4F6" stroke="#4B5563" stroke-width="2"/>
      <path d="M18 18h16M18 24h20M18 30h14M18 36h18" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"/>
      <circle cx="42" cy="40" r="9" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
      <path d="M48 47l6 6" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
      <text x="42" y="43" font-size="7" font-weight="bold" fill="#2563EB" text-anchor="middle" font-family="sans-serif">A</text>
    </svg>
  `,

  // 16. PDF to JPG
  'pdf-to-jpg': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="10" width="24" height="34" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="11" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="18" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
      <path d="M25 25h7m-3-3l3 3-3 3" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="14" width="26" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="41" cy="21" r="2.5" fill="#F59E0B"/>
      <path d="M36 32l6-7 5 5 6-7 5 9H36z" fill="#FCD34D"/>
    </svg>
  `,

  // 17. PDF to Word
  'pdf-to-word': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="12" width="22" height="32" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="10" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="17" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
      <path d="M24 28h8m-3-3l3 3-3 3" stroke="#2563EB" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="12" width="22" height="32" rx="4" fill="#DBEAFE" stroke="#2563EB" stroke-width="2.2"/>
      <path d="M39 22l2.5 10 3-8 3 8 2.5-10" stroke="#2563EB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  // 18. PDF to PowerPoint
  'pdf-to-powerpoint': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="12" width="22" height="32" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="10" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="17" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
      <path d="M24 28h8m-3-3l3 3-3 3" stroke="#EA580C" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="12" width="22" height="32" rx="4" fill="#FFEDD5" stroke="#EA580C" stroke-width="2.2"/>
      <text x="45" y="32" font-size="14" font-weight="800" fill="#EA580C" text-anchor="middle" font-family="sans-serif">P</text>
    </svg>
  `,

  // 19. PDF to Excel
  'pdf-to-excel': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="6" y="12" width="22" height="32" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="10" y="27" width="14" height="6" rx="2" fill="#E63946"/>
      <text x="17" y="32" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
      <path d="M24 28h8m-3-3l3 3-3 3" stroke="#16A34A" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="34" y="12" width="22" height="32" rx="4" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.2"/>
      <text x="45" y="32" font-size="13" font-weight="800" fill="#16A34A" text-anchor="middle" font-family="sans-serif">X</text>
    </svg>
  `,

  // 20. PDF to PDF/A
  'pdf-to-pdfa': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <rect x="22" y="24" width="20" height="8" rx="2" fill="#E63946"/>
      <text x="32" y="30" font-size="6" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
      <circle cx="32" cy="42" r="6" fill="#059669"/>
      <text x="32" y="45" font-size="8" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">A</text>
    </svg>
  `,

  // 21. Rotate PDF
  'rotate-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="18" y="14" width="28" height="36" rx="4" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
      <path d="M12 24a18 18 0 1 1-1 12m1-12h6m-6 0v6" stroke="#3B82F6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="25" y="29" width="14" height="6" rx="2" fill="#3B82F6"/>
      <text x="32" y="34" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">PDF</text>
    </svg>
  `,

  // 22. Page Numbers
  'page-numbers': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#F3F4F6" stroke="#4B5563" stroke-width="2"/>
      <path d="M20 18h24M20 24h24M20 30h16" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round"/>
      <rect x="26" y="38" width="12" height="10" rx="3" fill="#3B82F6"/>
      <text x="32" y="46" font-size="7.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">#1</text>
    </svg>
  `,

  // 23. Watermark PDF
  'watermark-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <path d="M18 42l28-20" stroke="#F43F5E" stroke-width="3" stroke-dasharray="4 2" stroke-linecap="round"/>
      <text x="32" y="33" transform="rotate(-30 32 33)" font-size="6" font-weight="bold" fill="#F43F5E" text-anchor="middle" font-family="sans-serif">CONFIDENTIAL</text>
    </svg>
  `,

  // 24. Edit PDF
  'edit-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="12" y="10" width="34" height="44" rx="4" fill="#F3F4F6" stroke="#4B5563" stroke-width="2"/>
      <path d="M18 18h16M18 24h22M18 30h14" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"/>
      <path d="M40 22l6 6-16 16h-6v-6l16-16z" fill="#F59E0B" stroke="#D97706" stroke-width="1.8"/>
    </svg>
  `,

  // 25. Crop PDF
  'crop-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#F3F4F6" stroke="#4B5563" stroke-width="2"/>
      <path d="M18 24h20v20M24 18v20h20" stroke="#059669" stroke-width="2.2" stroke-linecap="round"/>
    </svg>
  `,

  // 26. Unlock PDF
  'unlock-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#CCFBF1" stroke="#0D9488" stroke-width="2.2"/>
      <rect x="24" y="30" width="16" height="14" rx="3" fill="#0D9488"/>
      <path d="M28 30v-6a4 4 0 0 1 8 0" stroke="#0D9488" stroke-width="2.5" fill="none"/>
      <circle cx="32" cy="37" r="1.5" fill="#FFFFFF"/>
    </svg>
  `,

  // 27. Protect PDF
  'protect-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#FCE7F3" stroke="#DB2777" stroke-width="2.2"/>
      <rect x="23" y="28" width="18" height="16" rx="3" fill="#DB2777"/>
      <path d="M27 28v-5a5 5 0 0 1 10 0v5" stroke="#DB2777" stroke-width="2.5" fill="none"/>
      <circle cx="32" cy="36" r="1.5" fill="#FFFFFF"/>
    </svg>
  `,

  // 28. Sign PDF
  'sign-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#FEE2E2" stroke="#E63946" stroke-width="2.2"/>
      <path d="M20 40h24" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="2 2"/>
      <path d="M22 36c4-6 6 8 10-2s6 4 10-3" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
      <path d="M42 22l6 6-4 4-6-6 4-4z" fill="#4B5563"/>
    </svg>
  `,

  // 29. Redact PDF
  'redact-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="14" y="10" width="36" height="44" rx="5" fill="#F3F4F6" stroke="#1F2937" stroke-width="2"/>
      <rect x="18" y="20" width="22" height="4" rx="1" fill="#111827"/>
      <rect x="18" y="28" width="28" height="4" rx="1" fill="#111827"/>
      <rect x="18" y="36" width="16" height="4" rx="1" fill="#111827"/>
    </svg>
  `,

  // 30. Compare PDF
  'compare-pdf': `
    <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
      <rect x="8" y="12" width="22" height="34" rx="4" fill="#FEE2E2" stroke="#E63946" stroke-width="2"/>
      <path d="M12 20h14M12 26h14" stroke="#E63946" stroke-width="1.5"/>
      <rect x="34" y="12" width="22" height="34" rx="4" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
      <path d="M38 20h14M38 26h10" stroke="#2563EB" stroke-width="1.5"/>
      <path d="M26 40l6 4-6 4" stroke="#4B5563" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `
};
