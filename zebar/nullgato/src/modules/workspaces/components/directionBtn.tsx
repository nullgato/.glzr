import { GlazeWmOutput } from 'zebar'

/**
 * GlazeWmOutput component props
 *
 * @remarks
 * Refer to {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#glazewm}
 *
 * @typeParam output - The output object containing information related to GlazeWM
 */
type Props = {
    output: GlazeWmOutput
}

/**
 *
 * @param props - Refer to {@link Props}
 * @returns A button containing an icon that indicates GlazeWM's tiling direction
 */
const DirectionBtn = (props: Props) => {
    const getIcon = () =>
        props.output.tilingDirection === 'horizontal'
            ? 'nf-md-swap_horizontal'
            : 'nf-md-swap_vertical'

    const toggleDirection = () =>
        props.output.runCommand('toggle-tiling-direction')

    return (
        <button class={`tiling-direction`} onClick={toggleDirection}>
            <i class={`nf ${getIcon()}`}></i>
        </button>
    )
}

export default DirectionBtn
