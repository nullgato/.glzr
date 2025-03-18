import { MemoryOutput } from 'zebar'
import { Meter } from '~components'

/**
 * MemoryModule component props
 *
 * @remarks
 * Refer to {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#memory}
 *
 * @typeParam output - The output object containing information related to the system's memory status
 */
type Props = {
    output: MemoryOutput
}

/**
 *
 * @param props - Refer to {@link Props}
 * @returns A module containing memory usage info represented by a meter
 */
const MemoryModule = (props: Props) => {
    return (
        <div class="memory">
            <i class="nf nf-fae-chip"></i>
            <Meter value={props.output.usage} />
        </div>
    )
}

export default MemoryModule
