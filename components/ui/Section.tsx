import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ id, children, className, containerClassName, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-20 lg:py-32 flex flex-col items-center", className)}
      {...props}
    >
      <div className={cn("w-full max-w-5xl px-6 md:px-12", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
