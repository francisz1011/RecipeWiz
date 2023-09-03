import RecipeGenerator from './components/RecipeGenerator';
import Navbar from './components/Navbar';
import ChefVideo from './components/ChefVideo';
import TypeEffect from './components/TypeEffect';
import Recipes from './components/Recipes';
import GetStartedButton from './components/GetStartedButton';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  

  return (
 <div>
  <Navbar/>
<TypeEffect/>
<GetStartedButton/>
  <ChefVideo/>
  <RecipeGenerator/>
  <Recipes/>
  <About/>
  <Footer/>

 </div>
  )
}

export default App
