import { cn } from "@/utils/tailwind";

type SpinnerProps = {
  className?: string;
  wrapperClassName?: string;
};

export const Spinner = ({ className, wrapperClassName }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "flex h-screen items-center justify-center",
        wrapperClassName
      )}
    >
      <div className={cn("relative h-32 w-32", className)}>
        <div className="absolute inset-0 animate-spin rounded-full border-8 border-brand-primary border-t-transparent" />
      </div>
    </div>
  );
};
