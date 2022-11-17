import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import PrivateRoutes from './components/PrivateRoutes'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreateListings from './pages/CreateListings'
import Listing from './pages/Listing'
import Contact from './pages/Contact'
import EditListing from './pages/EditListing'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Categories />} />
          <Route path='/profile' element={<PrivateRoutes />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/createlisting' element={<CreateListings />} />
          <Route path='/editlisting/:listingId' element={<EditListing />} />
          <Route path='/category/:categoryName/:listingId' element={<Listing />} />
          <Route path='/contact/:landlordId' element={<Contact />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
