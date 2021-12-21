
//import './App.css';
import Footer from './footer';
import Header from './header';
import Tutorials from './tutorials';
import Addcustomer from './addcustomer';

//const currentdate = new Date().getFullYear;
function App() {
  return (
    <div className='App'>
      <Header/>
      <Tutorials/>
      <Addcustomer/>
      <Footer/>
    </div>
  );
}

export default App;
