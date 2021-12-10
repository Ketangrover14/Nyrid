import React from 'react'
import tw from "tailwind-styled-components"
import PaginationButtons from './PaginationButtons'

function SearchResults({ results }) {
    return (
        <Wrapper>
            <NumResult>
                About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
                </NumResult>

                {results.items?.map((result) => (  
                    <Akey key={result.link}>
                        <Sty>
                            <A1 href={result.link}
                            className="text-sml">
                                {result.formattedUrl}
                            </A1>
                            <A2 href ={result.link}>
                                <H2>
                                    {result.title}
                                </H2>


                            </A2>

                        </Sty>
                        <Pars >
                            {result.snippet}
                        </Pars>
                    </Akey>
                ))}
                <PaginationButtons/>
        </Wrapper>
    )
                }

export default SearchResults
const Wrapper=tw.div`mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 `
const NumResult=tw.div`text-purple-600 text-md mb-5 mt-3`
const Akey=tw.div`max-w-xl mb-8`
const Sty=tw.div`group`
const A1=tw.div``
const A2=tw.div``
const Pars=tw.div`line-clamp-2`
const H2=tw.div`truncate text-xl text-purple-800 font-medium group-hover:underline`

