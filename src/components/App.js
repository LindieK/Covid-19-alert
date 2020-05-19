import React, { Component } from 'react'
import CountryStats from './CountryStats';
import Pagination from './Pagination';
import WorldStats from './WorldStats';
import '../App.css';



export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        isLoaded: false,
        error:null,
        currentPage:1,
        recordsPerPage:10,
        global:"",
        countries: []
    }

    this.paginate = this.paginate.bind(this);
  }
  
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    });
  }


  componentDidMount(){
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then( (result) => {
      this.setState({
        isLoaded:true,
        global: result.Global,
        countries: result.Countries
      });
      },
      //handle errors from the fetch statement
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }



  render() {
    const {isLoaded, error, currentPage, recordsPerPage, global, countries} = this.state;
    if(error){
      return (
        <div>
          <h1>Oops! Something's wrong apparently.</h1>
          {/* <Error message=error.message/>*/}
        </div>
        )
    }
    else if(!isLoaded){
      return (
        <div id="lazy-app">
          <div className="lazy-title"></div>
          <div id="lazy-subtitle"></div>
          
          <div id="world-section">
            <div className="lazy-title"></div>
            <div id="world-table">
              <div>
                <div id="lazy-total"></div>
                <div className="lazy-label"></div>
              </div>
              
              <div>
                <div id="lazy-discharged"></div>
                <div className="lazy-label"></div>
              </div>
              
              <div>
                <div id="lazy-dead"></div>
                <div className="lazy-label"></div>
              </div>
            </div>
          </div>
      
          <div id="country-section">
            <div className="lazy-title"></div>
            <div id="country-table"></div>
          </div>
        </div>
      )
    }
    else{
      //Get current posts
      const indexOfLastRecord = currentPage * recordsPerPage;
      const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
      const currentRecords = countries.slice(indexOfFirstRecord,indexOfLastRecord);

      return (
        <div id="app">

          <header>
            <h1>Welcome to COVID Alert!</h1>
            <small>Daily accurate numbers of the spread of the Coronavirus around the world.</small>
          </header>

          <section id="main">

            <section id="world-stats">
                <h2>World Stats</h2>
                <WorldStats confirmed={global.TotalConfirmed} recovered={global.TotalRecovered} deaths={global.TotalDeaths} /> 
            </section>

            <section id="stats">

              <section id="country-stats">

                <h2>Country Spread Breakdown</h2>

                <form></form>
          
                <CountryStats countries={currentRecords} />
                <Pagination totalRecords={countries.length} recordsPerPage={recordsPerPage} paginate={this.paginate}/>
                
              </section>
            </section>
          </section>
      
        </div>
      )
    }
  }
}

export default App
