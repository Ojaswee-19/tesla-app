import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Item from './components/Item.js';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
      <div className="App">
          <Header />
          <div className="app__itemsContainer">
              <Item
                  title='lowest cost solar panels in america'
                  desc='Money-back guarantee'
                  descLink=''
                  backgroundImg={SolarPanels}
                  leftBtnTxt='Order Now'
                  leftBtnLink =''
                  rightBtnTxt ='Learn More'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              />
              <Item
                  title='lowest cost in america'
                  desc='Money-back guarantee'
                  descLink=''
                  backgroundImg={ModelS}
                  leftBtnTxt='Order Now'
                  leftBtnLink=''
                  rightBtnTxt='Learn More'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              />
              <Item
                  title='lowest cost in america'
                  desc='Money-back guarantee'
                  descLink=''
                  backgroundImg={Model3}
                  leftBtnTxt='Order Now'
                  leftBtnLink=''
                  rightBtnTxt='Learn More'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              />
              <Item
                  title='lowest cost solar panels in america'
                  desc='Money-back guarantee'
                  descLink=''
                  backgroundImg={ModelX}
                  leftBtnTxt='Order Now'
                  leftBtnLink=''
                  rightBtnTxt='Learn More'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              />
              <Item
                  title='lowest cost solar panels in america'
                  desc='Money-back guarantee'
                  descLink=''
                  backgroundImg={ModelY}
                  leftBtnTxt='Order Now'
                  leftBtnLink=''
                  rightBtnTxt='Learn More'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              />
              <Item
                  title='lowest cost in america'
                  desc='Money-back guarantee'
                  descLink=''
                  backgroundImg={Accessories}
                  leftBtnTxt='Order Now'
                  leftBtnLink=''
                  rightBtnTxt='Learn More'
                  rightBtnLink=''
                  
              />
                  



          </div>
          {/*items ==> snapping */}
          {/*items ==> snapping */}
          {/*items ==> snapping */}
          {/*items ==> snapping */}
          
    </div>
  );
}

export default App;
