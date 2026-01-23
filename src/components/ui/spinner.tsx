// src/components/ui/spinner.tsx

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className = "" }: SpinnerProps) => (
  <div className={`flex justify-center items-center ${className}`}>
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-primary" />
  </div>
);