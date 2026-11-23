export type Category = 'print' | 'social'

export type Project = {
  id: number
  title: string
  client: string
  image: string
  category: Category
  tags: string[]
  width: number
  height: number
}

export const categories: { id: Category; label: string; count: number }[] = [
  { id: 'print', label: 'الطباعي', count: 4 },
  { id: 'social', label: 'السوشيال ميديا', count: 13 },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'المجالس العلمية للحلقات النسائية',
    client: 'مركز الفردوس',
    image: 'assets/book-majalis-front.jpg',
    category: 'print',
    tags: ['books'],
    width: 1024,
    height: 768,
  },
  {
    id: 2,
    title: 'المجالس العلمية — المقدمة والإهداء',
    client: 'مركز الفردوس',
    image: 'assets/book-majalis-back.jpg',
    category: 'print',
    tags: ['books'],
    width: 1024,
    height: 768,
  },
  {
    id: 3,
    title: 'نبض السيرة — الغلاف الأمامي',
    client: 'د. صلاح أبو مسلم',
    image: 'assets/book-nabd-front.jpg',
    category: 'print',
    tags: ['covers', 'books'],
    width: 1024,
    height: 768,
  },
  {
    id: 4,
    title: 'نبض السيرة — الغلاف الخلفي',
    client: 'د. صلاح أبو مسلم',
    image: 'assets/book-nabd-back.jpg',
    category: 'print',
    tags: ['covers', 'books'],
    width: 1024,
    height: 768,
  },
  {
    id: 5,
    title: 'سلسلة جمعة الفردوس',
    client: 'مركز الفردوس',
    image: 'assets/social-ferdaws-jummah.jpg',
    category: 'social',
    tags: ['posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 6,
    title: 'سلسلة انتيار الفردوس',
    client: 'مركز الفردوس',
    image: 'assets/social-ferdaws-intaziru.jpg',
    category: 'social',
    tags: ['posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 7,
    title: 'سلسلة لمسات الفردوس',
    client: 'مركز الفردوس',
    image: 'assets/social-ferdaws-lamasat.jpg',
    category: 'social',
    tags: ['posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 8,
    title: 'سلسلة جمعة الفردوس — الجزء الثاني',
    client: 'مركز الفردوس',
    image: 'assets/social-ferdaws-jummah2.jpg',
    category: 'social',
    tags: ['posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 9,
    title: 'نصائح الفردوس',
    client: 'مركز الفردوس',
    image: 'assets/social-ferdaws-tips.jpg',
    category: 'social',
    tags: ['posts', 'campaigns'],
    width: 1024,
    height: 1024,
  },
  {
    id: 10,
    title: 'تصميم العيد',
    client: 'مركز الفردوس',
    image: 'assets/social-eid.jpg',
    category: 'social',
    tags: ['campaigns'],
    width: 1024,
    height: 1024,
  },
  {
    id: 11,
    title: 'جمعة',
    client: 'مركز الفردوس',
    image: 'assets/social-jummah.jpg',
    category: 'social',
    tags: ['posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 12,
    title: 'فرصة',
    client: 'مركز الفردوس',
    image: 'assets/social-forsa.jpg',
    category: 'social',
    tags: ['posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 13,
    title: 'كفالة',
    client: 'مركز الفردوس',
    image: 'assets/social-kafala.jpg',
    category: 'social',
    tags: ['posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 14,
    title: 'مسابقة',
    client: 'مركز الفردوس',
    image: 'assets/social-musabaqa.jpg',
    category: 'social',
    tags: ['contests'],
    width: 1024,
    height: 1024,
  },
  {
    id: 15,
    title: 'بوستر سعد بن معاذ',
    client: 'سعد بن معاذ',
    image: 'assets/poster-saad-bin-moaaz.jpg',
    category: 'social',
    tags: ['campaigns', 'posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 16,
    title: 'بوستر صحبة طليحة',
    client: 'صحبة طليحة',
    image: 'assets/poster-sohba-saliha.jpg',
    category: 'social',
    tags: ['campaigns', 'posts'],
    width: 1024,
    height: 1024,
  },
  {
    id: 17,
    title: 'بوستر أشدّ العزيمة',
    client: 'مركز الفردوس',
    image: 'assets/poster-ashad-alnas-balaa.jpg',
    category: 'social',
    tags: ['campaigns', 'posts'],
    width: 1024,
    height: 1024,
  },
]

export type Teacher = {
  id: number
  name: string
  /** Optional short line under the name — a subject, a circle, a qualification. */
  note?: string
  /** Optional portrait path, e.g. `assets/teachers/name.jpg`. */
  image?: string
}

/**
 * Teachers of the women's Quran circles (حلقات النساء).
 *
 * Add one entry per teacher — the card prints the role label from the
 * dictionary ("معلمة حلقات النساء") directly above her name. While the list is
 * empty the section shows a "coming soon" card instead of an empty grid.
 */
export const teachers: Teacher[] = []

/** Header navigation — labels come from the translation dictionary. */
export const navLinks = [
  { href: '#work', key: 'work' as const },
  { href: '#design', key: 'design' as const },
  { href: '#video', key: 'video' as const },
  { href: '#about', key: 'about' as const },
]

export const brandsList = [
  { name: 'Red Bull', tag: 'Energy Drink', bg: 'bg-[#12151e]', border: 'border-zinc-800' },
  { name: 'Creative Studio', tag: 'Design Agency', bg: 'bg-purple-900/60', border: 'border-purple-700/50' },
  { name: 'Studio Cube', tag: '3D & Motion', bg: 'bg-[#10141d]', border: 'border-zinc-800' },
  { name: 'Vision X', tag: 'Tech Media', bg: 'bg-[#0e3b75]', border: 'border-blue-600/40' },
]

export const creatorsList = [
  { name: 'Coach Nada Zaki', color: 'bg-emerald-400' },
  { name: 'Dr. Anas Kino', color: 'bg-red-400' },
  { name: 'Karim Yelaab', color: 'bg-blue-400' },
  { name: 'Hazem Ragheb', color: 'bg-amber-400' },
  { name: 'Malak Dahshan', color: 'bg-emerald-400' },
  { name: 'مركز الفردوس', color: 'bg-cyan-400' },
  { name: 'د. صلاح أبو مسلم', color: 'bg-purple-400' },
]

export const socials = [
  { key: 'whatsapp' as const, href: 'https://wa.me/201153349092' },
  { key: 'email' as const, href: 'mailto:alibnahmed82@gmail.com' },
  { key: 'behance' as const, href: 'https://www.behance.net/aliahmed824' },
  { key: 'facebook' as const, href: 'https://www.facebook.com/alyahmeed7' },
]

export const contactCards = [
  { key: 'whatsapp' as const, value: '01153349092', href: 'https://wa.me/201153349092' },
  { key: 'email' as const, value: 'alibnahmed82@gmail.com', href: 'mailto:alibnahmed82@gmail.com' },
  { key: 'behance' as const, value: 'aliahmed824', href: 'https://www.behance.net/aliahmed824' },
]

/** Skill identifiers — the visible names live in the translation dictionary. */
export const skills = [
  'photoshop',
  'illustrator',
  'indesign',
  'premiere',
  'afterEffects',
  'arabicTypography',
  'printPrep',
  'bookLayout',
] as const

export const heroMarqueeRows = [
  {
    duration: '70s',
    reverse: false,
    images: [
      'assets/social-ferdaws-jummah.jpg',
      'assets/social-ferdaws-intaziru.jpg',
      'assets/poster-saad-bin-moaaz.jpg',
      'assets/social-ferdaws-lamasat.jpg',
      'assets/social-ferdaws-jummah2.jpg',
      'assets/social-ferdaws-tips.jpg',
      'assets/social-eid.jpg',
    ],
  },
  {
    duration: '80s',
    reverse: true,
    images: [
      'assets/book-majalis-front.jpg',
      'assets/book-majalis-back.jpg',
      'assets/book-nabd-front.jpg',
      'assets/book-nabd-back.jpg',
      'assets/poster-sohba-saliha.jpg',
      'assets/social-jummah.jpg',
      'assets/social-forsa.jpg',
    ],
  },
  {
    duration: '65s',
    reverse: false,
    images: [
      'assets/social-eid.jpg',
      'assets/poster-sohba-saliha.jpg',
      'assets/social-jummah.jpg',
      'assets/social-forsa.jpg',
      'assets/poster-ashad-alnas-balaa.jpg',
      'assets/social-kafala.jpg',
      'assets/social-musabaqa.jpg',
    ],
  },
]

/**
 * 16:9 video slots. The real files are hosted on Google Drive and get dropped
 * in through `src` — the titles below only label the placeholders.
 */
export const videoSlots = [
  { key: 'showreel', aspect: 'aspect-video md:col-span-2' },
  { key: 'promo', aspect: 'aspect-video' },
  { key: 'episode', aspect: 'aspect-video' },
  { key: 'ad', aspect: 'aspect-video' },
] as const

/** 9:16 reel slots — same deal, waiting for the Drive links. */
export const reelSlots = [
  { key: 'ferdaws' },
  { key: 'occasions' },
  { key: 'sohba' },
  { key: 'saad' },
  { key: 'tips' },
  { key: 'kafala' },
] as const
