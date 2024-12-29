import { ButtonHTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles
  'inline items-center justify-center rounded-[4px] text-sm font-medium transition-all duration-250 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider cursor-pointer z-[9999] w-fit',
  {
    variants: {
      variant: {
        default: 'bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-shadow duration-300',
        destructive: 'bg-red-500 text-white hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-shadow duration-300',
        outline: 'border-2 border-gray-300 bg-transparent hover:bg-gray-50 hover:border-gray-400 hover:shadow-[0_0_25px_rgba(209,213,219,0.7)] hover:text-black transition-shadow duration-300',
        secondary: 'bg-gray-500 text-white hover:shadow-[0_0_25px_rgba(107,114,128,0.7)] transition-shadow duration-300',
        ghost: 'bg-transparent hover:shadow-[0_0_25px_rgba(243,244,246,0.7)] transition-shadow duration-300',
        link: 'text-primary underline-offset-4 hover:underline shadow-none hover:shadow-none',
      },
      size: {
        default: 'h-10 min-w-[100px] px-6',
        sm: 'h-10 min-w-[80px] px-4 text-xs',
        lg: 'h-10 min-w-[120px] px-8 text-base',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface CTAButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

CTAButton.displayName = 'CTAButton'

export { CTAButton, buttonVariants }
