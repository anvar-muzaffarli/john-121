import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';

import { useEffect } from 'react';
// ANA KOMPONENT APP JS

// AOS KITABXANASI

import AOS from 'aos';
import 'aos'


// Child komponent 
import Navbar from "./components/Navbar"
import Introduction from './components/Introduction';
import PostsContainer from './components/PostsContainer';




function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    // REACT FRAGMENT
<>

<Navbar />
<Introduction />
<PostsContainer />
 </>

  );
}

export default App;


