import NavBar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Category from './components/Category';
import Cards from './components/Card';
import { menu } from './data';
import { useState } from 'react';

function App() {

  const [foods, setFoods] = useState(menu)

  //all category for uniqe 
  const allCtegory = ['الكل', ...new Set(menu.map((i) => i.category))];


  //filter by Category
  const FilterCategory = (cat) => {
    if (cat === "الكل") {
      setFoods(menu)
    } else {
      const breakfast = menu.filter((c) => {
        return c.category === cat;
      })
      setFoods(breakfast)
    }

  }

  //filter by search
  const FilterSearch = (word) => {
    if (word !== "") {
      const filterAll = menu.filter((c) => {
        return c.title === word;
      })
      setFoods(filterAll)
    }

  }



  return (
    <div className="App">
      <NavBar FilterSearch={FilterSearch} />

      <Container>

        <Title />

        <Category FilterCategory={FilterCategory} allCtegory={allCtegory} />

        <Cards foods={foods} />

      </Container>
    </div>
  );
}

export default App;
