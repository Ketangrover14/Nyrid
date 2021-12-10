import React from 'react'
import tw from "tailwind-styled-components"

function Avatar({url}) {
    return (
        <Wrapper>
            <Name>
            
            <Prophoto src={url}/>
              </Name>
        </Wrapper>
    )
}

export default Avatar
const Wrapper=tw.div``
const Name=tw.div``
const Prophoto=tw.img`h-12 w-12 rounded-full border-gray-200 p-px transition duration-150 transform hover:scale-110 animate-bounce cursor-pointer`
