import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults(props) {
    const {users, loading} = useContext(GithubContext)


  

    if(!loading){
      return <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) =>(
          <UserItem key={user.id} user={user} /> 
        ))}
      </div>
    }else{
      return <h3>Loading...</h3>
    }
}

UserResults.propTypes = {}

export default UserResults
