/**
 * Hand-Drawn Minimal Vector Illustrations for CutiPDF
 * Authentic irregular ink lines with pastel watercolor blotches
 */

const VECTORS = {
  'merge-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M18 58C14 34 34 15 58 14C83 13 98 33 96 57C94 82 74 97 51 95C29 93 21 80 18 58Z" fill="#FFE2E7"></path>
      <path d="M17 28L50 24L54 69L21 73Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M56 32L89 35L85 80L52 77Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M41 51C49 45 57 46 64 53" stroke="#AF2247" stroke-width="2.9" stroke-linecap="round"></path>
      <path d="M59 46L66 54L56 56" stroke="#AF2247" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx="31" cy="46" r="1.9" fill="#1D1C14"></circle>
      <circle cx="39" cy="45" r="1.8" fill="#1D1C14"></circle>
      <path d="M32 51C34 53 37 53 39 50" stroke="#1D1C14" stroke-width="1.9" stroke-linecap="round"></path>
    </svg>
  `,

  'split-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M15 52C17 28 36 14 60 16C84 18 97 38 94 62C91 84 71 96 47 94C26 92 13 74 15 52Z" fill="#FFE2E7"></path>
      <path d="M21 25L47 22L50 82L24 85Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M62 24L88 27L84 87L58 84Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M55 17C54 42 56 68 55 92" stroke="#AF2247" stroke-width="2.5" stroke-dasharray="4 5" stroke-linecap="round"></path>
      <circle cx="47" cy="78" r="5" stroke="#1D1C14" stroke-width="2.3" fill="#FFF0C2"></circle>
      <circle cx="63" cy="78" r="5" stroke="#1D1C14" stroke-width="2.3" fill="#FFF0C2"></circle>
      <path d="M50 74L60 55M60 74L50 55" stroke="#1D1C14" stroke-width="2.3" stroke-linecap="round"></path>
    </svg>
  `,

  'remove-pages': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M16 56C14 31 35 13 61 15C85 17 98 39 94 63C90 86 68 97 44 93C24 90 18 76 16 56Z" fill="#FFE2E7"></path>
      <path d="M28 23L79 21L81 87L29 89Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M38 38C48 37 58 38 68 37M38 48C46 49 54 47 62 48" stroke="#CBC6BB" stroke-width="2.7" stroke-linecap="round"></path>
      <path d="M39 57L69 81M69 57L39 81" stroke="#AF2247" stroke-width="3.6" stroke-linecap="round"></path>
    </svg>
  `,

  'extract-pages': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M18 54C16 30 37 15 62 16C86 17 97 38 94 61C91 84 69 96 46 93C25 90 20 75 18 54Z" fill="#FFE2E7"></path>
      <path d="M22 35L65 33L67 87L23 89Z" fill="#F3EDE1" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M43 20L86 24L82 78L39 74Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M64 38L66.8 44L73.5 45L68.5 49.8L69.8 56.4L64 52.7L58.2 56.4L59.5 49.8L54.5 45L61.2 44Z" fill="#FFF0C2" stroke="#1D1C14" stroke-width="2.1" stroke-linejoin="round"></path>
    </svg>
  `,

  'organize-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M15 57C14 33 34 14 58 15C83 16 98 37 95 61C92 85 71 97 47 94C26 91 16 77 15 57Z" fill="#FFE2E7"></path>
      <path d="M19 25L47 22L50 54L22 57Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M61 21L89 24L85 56L57 53Z" fill="#FFF0C2" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M38 56L70 54L71 88L39 90Z" fill="#D8F6EC" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M49 36C54 31 59 32 61 36" stroke="#AF2247" stroke-width="2.6" stroke-linecap="round"></path>
    </svg>
  `,

  'compress-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M16 55C14 31 35 14 59 15C84 16 98 37 95 61C92 84 71 96 47 94C25 92 18 76 16 55Z" fill="#D8F6EC"></path>
      <path d="M36 33L74 31L75 78L37 79Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M14 56L29 55M24 50L30 55L25 61" stroke="#006B5B" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M96 54L81 55M86 50L80 55L85 61" stroke="#006B5B" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M44 48C51 47 59 49 66 48M44 59C50 58 55 60 61 59" stroke="#1D1C14" stroke-width="2.5" stroke-linecap="round"></path>
    </svg>
  `,

  'jpg-to-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M17 53C16 29 37 15 61 16C85 17 97 38 94 62C91 85 70 96 46 93C25 90 18 74 17 53Z" fill="#D8F6EC"></path>
      <path d="M18 26L63 22L67 72L22 76Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <circle cx="34" cy="40" r="4.6" fill="#FFF0C2" stroke="#1D1C14" stroke-width="2.1"></circle>
      <path d="M23 63L36 48L46 58L53 51L61 62" stroke="#006B5B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M68 54C76 54 83 60 82 69" stroke="#1D1C14" stroke-width="2.5" stroke-linecap="round"></path>
      <path d="M77 65L82 71L87 64" stroke="#1D1C14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,

  'pdf-to-jpg': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M15 56C14 32 34 15 58 15C83 15 97 36 95 60C93 84 72 96 48 94C27 92 16 77 15 56Z" fill="#D8F6EC"></path>
      <path d="M22 33L62 31L63 83L23 85Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M48 22L88 26L84 66L44 62Z" fill="#FFE2E7" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <circle cx="64" cy="36" r="3.9" fill="#FFF0C2" stroke="#1D1C14" stroke-width="2.1"></circle>
      <path d="M52 52L62 43L70 50L77 45L82 52" stroke="#1D1C14" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,

  'rotate-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M17 55C15 31 36 14 60 15C84 16 98 37 94 61C90 85 69 96 45 94C25 91 19 76 17 55Z" fill="#FFF0C2"></path>
      <path d="M36 33L75 42L64 88L25 79Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M28 31C42 16 68 16 82 32" stroke="#835100" stroke-width="2.9" stroke-linecap="round"></path>
      <path d="M82 22L83 33L72 32" stroke="#835100" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,

  'page-numbers': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M16 57C14 33 34 14 58 15C83 16 98 38 95 62C92 85 70 96 46 93C25 90 18 77 16 57Z" fill="#FFF0C2"></path>
      <path d="M26 23L82 21L83 88L27 89Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M36 38C48 37 59 39 70 38M36 50C45 51 54 49 62 50" stroke="#CBC6BB" stroke-width="2.7" stroke-linecap="round"></path>
      <text x="52" y="76" font-family="Boogaloo, sans-serif" font-size="25" fill="#835100">#1</text>
    </svg>
  `,

  'watermark-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M16 54C16 30 36 14 60 15C84 16 97 37 94 61C91 84 70 96 46 94C25 91 16 75 16 54Z" fill="#FFF0C2"></path>
      <path d="M24 25L84 23L85 86L25 87Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M31 49L76 40L80 59L35 68Z" fill="#FFE2E7" stroke="#AF2247" stroke-width="2.5" stroke-linejoin="round"></path>
      <path d="M41 58L69 51" stroke="#AF2247" stroke-width="2.9" stroke-linecap="round"></path>
    </svg>
  `,

  'crop-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M15 56C14 32 34 15 58 15C83 15 98 36 95 60C92 84 71 96 47 94C26 92 16 77 15 56Z" fill="#FFF0C2"></path>
      <path d="M34 22L35 74L86 73" stroke="#1D1C14" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M22 36L74 35L73 88" stroke="#835100" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M40 42L68 41L67 68L39 69Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.1" stroke-dasharray="4 4"></path>
    </svg>
  `,

  'edit-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M16 55C14 31 35 14 59 15C84 16 98 37 95 61C92 84 71 96 47 94C25 92 18 76 16 55Z" fill="#FFF0C2"></path>
      <path d="M24 23L78 21L79 86L25 87Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M34 52C40 43 48 59 54 50C60 41 66 55 70 48" stroke="#AF2247" stroke-width="2.5" stroke-linecap="round"></path>
      <path d="M62 72L86 38L94 44L70 78L59 82Z" fill="#FFF0C2" stroke="#1D1C14" stroke-width="2.5" stroke-linejoin="round"></path>
    </svg>
  `,

  'unlock-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M16 56C14 32 35 14 59 15C84 16 98 37 95 61C92 84 71 96 47 94C25 92 18 77 16 56Z" fill="#DCEEFF"></path>
      <path d="M40 48V36C40 25 48 20 57 20C64 20 70 25 72 32" stroke="#1D1C14" stroke-width="2.9" stroke-linecap="round"></path>
      <path d="M30 49L80 47L79 86L31 87Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <circle cx="55" cy="64" r="4.6" fill="#006B5B"></circle>
      <path d="M55 68L56 75" stroke="#006B5B" stroke-width="2.9" stroke-linecap="round"></path>
    </svg>
  `,

  'protect-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M15 55C14 31 35 15 59 16C83 17 97 38 94 61C91 84 70 96 46 93C25 90 16 76 15 55Z" fill="#DCEEFF"></path>
      <path d="M39 48V36C39 25 46 20 55 20C64 20 71 25 71 36V48" stroke="#1D1C14" stroke-width="2.9" stroke-linecap="round"></path>
      <path d="M30 49L80 48L79 86L31 87Z" fill="#FFF0C2" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <circle cx="55" cy="64" r="4.6" fill="#1D1C14"></circle>
      <path d="M55 68L54 75" stroke="#1D1C14" stroke-width="2.9" stroke-linecap="round"></path>
    </svg>
  `,

  'sign-pdf': `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch" fill="none" aria-hidden="true">
      <path d="M16 56C14 32 35 14 59 15C84 16 98 37 95 61C92 84 71 96 47 94C25 92 18 77 16 56Z" fill="#DCEEFF"></path>
      <path d="M22 29L88 27L87 82L23 83Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
      <path d="M33 64C39 49 44 50 46 62C48 72 55 51 60 59C64 65 71 58 78 57" stroke="#AF2247" stroke-width="2.9" stroke-linecap="round"></path>
      <path d="M33 72C48 71 62 73 76 72" stroke="#CBC6BB" stroke-width="2.1" stroke-linecap="round"></path>
    </svg>
  `
};

function getToolVector(toolId, extraClass = '') {
  if (VECTORS[toolId]) {
    return VECTORS[toolId];
  }
  return `
    <svg viewBox="0 0 110 110" class="w-full h-full ink-sketch ${extraClass}" fill="none">
      <path d="M18 58C14 34 34 15 58 14C83 13 98 33 96 57C94 82 74 97 51 95C29 93 21 80 18 58Z" fill="#FFE2E7"></path>
      <path d="M28 23L79 21L81 87L29 89Z" fill="#FFF9ED" stroke="#1D1C14" stroke-width="2.6" stroke-linejoin="round"></path>
    </svg>
  `;
}
