import type { ReactNode } from 'react';
import PublicPageLayout from '@/components/PublicPageLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return <PublicPageLayout>{children}</PublicPageLayout>;
}
