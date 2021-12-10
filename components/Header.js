import React from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { XIcon , MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import { useRef } from "react"
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router =useRouter();
    const searchInputRef = useRef(null);
    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;

  if(!term) return;

  router.push(`/search?term=${term}`);
    }

    return (
       <Wrapper>
           <Online>
           <Cornerimg 
           src="https://i.postimg.cc/PrGqZqTn/1639072801644.png"
           onClick={() => router.push("/") }/>

           <Form>
           <input
      ref={searchInputRef}
           type="text" className="flex-grow focus:outline-none w-full"/>
         <XIcon className="h-7 sm:mr-3 text-purple-200 cursor-pointer transition duration-100 transform hover:scale-125"
         onClick = {() => (searchInputRef.current.value = "")}/>
         <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-purple-500 border-l-2 pl-4 border-purple-300"/>
         <SearchIcon 
         onClick={search}
         className="h-6 text-purple-500 hidden sm:inline-flex cursor-pointer"
         />
         <button hidden type="submit" onClick={search}>Search</button>
           </Form>
           <Avatar className="ml-auto" url ="https://i.postimg.cc/qvd302y3/rider-pic.png"/>
           </Online>
           <Online2>
           <HeaderOptions/>
           </Online2>
          

       </Wrapper>
    )
}

export default Header
const Wrapper=tw.div`sticky-top-0 bg-white`
const Cornerimg=tw.img`h-20 w-50 cursor-pointer`
const Form=tw.div`flex flex-grow px-6 py-3 ml-10 mr-5 shadow-lg max-w-3xl rounded-full border border-purple-200 items-center
rounded-full`
const Online=tw.div`flex w-full p-6 items-center`
const Online2=tw.div``