import React from 'react'
import tw from "tailwind-styled-components"
import HeaderOption from './HeaderOption'
import {
   DotsVerticalIcon,
   MapIcon,
   NewspaperIcon,
   PlayIcon,
   PhotographIcon,
SearchIcon
} from "@heroicons/react/solid";
function HeaderOptions() {
    return (
        <Wrapper>
            <Header2>
                <HeaderOption Icon={SearchIcon}
                title="All" selected />
                <HeaderOption Icon={PhotographIcon}
                title="Images" />
                <HeaderOption Icon={PlayIcon}
                title="Videos" />
                <HeaderOption Icon={NewspaperIcon}
                title="News" />
                <HeaderOption Icon={MapIcon}
                title="Map" />
                <HeaderOption Icon={DotsVerticalIcon}
                title="More" />
                </Header2>
            <Header1>
                <P1>Settings</P1>
                <P2>
                    Tools
                </P2>
            </Header1>
        </Wrapper>
    )
}

export default HeaderOptions
const Wrapper=tw.div`flex w-full text-purple-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b`
const Header1=tw.div`flex space-x-4`
const P2=tw.div`cursor-pointer hover:underline`
const P1=tw.div`cursor-pointer hover:underline`
const Header2=tw.div`flex space-x-6`
