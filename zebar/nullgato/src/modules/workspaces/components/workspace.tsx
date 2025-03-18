import { GlazeWmOutput } from 'zebar'

/**
 * BindingBtn component props
 *
 * @remarks
 * Refer to {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#glazewm}
 *
 * @typeParam key - Unneeded, but necessary for intellisense; a unique identifer for this component
 * @typeParam output - The output object containing information related to GlazeWM
 * @typeParam workspace - The object containing information on the given workspace
 */
type Props = {
    key: string
    output: GlazeWmOutput
    workspace: any
}

/**
 *
 * @remarks
 * Clicking a Workspace will invoke the GlazeWM API to make that Workspace focused
 *
 * @param props - Refer to {@link Props}
 * @returns A clickable button containing the workspace's icon and focused status
 */
const Workspace = (props: Props) => {
    let className = 'workspace'
    className += props.workspace.hasFocus ? ' focused' : ''
    className += props.workspace.isDisplayed ? ' displayed' : ''

    const focusWorkspace = (name: string) =>
        props.output.runCommand(`focus --workspace ${name}`)

    return (
        <button
            class={className}
            onClick={() => focusWorkspace(props.workspace.name)}
        >
            {props.workspace.displayName ?? props.workspace.name}
        </button>
    )
}

export default Workspace
