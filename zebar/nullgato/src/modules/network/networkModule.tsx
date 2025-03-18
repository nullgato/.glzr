import { NetworkOutput } from 'zebar'

/**
 * NetworkModule component props
 *
 * @remarks
 * Refer to {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#network}
 *
 * @typeParam output - The output object containing information related to the system's network status
 */
type Props = {
    output: NetworkOutput
}

/**
 *
 * @param props - Refer to {@link Props}
 *
 * @returns A module containing the icon based on the internet status;
 * an ethernet or wifi icon where the wifi icon is determined based on signal strength
 */
const NetworkModule = (props: Props) => {
    /**
     *
     * @returns The icon based on interface type and strength if applicable
     */
    const getIcon = () => {
        switch (props.output.defaultInterface?.type) {
            case 'ethernet':
                return 'nf-md-ethernet_cable'
            case 'wifi':
                if (props.output.defaultGateway?.signalStrength >= 80) {
                    return 'nf-md-wifi_strength_4'
                } else if (props.output.defaultGateway?.signalStrength >= 65) {
                    return 'nf-md-wifi_strength_3'
                } else if (props.output.defaultGateway?.signalStrength >= 40) {
                    return 'nf-md-wifi_strength_2'
                } else if (props.output.defaultGateway?.signalStrength >= 25) {
                    return 'nf-md-wifi_strength_1'
                } else {
                    return 'nf-md-wifi_strength_outline'
                }
            default:
                return 'nf-md-wifi_strength_off_outline'
        }
    }

    const icon = `nf ${getIcon()}`

    return (
        <div class="network">
            <i class={icon}></i>
        </div>
    )
}

export default NetworkModule
