import { useState, useEffect } from "react";

const apiUrl = "https://rocky-temple-83495.herokuapp.com/employees/" ;

export default function useEmploy() {

    const [data, setData] = useState();

    useEffect(()=>{
      fetch(apiUrl)
        .then(result => result.json())
        .then(data => setData(data))
    },[])
    return data;
}