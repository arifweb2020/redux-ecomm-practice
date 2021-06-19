import React, {useState,useEffect} from 'react'

const About = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{

        getData()
    },[])

    const getData = async () =>{

        const res = await fetch('http://localhost:3000/request')

        const res1 = await res.json();

        console.log(res1);

        setData(res1);

    }

    return (
        <div className="jumbotron text-center">
        <h1>welcome to Arif Store </h1>
       {
            
            data.map((item)=>{
                return <h5 key={item.id}>{item.name}</h5>
            })
            }
      
    </div>
    )
}

export default About
