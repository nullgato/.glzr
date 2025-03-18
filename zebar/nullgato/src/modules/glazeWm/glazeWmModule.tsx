import { GlazeWmOutput } from 'zebar'
import { BindingBtn, PausedBtn } from './components'

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
 * @returns A module containing icons for representing the GlazeWM paused and binding mode states
 */
const GlazeWMModule = (props: Props) => {
    return (
        <>
            {props.output.isPaused && <PausedBtn output={props.output} />}
            {props.output.bindingModes.map((bindingMode) => (
                <BindingBtn
                    key={bindingMode.name}
                    output={props.output}
                    bindingMode={bindingMode}
                />
            ))}
        </>
    )
}

export default GlazeWMModule
