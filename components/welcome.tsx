import { Button } from '@/components/ui/button';

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
    <div
      ref={ref}
      {...props}
      className="flex min-h-screen w-screen items-center justify-center overflow-hidden"
    >
      <div
        inert={disabled || undefined}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="bg-primary/10 flex h-20 w-20 items-center justify-center rounded-full">
            <div className="bg-primary/20 text-primary flex h-16 w-16 items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brain-circuit"
              >
                <path d="M12 5a3 3 0 1 0-5.997.004A3 3 0 0 0 12 5zm0 0a3 3 0 1 1 5.997.004A3 3 0 0 1 12 5z" />
                <path d="M12 15a3 3 0 1 0-5.997.004A3 3 0 0 0 12 15zm0 0a3 3 0 1 1 5.997.004A3 3 0 0 1 12 15z" />
                <path d="M6 5h.01M18 5h.01M6 15h.01M18 15h.01" />
                <path d="M9 8V5M15 8V5M9 19v-3m6 0v3" />
                <path d="M9 12h6" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-green-900">Customer Support</h2>
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
