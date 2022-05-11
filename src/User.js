import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'


export default function User() {
        const [searchParams,setSearchParams] =useSearchParams();
 
  return (

      <> 
       
        <div>User{(searchParams.get('id'))}</div>
        <div>User{(searchParams.get('name'))}</div>
        <div>User{(searchParams.get('surname'))}</div>
        <Outlet/>
      </>
    
  )
}
