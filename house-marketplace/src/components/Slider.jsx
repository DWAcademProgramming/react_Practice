import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {
  collection,
  getDocs,
  query,
  orderBy, 
  limit
} from 'firebase/firestore'
import {db} from '../firebase.config'
import SwiperCore, { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  A11y 
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Spinner from './Spinner'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])


function Slider() {
  const [loading, setLoading] = useState(true)
  const [listings, setListing] = useState(null)

  const navigate = useNavigate()

  useEffect(() =>{
    const fetchListings = async() =>{
      const listingRef = collection(db, 'listings')
      const q = query(listingRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)

      let listings = []

      querySnap.forEach((doc) =>{
        return listings.push({
          id: doc.id,
          data: doc.data()
        })
      })

      setListing(listings)
      setLoading(false)
    }

    fetchListings()
  }, [])

  if(loading){
    return <Spinner />
  }

  return (
    <div>Slider</div>
  )
}

export default Slider