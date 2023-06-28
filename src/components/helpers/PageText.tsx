import { FC, ReactElement, ReactNode } from 'react'

interface Props {
  className?: string
  fontSize?: string
  color?: string
  children?: ReactNode
}

export const PageText: FC<Props> = ({ className, children }): ReactElement => {
  return <span className={className}>{children}</span>
}
