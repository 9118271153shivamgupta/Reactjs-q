import  {useState,useEffect} from 'react'

const useApi = (API_URL) => {
    let [data, setData]=useState(null)

    useEffect(()=>{
        async function fetchApi(API_URL){
           try {
            let resp = await fetch();
            let apiData =await resp.json()
            setData(apiData)
            
           } catch (error) {
            console.log(error);

            setData({message:"something went wrong"})
            
           }
        }
        fetchApi()
    },[API_URL])
  return (
    <h1> this is use Api Data</h1>
  )
}

export {useApi}
