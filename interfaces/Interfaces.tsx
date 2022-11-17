export interface HeadingProps {
  children: string
  type: number
  color?: string
}

export interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  styling?: string
}

export interface MobileSideNavProps {
  show: boolean
}

export interface OverviewProps {
  title: string
  description: string
  icon: string
  alt: string
}

export interface AboutCardProps {
  title: string
  description: string
  image: string
  alt: string
  arrow?: string
  position?: string
}
