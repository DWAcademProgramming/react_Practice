import React, {useState} from "react"
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconlink from "./components/AboutIconlink"

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return(
        <Router>
            <Header />
            <div className="container">
                <Routes>
                <Route
                    path='/'
                    element={
                      <>
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                      </>
                    }
                ></Route>
                <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconlink /> 
            </div>
        </Router>
    )
}

export default App