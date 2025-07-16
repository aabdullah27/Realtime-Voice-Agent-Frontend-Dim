import { Button } from '@/components/ui/button';
import { DimitraLogo } from './dimitra-logo';

interface WelcomeProps {
  disabled: boolean;
  startButtonText: string;
  onStartCall: () => void;
}

export const Welcome = ({
  disabled,
  startButtonText,
  onStartCall,
  ref,
  ...props
}: React.ComponentProps<'div'> & WelcomeProps) => {
  return (
    <div ref={ref} {...props} className="h-full w-full">
      <div
        inert={disabled || undefined}
        className="fixed inset-0 z-10 mx-auto flex h-svh flex-col items-center justify-center text-center backdrop-blur-md"
      >
        <div className="from-primary/20 absolute top-1/2 left-4 h-1/2 w-1 -translate-y-1/2 transform rounded-full bg-gradient-to-b to-transparent"></div>
        <div className="from-primary/20 absolute top-1/2 right-4 h-1/2 w-1 -translate-y-1/2 transform rounded-full bg-gradient-to-t to-transparent"></div>
        <div className="mb-10 flex flex-col items-center justify-center gap-y-4">

          <h2 className="animate-text-shimmer bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            Customer Support
          </h2>
          <p className="text-muted-foreground max-w-prose text-center text-lg">
            Get instant answers, troubleshoot issues, or learn more about our products. Our AI is
            here to provide you with a seamless support experience.
          </p>
        </div>
        <Button variant="primary" size="lg" onClick={onStartCall} className="w-64 font-semibold">
          {startButtonText}
        </Button>
      </div>
    </div>
  );
};
