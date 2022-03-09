import "./App.css";
import React, {useEffect, useState} from 'react'

import CoinstatApi from "./apis/coinstat_api";

import Title from './components/title';
import Search from './components/search';
import CoinList from "./components/coinList";

let coinstatApi = new CoinstatApi();

const App = () => {

  const[count, setCount] = useState(5);
  const[coins, setCoins] = useState([]);
  const[searchText, setSearchText] = useState('');
  const[titleText, setTitle] = useState('All');
  const[counterValue, setCounterValue] = useState('5');

  //Timer to automatically call the api
  const tick = () => {
    setCount((prevState) => prevState > 0 ? prevState - 1 : 5);
  }

  //On first effect only start the timer
  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });

  //Secondly, only when the counter is active, actually call the api
  useEffect(() => {
      if (count === 5) {
        
        coinstatApi.fetchData().then((res) => {
            setCoins(res.data.coins);
        });
      }
    
      if (count === 0) {
        setCounterValue('loading...');
      }
      else{
        setCounterValue(count);
      }

  }, [count]);

  //update title based on fact that there is a filter or not
  const UpdateTitle = (searchText) => {
    if(searchText)
      {
        setTitle('Filtered')
      }
      else{
        setTitle('All')
      }
  }

  //Set the filter text
  const handleSearch = (searchText) => {
      setSearchText(searchText);
      UpdateTitle(searchText);
  }

  //Duplicate but to meet requirements: empty the search string
  const handleCancel = (searchText) => {
    setSearchText('');
    UpdateTitle(searchText);
}


  return (
    <div className="App">
        <div className="container">
          <Title text={titleText} countDown={counterValue}/>
          <Search  handleSearch={handleSearch} handleCancel={handleCancel}/>
          <CoinList coins={coins.filter((val) => {return val.name.toLowerCase().includes(searchText.toLowerCase());})}/>
        </div>
    </div>
  )
}

export default App
 