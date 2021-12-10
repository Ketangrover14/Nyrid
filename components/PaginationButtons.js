import React from 'react'
import Link from 'next/link'
import tw from "tailwind-styled-components"

import { useRouter } from 'next/router'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function PaginationButtons() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
    return (
        <Wrapper>
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`} >
                <Div1 className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronDoubleLeftIcon className="h-5"/>
                    <P> Previous</P>
                </Div1>
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <Div2 className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                <ChevronDoubleRightIcon className="h-5"/>
                <P2>Next</P2>
            </Div2>
            </Link>
        </Wrapper>
    );
}

export default PaginationButtons
const Wrapper=tw.div`flex justify-between max-w-lg text-purple-700 mb-10`
const Div1=tw.div`flex flex-grow flex-col items-center cursor-pointer hover:underline`
const P =tw.div``
const Div2=tw.div`flex flex-grow flex-col items-center cursor-pointer hover:underline`
const P2=tw.div``
