import { GlazeWmOutput } from 'zebar'

/**
 * PausedButton component props
 *
 * @typeParam output - The output object containing information related to GlazeWM
 */
type Props = {
    output: GlazeWmOutput
}

const PausedBtn = (props: Props) => {
    /**
     *
     * @remarks
     * Based on the conditions this component is rendered, it can only be toggled *off*
     *
     * @returns Invokes GlazeWM's API to run a command that toggles GlazeWM's paused state
     */
    const togglePause = () => props.output.runCommand('wm-toggle-pause')

    return (
        <button class="paused-button" onClick={togglePause}>
            <i class="nf nf-md-pause_octagon"></i>
        </button>
    )
}

export default PausedBtn
