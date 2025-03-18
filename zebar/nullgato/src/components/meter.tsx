/**
 * ZebarSegment component props (with children)
 *
 * @typeParam value - The percentage to fill the meter with based on value 0 - 100
 */
type Props = {
    value: number
}

/**
 *
 * @param props - {@link Props}
 * @returns A meter component that dynamically changes color based on value 0 - 100
 */
const Meter = (props: Props) => {
    /**
     *
     * @returns The css that determines the meter's fill value and color
     */
    const getStyle = () => {
        return `width: ${
            props.value
        }px; background-color: ${getColorForPercentage(props.value * 0.01)};`
    }

    return (
        <div class="meter">
            <div class="meter-value" style={getStyle()}></div>
        </div>
    )
}

export default Meter

/**
 * The color threshold starting with the lowest value
 */
const percentColors = [
    { pct: 0.0, color: { r: 0xa6, g: 0xfb, b: 0xb2 } },
    { pct: 0.5, color: { r: 0xfd, g: 0xfd, b: 0x96 } },
    { pct: 1.0, color: { r: 0xff, g: 0x69, b: 0x61 } },
]

/**
 * {@link https://stackoverflow.com/a/7128796}
 *
 * @remarks
 * If using a percentage based on 0 - 100,
 * the value should be multipled by 0.01 to achieve a percentage
 *
 * @param pct - The percentage to adjust the resulting color to, in decimal value
 * @returns A css rgb styling
 */
const getColorForPercentage = function (pct) {
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
            break
        }
    }
    var lower = percentColors[i - 1]
    var upper = percentColors[i]
    var range = upper.pct - lower.pct
    var rangePct = (pct - lower.pct) / range
    var pctLower = 1 - rangePct
    var pctUpper = rangePct
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
    }
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')'
    // or output as hex if preferred
}
