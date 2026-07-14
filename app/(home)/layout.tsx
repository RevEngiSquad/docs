import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../layout.config';
import NavScrollBehavior from '@/components/NavScrollBehavior';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement<any> {
  return (
    <>
      <NavScrollBehavior />
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
    </>
  );
}
