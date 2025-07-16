import { headers } from 'next/headers';
import DimitraLogoHeader from './DimitraLogoHeader';
import { getAppConfig, getOrigin } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  // No need for dynamic logo fetch, just render the SVG logo
  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden w-full flex-row items-center justify-start p-6 md:flex">
        <DimitraLogoHeader />
      </header>
      {children}
    </>
  );
}
