import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import NavScrollBehavior from './NavScrollBehavior';

export default function PublicPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavScrollBehavior />
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
    </>
  );
}
