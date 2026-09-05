import type { Metadata } from 'next';
import './globals.css';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'بام ایران | املاک لوکس و منتخب',
  description: 'مجموعه‌ای خصوصی از املاک لوکس تهران و شمال ایران؛ مشاوره تخصصی خرید، فروش و سرمایه‌گذاری ملکی.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
