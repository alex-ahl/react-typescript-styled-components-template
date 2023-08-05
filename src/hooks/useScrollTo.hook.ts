import { RefObject, useEffect } from 'react'

interface ScrollToProps {
  clickTargetParentRef: RefObject<HTMLElement>
  scrollTargetParentRef: RefObject<HTMLDivElement>
}

export const useScrollTo = ({ clickTargetParentRef, scrollTargetParentRef }: ScrollToProps) => {
  useEffect(() => {
    clickTargetParentRef?.current?.addEventListener('click', ({ target: clickedItem }: Event) =>
      Array.from(scrollTargetParentRef?.current?.children ?? [])
        .find(section => section.id === (clickedItem as HTMLElement).id)
        ?.scrollIntoView({ behavior: 'smooth' })
    )
  }, [clickTargetParentRef, scrollTargetParentRef])
}
