import React from 'react'
import tw from "tailwind-styled-components"




function HeaderOption({Icon, title , selected}) {
    return (
        <Wrapper className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 
        hover:border-blue-500 pb-3 cursor-pointer ${selected && "text-blue-500 border-blue-500"}`} >
            <Icon className="h-4" />
            <Titletag>
                {title}
            </Titletag>
        </Wrapper>
        
    )
}

export default HeaderOption
const Wrapper=tw.div``
const Titletag=tw.div`hidden sm:inline-flex`
