import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './Components/Pages/About.jsx'
import { AlerProvider } from './Components/Context/Alert/AlertContext.js'
import Alert from './Components/Alert.jsx'
import Footer from './Components/Footer'
import { GithubProvider } from './Components/Context/Github/GithubContext.js'
import Home from './Components/Pages/Home'
import Navbar from './Components/Navbar'
import NotFound from './Components/Pages/NotFound'
import User from './Components/Pages/User.jsx'

function App() {
  return (
    <GithubProvider>
      <AlerProvider>
        <Router>
          <div className="flex flex-col justify-between  h-screen">
            <Navbar />
            <main>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path='/user/:login' element={<User/>}/> */}
                <Route path="/user/:login" element={<User />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlerProvider>
    </GithubProvider>
  )
}

export default App
