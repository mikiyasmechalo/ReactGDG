import React from 'react';

interface Props{
  name: string,
  email: string,
  age: number,
  bg?: 'lightBlue' |'blue' | 'green' | "yellow"
}



function UserCard({name, email, age, bg}: Props){
  return(
      <>
        <div style={{ padding:12 , background:bg || "beige",border: "solid", borderColor: 'gray', display: 'inline-flex', flexDirection: 'column'}}>
          <p style={{padding:0, margin:5}}>{'Name: ' + name}</p>
          <p style={{padding:0, margin:5}}>{'Age ' + name}</p>
          <p style={{padding:0, margin:5}}>{'Email: ' + email}</p>
        </div>
      </>
  )
}

export default UserCard;