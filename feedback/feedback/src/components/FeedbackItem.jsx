import React, {useContext} from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    const handleClick =(id)=>{
        console.log(id)
    }

  return (
    <Card>
        <div className="num-display">
            {item.rating}
        </div>
        <button 
            onClick={()=>deleteFeedback(item.id)} 
            className="close"
        >
            <FaTimes color='purple' />
        </button>
        <bitton 
            onClick={() => editFeedback(item)}
            className="edit"
        >
            <FaEdit color='purple' /> 
        </bitton>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem