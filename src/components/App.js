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
        <div id="app">
          <div id="header"></div>
          <section className="main">

            <section className="stats">
              <section className="world-stats"></section>
              <section className="country-stats">
                <h2>Country Breakdown</h2>
                <div id="form"></div>
                <div id="table"></div>
              </section>
            </section>
          </section>

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
            <h3>Daily accurate numbers of the spread of the Coronavirus around the world.</h3>
          </header>

          <section id="main">

            <section id="world-stats">
                <h2>World Stats</h2>
                <WorldStats confirmed={global.TotalConfirmed} recovered={global.TotalRecovered} deaths={global.TotalDeaths} /> 
            </section>

            <section id="stats">

              <section id="country-stats">

                <h2>Country Breakdown</h2>

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
