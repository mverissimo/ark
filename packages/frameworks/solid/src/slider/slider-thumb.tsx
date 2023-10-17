import { mergeProps } from '@zag-js/solid'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useSliderContext } from './slider-context'

// TODO export in Zag.js
interface ThumbProps {
  index: number
}

export type SliderThumbProps = Assign<HTMLArkProps<'div'>, ThumbProps>

export const SliderThumb = (props: SliderThumbProps) => {
  const [thumbProps, localProps] = createSplitProps<ThumbProps>()(props, ['index'])
  const api = useSliderContext()
  const mergePdrops = mergeProps(() => api().getThumbProps(thumbProps), localProps)

  return <ark.div {...mergePdrops} />
}
