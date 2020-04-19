import React, { Component } from 'react';
import axios from 'axios';
import Select from './components/Select';
import Card from './components/Card';

class App extends Component {
  constructor(){
    super();

  this.state = {
    country: '',
    countries: [],
    all: [],
    information : {},
  }
 
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const all = res.data;
        this.setState({ all });
        const countries = this.state.all.map(el => el.name)
        this.setState({ countries });
        // console.log(this.state)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.country !== this.state.country) {
      const information = this.state.all.find(el => el.name === this.state.country)
        this.setState({ information });
    }
}

    handleSelectChange = (e) => {
      e.preventDefault();
      const value = e.target.value;
      this.setState({
        country: value
       })
       console.log(this.state)
       
    }

        
  render() {
    console.log(this.state)
    const { country, countries,information } = this.state;
    return (
      <div> 
        
        <h1>Please, select a country</h1>
        <Select 
       options = {countries} 
       value = {country}
       handleChange = {this.handleSelectChange}
       /> 
       <Card 
           name= {information.name}
              flag = {information.flag}
              timezones ={information.timezones}
              region ={information.region}
              subregion ={information.subregion}
              population ={information.population}
      />
       </div>
    
    )
  }

}


export default App;

