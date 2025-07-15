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
      <header className="fixed top-0 left-0 z-50 hidden w-full flex-row items-center justify-start p-6 md:flex">
        <div className="flex items-center">
          <Image
            src={logo}
            alt={`${companyName} Logo`}
            width={40}
            height={40}
            className="h-10 w-auto drop-shadow-lg"
          />
        </div>
      </header>
      {children}
    </>
  );
}
