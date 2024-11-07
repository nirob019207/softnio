
import './style.css';
import Header from './partial/Header';
import { Footer } from './partial/Footer';
import { TestimonialMain } from './testimonial/TestimonialMain';
import { BiBook } from 'react-icons/bi';
import Book from './booknow/Book';
import FoodItem from './foodItem/FoodItem';
import { Banner } from './banner/Banner';


function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <FoodItem/>
      <Book/>
      <TestimonialMain/>
      <Footer/>
     
    </div>
  );
}

export default App;
