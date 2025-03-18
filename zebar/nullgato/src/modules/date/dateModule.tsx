import { DateOutput } from 'zebar'

/**
 * DateModule component props
 *
 * @remarks
 * Refer to {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#date}
 *
 * @typeParam output - The output object containing information related to the CPU
 */
type Props = {
    output: DateOutput
}

/**
 *
 * @param props - Refer to {@link Props}
 * @returns A module containing the time in 24h format with an icon that represents the day or night
 */
const DateModule = (props: Props) => {
    /**
     *
     * @returns `true` if the time is between 07:00 (7am) and 18:00 (6pm)
     */
    const isDaytime = () => {
        const hour = props.output.new.getHours()
        return hour >= 7 && hour < 19
    }

    const dayIcon = 'nf-md-sun_clock'
    const nightIcon = 'nf-md-sleep'
    const currentIcon = isDaytime() ? dayIcon : nightIcon

    return (
        <div class="date">
            <i class={`nf ${currentIcon}`}></i>
            {props.output.formatted}
        </div>
    )
}

export default DateModule
