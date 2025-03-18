import { MediaOutput } from 'zebar'

/**
 * MediaModule component props
 *
 * @remarks
 * Refer to {@link https://github.com/glzr-io/zebar?tab=readme-ov-file#media}
 *
 * @typeParam output - The output object containing information related to the system's media status
 */
type Props = {
    output: MediaOutput
}

/**
 *
 * @param props - Refer to {@link Props}
 * @returns A module containing the current media session's artist and title with an icon designating the playing status
 */
const MediaModule = (props: Props) => {
    /**
     *
     * @param mediaSession The session to pull the information from, in this case the current session
     * @returns Text displaying the playing status icon and the artist's name and title
     */
    const getSessionInfo = (mediaSession) => {
        if (mediaSession.artist == null || mediaSession.title == null) return ''

        const icon = mediaSession.isPlaying ? '󰐊' : '󰏤'
        return `${icon} ${mediaSession.artist} - ${mediaSession.title}`
    }

    return (
        <div class="media">
            {props.output.allSessions.find(
                (s) => s.sessionId.indexOf('.exe') > 0
            ) ? (
                getSessionInfo(
                    props.output.allSessions.find(
                        (s) => s.sessionId.indexOf('.exe') > 0
                    )
                )
            ) : (
                <i class="nf nf-md-music_off"></i>
            )}
        </div>
    )
}

export default MediaModule
