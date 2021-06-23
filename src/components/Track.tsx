import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Track, TrackNumber, TrackName, TrackDuration, TrackButton, MinusButton } from '../styling/trackStyling'
import { secondsToMinutes } from '../helpers/functions'
import { actionCreators } from '../state'


const TrackItem: React.FC<any> = ({ track, parent }) => {
    const dispatch = useDispatch()

    const { addToFavourite, removeFromFavourite } = bindActionCreators(actionCreators, dispatch)

    return (
        <Track>
            <TrackNumber>#{track['@attr'].rank}</TrackNumber>
            <TrackName>
                <TrackDuration>{secondsToMinutes(track.duration)} - </TrackDuration>
                {track.name}
            </TrackName>
            {parent === 'album' ?
                <TrackButton onClick={async () => addToFavourite(track)}>+</TrackButton>
            :
                <MinusButton onClick={async () => removeFromFavourite(track)}>-</MinusButton>
            }
        </Track>
    )
}

export default TrackItem