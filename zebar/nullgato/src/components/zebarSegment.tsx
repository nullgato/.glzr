import { JSXElement, ParentProps } from 'solid-js'

/**
 * ZebarSegment component props (with children)
 *
 * @typeParam section - Which area to render the containing modules in
 */
type Props = {
    children: JSXElement
    section: 'left' | 'center' | 'right'
}

/**
 *
 * @remarks
 * My styling is only setup for left, center, and right segments
 *
 * @param props - Refer to {@link Props}
 * @returns A segment containing modules to render
 */
const ZebarSegment = (props: ParentProps<Props>) => {
    return (
        <div class={props.section}>
            <div class="segment-wrapper">{props.children}</div>
        </div>
    )
}

export default ZebarSegment
