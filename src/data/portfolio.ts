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

export const printFilters = [
  { id: 'all', label: 'الكل' },
  { id: 'books', label: 'الكتب' },
  { id: 'memos', label: 'المذكرات' },
  { id: 'covers', label: 'أغلفة الكتب' },
]

export const socialFilters = [
  { id: 'all', label: 'الكل' },
  { id: 'posts', label: 'منشورات' },
  { id: 'campaigns', label: 'حملات' },
  { id: 'contests', label: 'مسابقات' },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'المجالس العلمية للحلقات النسائية',
    client: 'مركز الفردوس',
    image: 'assets/book-majalis-front.jpg',
    category: 'print',
    tags: ['books', 'memos'],
    width: 1024,
    height: 768,
  },
  {
    id: 2,
    title: 'المجالس العلمية — المقدمة والإهداء',
    client: 'مركز الفردوس',
    image: 'assets/book-majalis-back.jpg',
    category: 'print',
    tags: ['books', 'memos'],
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

export const navLinks = [
  { href: '#design', label: 'التصميم' },
  { href: '#video', label: 'الفيديو' },
  { href: '#about', label: 'عنّي' },
]

export const socials = [
  { label: 'واتساب', href: 'https://wa.me/201153349092' },
  { label: 'الإيميل', href: 'mailto:alibnahmed82@gmail.com' },
  { label: 'Behance', href: 'https://www.behance.net/aliahmed824' },
  { label: 'Facebook', href: 'https://www.facebook.com/alyahmeed7' },
]

export const contactCards = [
  { label: 'واتساب', value: '01153349092', href: 'https://wa.me/201153349092' },
  { label: 'الإيميل', value: 'alibnahmed82@gmail.com', href: 'mailto:alibnahmed82@gmail.com' },
  { label: 'Behance', value: 'aliahmed824', href: 'https://www.behance.net/aliahmed824' },
]

export const skills = [
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Premiere Pro',
  'After Effects',
  'الخط والتايبوجرافي العربي',
  'تجهيز ملفات الطباعة CMYK',
  'تنسيق الكتب والمذكرات',
]

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

export const videoSlots = [
  { kind: 'مونتاج · 16:9', title: 'فيديو مونتاج', aspect: 'aspect-video md:col-span-2' },
  { kind: 'ريلز · 9:16', title: 'ريلز', aspect: 'aspect-[9/16]' },
  { kind: 'ريلز · 9:16', title: 'ريلز', aspect: 'aspect-[9/16]' },
]
