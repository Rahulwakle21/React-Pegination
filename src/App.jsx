import { useEffect, useState } from "react"
import './App.css'


function App() {

  const[title,setTitle] = useState([])
  const[page,setPage] = useState(1)

    const fetchApi = async()=>{
      let res = await fetch('https://jsonplaceholder.typicode.com/posts')
      let resData = await res.json()
      setTitle(resData)
      console.log(resData)
    }

    useEffect(()=>{
      fetchApi()
    },[])

    const handleClcik =(selectedPage)=>{
      setPage(selectedPage)
    }

  return (
    <>
          <h1> Pegination TAsk</h1>
      {
        title.slice(page*10-10,page*10).map((list)=>{
          return <li key={list.id}>{list.title}</li>
        })
      }
      <div style={{marginTop:"30px"}} className="peginationNum">
        <span onClick={()=> handleClcik(page-1)}> Prev </span>
        {
          [...Array(title.length/10)].map((_,i)=>{
            return <span onClick={()=>handleClcik(i+1)}>{i+1}</span>
          })
        }
        <span onClick={()=> handleClcik(page+1)}> Next </span>
        
      </div>
    </>
  )
}

export default App
