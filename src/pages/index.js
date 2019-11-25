import React, {useContext} from "react"
import { Global } from '@emotion/core'
import {MyThemeContext} from '../contexts/theme-context'
import EventList from '../components/event-list'


const HomePage = () => {
    const streamerName = "jlengstorf"
    const {theme } = useContext(MyThemeContext)
    return (
        <>
        <Global styles={{body: { backgroundColor: theme.colors.background}}} />
    <main>
<h1>{streamerName}'s Calendar</h1>
        <EventList events={[{
            id:0,
            title:"Create a Twitch Extension with Darrik Moberg",
            date: new Date('November 25, 2019 10:30:00'),
            description: "If you want to show specific information on a Twitch profile, how do you do that? In this episode, Learn With Jason moderator Darrik Moberg (https://twitter.com/MDarrik) teaches us how to create custom extensions for Twitch that work on both the website and apps."
        }]} />
    </main>
    </>
)}

export default HomePage