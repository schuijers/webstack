export interface ButtonProps {
  asChild?: boolean
  disabled?: boolean
  loading?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export type ButtonSize = 'lg' | 'md' | 'sm'

export type ButtonVariant = 'danger' | 'ghost' | 'outline' | 'primary' | 'secondary'
