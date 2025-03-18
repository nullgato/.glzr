/* @refresh reload */
import { createStore } from 'solid-js/store'
import { render } from 'solid-js/web'
import * as zebar from 'zebar'
import { ZebarSegment } from '~components'
import {
    CPUModule,
    DateModule,
    GlazeWMModule,
    MediaModule,
    MemoryModule,
    NetworkModule,
    WeatherModule,
    WorkspacesModule,
} from '~modules'
import '~styles/app.sass'

/**
 * For providers, see - {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#-providers}
 */
const providers = zebar.createProviderGroup({
    network: { type: 'network' },
    glazewm: { type: 'glazewm' },
    cpu: { type: 'cpu' },
    date: { type: 'date', formatting: 'T' },
    media: { type: 'media' },
    memory: { type: 'memory' },
    weather: {
        type: 'weather',
        latitude: import.meta.env.VITE_LATITUDE,
        longitude: import.meta.env.VITE_LONGITUDE,
    },
})

/**
 *
 * @returns Initialized component for Zebar to render
 */
const App = () => {
    /**
     * Initialization of Zebar providers
     */
    const [output, setOutput] = createStore(providers.outputMap)
    providers.onOutput((outputMap) => setOutput(outputMap))

    return (
        <div class="app">
            <ZebarSegment section="left">
                {output.memory && <MemoryModule output={output.memory} />}
                {output.cpu && <CPUModule output={output.cpu} />}
            </ZebarSegment>

            <ZebarSegment section="center">
                {output.glazewm && <WorkspacesModule output={output.glazewm} />}
                {output.glazewm && <GlazeWMModule output={output.glazewm} />}
            </ZebarSegment>

            <ZebarSegment section="right">
                {output.media && <MediaModule output={output.media} />}
                {output.network && <NetworkModule output={output.network} />}
                {output.weather && <WeatherModule output={output.weather} />}
                {output.date && <DateModule output={output.date} />}
            </ZebarSegment>
        </div>
    )
}

render(() => <App />, document.getElementById('root')!)
