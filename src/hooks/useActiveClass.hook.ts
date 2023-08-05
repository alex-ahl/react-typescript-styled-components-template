import { RefObject, useEffect } from 'react'

interface ScrollToProps {
  targetParentRef: RefObject<HTMLElement>
  targetId: string | undefined
}

export const useActiveClass = ({ targetParentRef, targetId }: ScrollToProps) => {
  useEffect(() => {
    const children = Array.from(targetParentRef?.current?.children ?? [])

    children.forEach(item => item.classList.remove('active'))
    children.find(item => item.id === targetId)?.classList.add('active')
  }, [targetId, targetParentRef])
}
