import { mergeProps } from '@zag-js/solid'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import type { UseClipboardReturn } from './use-clipboard'
import { ClipboardProvider } from './use-clipboard-context'

interface RootProviderProps {
  value: UseClipboardReturn
}

export interface ClipboardRootProviderBaseProps extends PolymorphicProps<'div'> {}
export interface ClipboardRootProviderProps
  extends HTMLProps<'div'>,
    RootProviderProps,
    ClipboardRootProviderBaseProps {}

export const ClipboardRootProvider = (props: ClipboardRootProviderProps) => {
  const [{ value: clipboard }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(() => clipboard().getRootProps(), localProps)

  return (
    <ClipboardProvider value={clipboard}>
      <ark.div {...mergedProps} />
    </ClipboardProvider>
  )
}
