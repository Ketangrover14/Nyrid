import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Avatar from '../components/Avatar'
import {ViewGridIcon , MicrophoneIcon} from "@heroicons/react/solid"
import {SearchIcon} from "@heroicons/react/outline";
import Footer from '../components/Footer'
import { useRef } from "react"
import {useRouter} from 'next/router'



export default function Home() {
  const router = useRouter();
const searchInputRef = useRef(null);

const search = (e) => {
  e.preventDefault();
  const term = searchInputRef.current.value;

  if(!term) return;

  router.push(`/search?term=${term}`);


};

  return (
    <Wrapper>
<Header1>
  
<About>
  About
</About>


<Store>
Store
</Store>

<Email>
  Email
  </Email>

  
  <Pictures>
    Images
    </Pictures>
    <ViewGridIcon className="h-10 w-10  mr-30 rounded-full hover:bg-gray-100 cursor-pointer"/>


    
<Avatar url ="https://i.postimg.cc/qvd302y3/rider-pic.png"/>
  
</Header1>

<Header3>
<Mainimg src="https://i.postimg.cc/PrGqZqTn/1639072801644.png"/>
<Form>
<SearchIcon className="h-5 ml-3 text-purple-500"/>
<input
ref={searchInputRef}
type="text" className="flex-grow focus:outline-none"/>
<MicrophoneIcon className="h-5"/>
</Form>
<Header2>
<Button1 onClick={search}>
    Google Search
  </Button1>
  <Button2 onClick={search}>
  I'm Feeling Lucky
  </Button2>
  </Header2>
</Header3>

<Header4>
<Footer/>
</Header4>
    </Wrapper>



    
  )
}
const Wrapper=tw.div`flex flex-col p-5 justify-center h-screen`
const Header1=tw.div`flex space-x-4 text-xl text-purple-700 justify-between items-center`
const About=tw.div`cursor-pointer hover:underline`

const Store=tw.div`cursor-pointer hover:underline`


const Email=tw.div`cursor-pointer hover:underline`

const Pictures=tw.div`cursor-pointer hover:underline`
const Header3=tw.div`flex flex-col items-center mt-40 flex-grow`
const Mainimg=tw.img`w-300 h-100`
const Form=tw.div`flex w-full mt-4 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
sm:max-w-xl lg:max-w-2xl w-4/5`
const Header2=tw.div`flex flex-col w-1/2 space-y-2 justify-center mt-4 sm:space-y-0 sm:flex-row sm:space-x-4 items-center`
const Button1=tw.button`bg-gray-100 p-3 rounded-md ring-purple-200 text-sm text-purple-800 hover:ring-1 focus:outline-none
active:ring-gray-300 hover:shadow-md`
const Button2=tw.button`bg-gray-100 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none 
active:ring-gray-300 hover:shadow-md mr-8 ml-8`
const Header4=tw.div``
