import { WeatherOutput } from 'zebar'

/**
 * WeatherModule component props
 *
 * @remarks
 * Refer to {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#weather}
 *
 * @typeParam output - The output object containing information related to local weather
 */
type Props = {
    output: WeatherOutput
}

/**
 *
 * @remarks
 * This module relies on the provider setup being configured with the user's latitude and longitude or will guess based on IP
 *
 * @param props - Refer to {@link Props}
 * @returns A module containing the temperature in celsius and the icon representing the current conditions
 */
const WeatherModule = (props: Props) => {
    /**
     *
     * @returns The icon based on the reported weather conditions
     */
    const getIcon = () => {
        switch (props.output.status) {
            case 'clear_day':
                return <i class="nf nf-weather-day_sunny"></i>
            case 'clear_night':
                return <i class="nf nf-md-weather_night"></i>
            case 'cloudy_day':
                return <i class="nf nf-weather-day_cloudy"></i>
            case 'cloudy_night':
                return <i class="nf nf-weather-night_alt_cloudy"></i>
            case 'light_rain_day':
                return <i class="nf nf-weather-day_sprinkle"></i>
            case 'light_rain_night':
                return <i class="nf nf-weather-night_alt_sprinkle"></i>
            case 'heavy_rain_day':
                return <i class="nf nf-weather-day_rain"></i>
            case 'heavy_rain_night':
                return <i class="nf nf-weather-night_alt_rain"></i>
            case 'snow_day':
                return <i class="nf nf-weather-day_snow"></i>
            case 'snow_night':
                return <i class="nf nf-weather-night_alt_snow"></i>
            case 'thunder_day':
                return <i class="nf nf-weather-day_lightning"></i>
            case 'thunder_night':
                return <i class="nf nf-weather-night_alt_lightning"></i>
        }
    }

    return (
        <div class="weather">
            {getIcon()}
            {Math.round(props.output.celsiusTemp)}°C
        </div>
    )
}

export default WeatherModule
