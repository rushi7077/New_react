import React from 'react'

function App() {

  /*localStorage.clear()
  localStorage.setItem('user','Rushi')
  localStorage.setItem('age','22')
  localStorage.setItem('city','Pune')
  const user = localStorage.getItem('user')
  console.log(user);
  localStorage.removeItem('')*/

  const User = {
    'Name':'Rushikesh',
    'Age':22,
    'City':'Wagholi'
  }

  localStorage.setItem('User',JSON.stringify(User))
  const UserDetails = JSON.parse(localStorage.getItem('User'))
  console.log(UserDetails);
  
  

  return (
    <div>App</div>
  )
}

export default App