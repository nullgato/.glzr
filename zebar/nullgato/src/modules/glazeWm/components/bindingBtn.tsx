import { GlazeWmOutput } from 'zebar'

/**
 * BindingBtn component props
 *
 * @typeParam key - Unneeded, but necessary for intellisense; a unique identifer for this component
 * @typeParam output - The output object containing information related to GlazeWM
 * @typeParam bindingMode - The object containing information on the given active binding mode
 */
type Props = {
    key: string
    output: GlazeWmOutput
    bindingMode: any
}

/**
 *
 * @param props - Refer to {@link Props}
 * @returns A button component showing the active binding mode that can be disabled via click
 */
const BindingBtn = (props: Props) => {
    /**
     * Invokes GlazeWM's API to run a command that disables the given binding mode
     */
    const disableBinding = () =>
        props.output.runCommand(
            `wm-disable-binding-mode --name ${props.bindingMode.name}`
        )

    return (
        <button class="binding-mode" onClick={disableBinding}>
            {props.bindingMode.displayName ?? props.bindingMode.name}
        </button>
    )
}

export default BindingBtn
