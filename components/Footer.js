import { GlobeIcon } from '@heroicons/react/solid'
import React from 'react'
import tw from "tailwind-styled-components"

function Footer() {
    return (
        <Wrapper>
            <Loc>
                India
            </Loc>
            <Loc2>
             <Loc5>
           <GlobeIcon className="h-5 mr-1 text-green-700"/> carbon neutral since 2007
            </Loc5>
            <Loc3>
                <P1>
                Advertising
                </P1>
                <P2>
                     Business
                </P2>
                <P3>
                     How Search Works
                </P3>
            </Loc3>
            <Loc4>
                <Q1>
                   Privacy
                </Q1>
                <Q2>
                 Terms
                </Q2>
                <Q3>
                 Settings
                </Q3>

            </Loc4>
            </Loc2>
        </Wrapper>
    )
}

export default Footer
const Wrapper=tw.div`grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500`
const Loc=tw.div`px-4 py-3`
const Loc2=tw.div`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3  `
const Loc3=tw.div`flex justify-center space-x-8 whitespace-nowrap md:justify-self-start`
const P1=tw.div`` 
const P2=tw.div`` 
const P3=tw.div`` 
const Loc4=tw.div`flex justify-center space-x-8 md:ml-auto`
const Q1=tw.div`` 
const Q2=tw.div`` 
const Q3=tw.div`` 
const Loc5=tw.div`flex flex-col Justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2`
