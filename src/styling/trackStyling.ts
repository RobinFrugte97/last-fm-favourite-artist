import styled from 'styled-components'

const Track = styled.li`
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: row;
    height: 4rem;
    justify-content: space-between;
    margin: 1rem 0;

    &:after {
        position: absolute;
        content: "";
        display: block;
        margin: 0 auto;
        width: 80%;
        padding-top: 72px;
        transform: translateX(13%);
        border-bottom: 1px rgba(0, 0,0,.15) solid;
    }
`

const TrackNumber = styled.span`
    font-size: 3rem;
    font-weight: bold;
    color: steelblue;
    margin-right: 2rem
`

const TrackName = styled.h2`
    line-height: 0.5em;
`

const TrackDuration = styled.span`
    font-weight: 100;
    font-size: 1.2rem;
`

const TrackButton = styled.button`
    border: none;
    border-radius: 10%;
    width: 3rem;
    height: 3rem;
    background-color: steelblue;
    color: white;
    cursor: pointer;
    font-size: 3rem;
    text-align: center;
    line-height: 1rem;
    padding-left: 8px;
`

const MinusButton = styled(TrackButton)`
    padding-bottom: 7px;
    line-height: 0rem;
`

export {
    Track,
    TrackNumber,
    TrackName,
    TrackDuration,
    TrackButton,
    MinusButton
}