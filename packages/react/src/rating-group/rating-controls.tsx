import { forwardRef } from '@polymorphic-factory/react'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { ark, HTMLArkProps } from '../factory'
import { runIfFn } from '../run-if-fn'
import { RatingGroupContext, useRatingGroupContext } from './rating-group-context'

export type RatingControlsProps = Omit<HTMLArkProps<'div'>, 'children'> & {
  children: ReactNode | ((context: RatingGroupContext) => ReactNode)
}

export const RatingControls = forwardRef<'div', RatingControlsProps>((props, ref) => {
  const { children, ...divProps } = props
  const ratingGroup = useRatingGroupContext()
  const mergedProps = mergeProps(ratingGroup.itemGroupProps, divProps)
  const view = runIfFn(children, ratingGroup)

  return (
    <ark.div {...mergedProps} ref={ref}>
      {view}
    </ark.div>
  )
})
