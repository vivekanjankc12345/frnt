import { Box, Heading, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Fwtch = () => {
    const [text,settext]=useState("")
    const [search,setsearch]=useState("")
    const [data1,setdata]=useState([]);
    const [loading,setloading]=useState(false)
    
    useEffect(()=>{
        if(text==="shayari")
        {
            fetchshayari(search)
        }
        else if(text==="joke")
        {
            fetchjoke(search)
        }
        else if(text==="story")
        {
            fetchstory(search)
        }
        else if(text==="quote")
        {
            fetchquote(search)
        }
     },[text,search])
    const fetchshayari=(search)=>
    {
        console.log(search)
        setloading(true)
        axios.get(`https://wild-hen-sundress.cyclic.app/shayari?keyword=${search}`,{
            headers:{
                Authorization:"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"
            }
        })
        .then((res)=>{
            console.log(res.data);
            setdata(res.data.shayari)
            setloading(false)
        })
        .catch((err)=>{
            console.log(err.response.data.error)
            setloading(false)
        })
    }
    const fetchjoke=(search)=>
    {
        console.log(search)
        setloading(true)
        axios.get(`https://wild-hen-sundress.cyclic.app/joke?keyword=${search}`,{
            headers:{
                Authorization:"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"
            }
        })
        .then((res)=>{
            console.log(res.data);
            setdata(res.data.joke)
            setloading(false)
        })
        .catch((err)=>{
            console.log(err.response.data.error)
            setloading(true)
        })
    }
    const fetchstory=(search)=>
    {
        console.log(search)
        setloading(true)
        axios.get(`https://wild-hen-sundress.cyclic.app/story?keyword=${search}`,{
            headers:{
                Authorization:"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"
            }
        })
        .then((res)=>{
            console.log(res.data);
            setdata(res.data.story)
            setloading(false)
        })
        .catch((err)=>{
            console.log(err.response.data.error)
            setloading(true)
        })
    }
    const fetchquote=(search)=>
    {
        setloading(true)
        console.log(search)
        axios.get(`https://wild-hen-sundress.cyclic.app/quote?keyword=${search}`,{
            headers:{
                Authorization:"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"
            }
        })
        .then((res)=>{
            console.log(res.data);
            setdata(res.data.quote)
            setloading(false)
        })
        .catch((err)=>{
            console.log(err.response.data.error)
            setloading(true)
        })
    }
  
  return (
    <>
 <Box w={"100%"} h={"700px"} border={"1px solid red"}>
        <Box w={"50%"} h={"auto"} border={"1px solid gray"} ml="30%" mt={"10%"} borderRadius={"10%"}>
            <Heading ml={"10%"} mt={"4%"}>Shayaris, Jokes, Stories and Quote Generator</Heading>
            <Select w={"50%"} ml={"20%"} mt={"2%"} onChange={(e)=>settext(e.target.value)} value={text}>
              <option value={"shayari"}>Shayaris</option>
              <option value={"joke"}>Jokes</option>
              <option value={"story"}>Stories</option>
              <option value={"quote"}>Quote</option>
            </Select>
            <Input w={"50%"} ml={"20%"} mt={"2%"} placeholder='enter keyword' value={search} onChange={(e)=>setsearch(e.target.value)} type='text' />
            <Box>
         {<Text  w={"80%"} ml={"10%"} mt={"2%"} h={"auto"} font>{loading?"loading...":data1}</Text>}
        </Box>
        </Box>
       
    </Box>
   
    </>
   
  )
}

export default Fwtch
