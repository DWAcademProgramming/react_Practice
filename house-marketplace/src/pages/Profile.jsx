import React, {useEffect, useState} from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {
  const [user, setUser] = useState(null)

  const auth = getAuth()

  useEffect(() =>{
    setUser(auth.currentUser)
  }, [])
  return user ? <h1>{user.email}</h1> : 'Not Found '
}

export default Profile