export interface BannerProps {
  text: string
  mobileImage: string
  tabletImage: string
  desktopImage: string
  styling?: string
}

export interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  styling?: string
}

export interface FeatureProps {
  title: string
  description: string
  image: string
  alt: string
  pattern?: React.ReactElement
  position?: string
  styling?: string
  addOns?: React.ReactElement
}

export interface HeadingProps {
  children: string
  type: number
  color?: string
}

export interface JobCardProps {
  position: string
  location: string
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

export interface SubHeadingProps {
  children: string
  styling?: string
}
