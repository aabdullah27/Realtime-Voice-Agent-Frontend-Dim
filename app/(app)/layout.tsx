import { headers } from 'next/headers';
import Image from 'next/image';
import { getAppConfig, getOrigin } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const hdrs = await headers();
  const origin = getOrigin(hdrs);
  const { companyName, logo } = await getAppConfig(origin);

  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 flex items-start p-2"
        style={{
          boxShadow: 'none',
          border: 'none',
          background: 'none',
        }}
      >
        <div style={{ boxShadow: 'none', border: 'none', background: 'none' }}>
          <Image
            src={logo}
            alt={`${companyName} Logo`}
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </div>
      </header>
      {children}
    </>
  );
}
