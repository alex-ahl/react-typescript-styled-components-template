import { FC, ReactNode } from 'react'

interface Props {
  className?: string
  display?: string
  flexDirection?: string
  alignItems?: string
  maxWidth?: string
  margin?: string
  children?: ReactNode
}

export const PageItemWrapper: FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>
}
