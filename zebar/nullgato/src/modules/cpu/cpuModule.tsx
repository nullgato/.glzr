import { CpuOutput } from 'zebar'
import { Meter } from '~components'

/**
 * CPUModule component props
 *
 * @remarks
 * Refer to {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#cpu}
 *
 * @typeParam output - The output object containing information related to the CPU
 */
type Props = {
    output: CpuOutput
}

/**
 *
 * @param props - Refer to {@link Props}
 * @returns A module containing CPU usage info represented by a meter
 */
const CPUModule = (props: Props) => {
    return (
        <div class="cpu">
            <i class="nf nf-oct-cpu"></i>
            <Meter value={props.output.usage} />
        </div>
    )
}

export default CPUModule
