import { GlazeWmOutput } from 'zebar'
import { DirectionBtn, Workspace } from './components'

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
 * @returns A module containing icons for representing the GlazeWM workspaces and their state
 */
const WorkspacesModule = (props: Props) => {
    return (
        <div class="workspaces">
            {props.output.currentWorkspaces.map((workspace) => (
                <Workspace
                    key={workspace.name}
                    output={props.output}
                    workspace={workspace}
                />
            ))}
            <DirectionBtn output={props.output} />
        </div>
    )
}

export default WorkspacesModule
