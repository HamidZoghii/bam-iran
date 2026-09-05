'use client';

import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpLeft,
  Bath,
  BedDouble,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpLeft,
  Phone,
  Search,
  Sparkles,
  X,
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;
export const dynamic = 'force-static';

const properties = [
  {
    id: 1,
    title: 'پنت‌هاوس آسمان',
    location: 'الهیه، تهران',
    type: 'پنت‌هاوس',
    price: '۲۴۵ میلیارد تومان',
    area: '۵۸۰',
    beds: '۴',
    baths: '۵',
    image: asset('/images/penthouse.png'),
    tag: 'منتخب بام ایران',
  },
  {
    id: 2,
    title: 'ویلای سروستان',
    location: 'لواسان، تهران',
    type: 'ویلا',
    price: '۳۸۰ میلیارد تومان',
    area: '۱٬۲۴۰',
    beds: '۶',
    baths: '۷',
    image: asset('/images/lavasan-villa.png'),
    tag: 'فرصت ویژه',
  },
  {
    id: 3,
    title: 'رزیدنس نیاوران',
    location: 'نیاوران، تهران',
    type: 'آپارتمان',
    price: '۱۶۸ میلیارد تومان',
    area: '۳۹۰',
    beds: '۳',
    baths: '۴',
    image: asset('/images/bam-hero.png'),
    tag: 'جدید',
  },
  {
    id: 4,
    title: 'ویلای آفتاب',
    location: 'شهرک غرب، تهران',
    type: 'ویلا',
    price: '۲۹۵ میلیارد تومان',
    area: '۸۷۰',
    beds: '۵',
    baths: '۶',
    image: asset('/images/unsplash-villa.jpg'),
    tag: 'منتخب معماری',
  },
  {
    id: 5,
    title: 'خانه سپید',
    location: 'زعفرانیه، تهران',
    type: 'ویلا',
    price: '۳۲۰ میلیارد تومان',
    area: '۹۶۰',
    beds: '۵',
    baths: '۷',
    image: asset('/images/unsplash-interior.jpg'),
    tag: 'ورود تازه',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<'FA' | 'EN'>('FA');
  const [liked, setLiked] = useState<number[]>([]);
  const [type, setType] = useState('همه املاک');
  const [location, setLocation] = useState('همه مناطق');
  const [submitted, setSubmitted] = useState(false);
  const visible = useMemo(
    () =>
      properties.filter(
        (p) =>
          (type === 'همه املاک' || p.type === type) &&
          (location === 'همه مناطق' || p.location.includes(location)),
      ),
    [type, location],
  );
  const toggleLike = (id: number) =>
    setLiked((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));

  return (
    <main dir="rtl">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="بام ایران، صفحه اصلی">
          <span className="brand-mark">
            <span />
          </span>
          <span>
            <b>بام ایران</b>
            <small>BAM IRAN</small>
          </span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="منوی اصلی">
          <button
            className="nav-close"
            onClick={() => setMenuOpen(false)}
            aria-label="بستن منو"
          >
            <X />
          </button>
          <a href="#properties" onClick={() => setMenuOpen(false)}>
            املاک منتخب
          </a>
          <a href="#investment" onClick={() => setMenuOpen(false)}>
            سرمایه‌گذاری
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            درباره ما
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            تماس
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="language"
            onClick={() => setLang(lang === 'FA' ? 'EN' : 'FA')}
          >
            {lang}
            <ChevronDown size={14} />
          </button>
          <a className="phone-link" href="tel:+982122000000">
            <Phone size={17} />
            <span>۰۲۱ ۲۲۰۰ ۰۰۰۰</span>
          </a>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="باز کردن منو"
          >
            <Menu />
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <img
          src={asset('/images/bam-hero.png')}
          alt="ویلای مدرن لوکس در ارتفاعات تهران هنگام غروب"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> مجموعه‌ای خصوصی از خانه‌های استثنایی
          </p>
          <h1>
            تعریف تازه‌ای از
            <br />
            <em>زندگی لوکس</em>
          </h1>
          <p className="hero-sub">
            املاک منتخب تهران و شمال ایران، با ارزیابی تخصصی و مشاوره‌ای کاملاً
            شخصی.
          </p>
          <div className="hero-ctas">
            <a href="#consultation" className="btn gold">
              درخواست مشاوره اختصاصی <ArrowUpLeft size={18} />
            </a>
            <a href="#properties" className="btn ghost">
              مشاهده املاک منتخب <ArrowLeft size={18} />
            </a>
          </div>
        </div>
        <div className="hero-index">
          <b>۰۱</b>
          <span />
          <small>۰۳</small>
        </div>
      </section>

      <section className="search-panel" aria-label="جستجوی سریع ملک">
        <div className="search-title">
          <Search size={20} />
          <span>
            <small>جستجوی سریع</small>
            <b>خانه مطلوب شما کجاست؟</b>
          </span>
        </div>
        <label>
          <span>نوع ملک</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>همه املاک</option>
            <option>ویلا</option>
            <option>پنت‌هاوس</option>
            <option>آپارتمان</option>
          </select>
        </label>
        <label>
          <span>موقعیت</span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>همه مناطق</option>
            <option>الهیه</option>
            <option>لواسان</option>
            <option>نیاوران</option>
          </select>
        </label>
        <label>
          <span>بودجه</span>
          <select>
            <option>بدون محدودیت</option>
            <option>تا ۲۰۰ میلیارد</option>
            <option>۲۰۰ تا ۴۰۰ میلیارد</option>
          </select>
        </label>
        <a className="search-btn" href="#properties">
          نمایش {visible.length} نتیجه <ArrowLeft size={18} />
        </a>
      </section>

      <section id="properties" className="section properties-section">
        <div className="section-head">
          <div>
            <p className="kicker">COLLECTION / 01</p>
            <h2>املاک منتخب</h2>
            <p>هر ملک، انتخابی دقیق برای سبکی متمایز از زندگی.</p>
          </div>
          <a href="#properties">
            مشاهده همه املاک <ArrowLeft size={18} />
          </a>
        </div>
        <div className="property-grid">
          {visible.map((p, index) => (
            <article
              className={`property-card ${index === 0 ? 'featured' : ''}`}
              key={p.id}
            >
              <div className="property-image">
                <img
                  src={p.image}
                  alt={`${p.title} در ${p.location}`}
                  loading="lazy"
                />
                <span className="tag">{p.tag}</span>
                <button
                  onClick={() => toggleLike(p.id)}
                  className={liked.includes(p.id) ? 'liked' : ''}
                  aria-label="افزودن به علاقه‌مندی"
                >
                  <Heart />
                </button>
                <a
                  href="#consultation"
                  className="image-arrow"
                  aria-label={`مشاهده ${p.title}`}
                >
                  <ArrowUpLeft />
                </a>
              </div>
              <div className="property-info">
                <p>
                  <MapPin size={15} /> {p.location}
                </p>
                <h3>{p.title}</h3>
                <div className="facts">
                  <span>
                    <MoveUpLeft size={17} /> {p.area} متر
                  </span>
                  <span>
                    <BedDouble size={17} /> {p.beds} خواب
                  </span>
                  <span>
                    <Bath size={17} /> {p.baths} حمام
                  </span>
                </div>
                <strong>{p.price}</strong>
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <div className="empty">
            ملکی با این ترکیب پیدا نشد. فیلترها را تغییر دهید.
          </div>
        )}
      </section>

      <section id="investment" className="investment">
        <div className="investment-image">
          <img
            src={asset('/images/lavasan-villa.png')}
            alt="ویلای معماری‌شده در دامنه البرز"
            loading="lazy"
          />
          <span>
            از منظر ارزش
            <br />
            تا کیفیت زندگی
          </span>
        </div>
        <div className="investment-copy">
          <p className="kicker light">INVESTMENT / 02</p>
          <h2>
            فراتر از یک ملک؛
            <br />
            یک تصمیم هوشمندانه
          </h2>
          <p>
            فرصت‌های سرمایه‌گذاری بام ایران با بررسی دقیق موقعیت، کیفیت ساخت،
            اعتبار سازنده و ظرفیت رشد انتخاب می‌شوند.
          </p>
          <ul>
            <li>
              <Check /> تحلیل اختصاصی هر فرصت
            </li>
            <li>
              <Check /> دسترسی به پروژه‌های منتخب
            </li>
            <li>
              <Check /> همراهی از ارزیابی تا انتقال
            </li>
          </ul>
          <a className="btn outline" href="#consultation">
            بررسی فرصت‌های سرمایه‌گذاری <ArrowLeft size={18} />
          </a>
        </div>
      </section>

      <section id="about" className="manifesto section">
        <div className="quote-mark">“</div>
        <p className="kicker">THE BAM IRAN STANDARD</p>
        <blockquote>
          ما هر ملکی را معرفی نمی‌کنیم.
          <br />
          فقط آنچه ارزش <em>انتخاب شدن</em> دارد.
        </blockquote>
        <div className="metrics">
          <div>
            <b>۱۲+</b>
            <span>سال تجربه تخصصی</span>
          </div>
          <div>
            <b>۴۲</b>
            <span>ملک منتخب فعال</span>
          </div>
          <div>
            <b>۹۴٪</b>
            <span>رضایت مراجعین</span>
          </div>
          <div>
            <b>۲۴/۷</b>
            <span>همراهی مشاور اختصاصی</span>
          </div>
        </div>
      </section>

      <section id="consultation" className="consultation">
        <div className="consult-copy">
          <p className="kicker light">PRIVATE CONSULTATION</p>
          <h2>
            یک گفت‌وگوی خصوصی،
            <br />
            برای انتخابی دقیق.
          </h2>
          <p>
            نیاز و معیارهای شما را می‌شنویم و فقط گزینه‌هایی را پیشنهاد می‌کنیم که
            واقعاً شایسته بررسی باشند.
          </p>
          <div className="consult-note">
            <Sparkles />
            <span>
              <b>پاسخ‌گویی در کمتر از یک ساعت</b>
              <small>اطلاعات شما کاملاً محرمانه می‌ماند.</small>
            </span>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {submitted ? (
            <div className="success">
              <Check />
              <h3>درخواست شما ثبت شد</h3>
              <p>مشاور بام ایران به‌زودی با شما تماس می‌گیرد.</p>
              <button type="button" onClick={() => setSubmitted(false)}>
                ثبت درخواست دیگر
              </button>
            </div>
          ) : (
            <>
              <div className="form-row">
                <label>
                  نام و نام خانوادگی
                  <input required placeholder="نام شما" />
                </label>
                <label>
                  شماره تماس
                  <input required inputMode="tel" placeholder="۰۹۱۲ ۱۲۳ ۴۵۶۷" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  هدف شما
                  <select>
                    <option>خرید برای سکونت</option>
                    <option>سرمایه‌گذاری ملکی</option>
                    <option>فروش ملک</option>
                  </select>
                </label>
                <label>
                  بودجه تقریبی
                  <select>
                    <option>انتخاب کنید</option>
                    <option>تا ۲۰۰ میلیارد</option>
                    <option>۲۰۰ تا ۴۰۰ میلیارد</option>
                    <option>بیش از ۴۰۰ میلیارد</option>
                  </select>
                </label>
              </div>
              <label>
                توضیح کوتاه
                <textarea placeholder="منطقه، نوع ملک یا اولویت‌های شما..." />
              </label>
              <button className="submit" type="submit">
                ثبت درخواست مشاوره <ArrowLeft />
              </button>
            </>
          )}
        </form>
      </section>

      <footer id="contact">
        <div className="footer-brand">
          <a className="brand invert" href="#home">
            <span className="brand-mark">
              <span />
            </span>
            <span>
              <b>بام ایران</b>
              <small>BAM IRAN</small>
            </span>
          </a>
          <p>انتخاب‌های محدود، تجربه‌ای متمایز.</p>
        </div>
        <div>
          <small>دسترسی سریع</small>
          <a href="#properties">املاک منتخب</a>
          <a href="#investment">سرمایه‌گذاری</a>
          <a href="#about">درباره ما</a>
        </div>
        <div>
          <small>ارتباط مستقیم</small>
          <a href="tel:+982122000000">۰۲۱ ۲۲۰۰ ۰۰۰۰</a>
          <a href="mailto:hello@bamiran.com">hello@bamiran.com</a>
          <a href="#consultation">درخواست مشاوره</a>
        </div>
        <a className="whatsapp" href="#consultation">
          <MessageCircle />
          <span>
            <small>پاسخ‌گویی سریع</small>گفت‌وگو در واتس‌اپ
          </span>
        </a>
        <div className="copyright">© ۱۴۰۵ بام ایران — کلیه حقوق محفوظ است.</div>
      </footer>
    </main>
  );
}
