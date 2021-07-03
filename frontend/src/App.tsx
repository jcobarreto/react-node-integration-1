import './App.css';

// importing hooks from react module
import React, { useEffect, useState } from "react";

function App() {
  // initializing state with empty array
  const [state, setState] = useState([]);

  // function to make GET request to server for API
  const getData = async () => {
    const response = await fetch("/api");
    const data = await response.json();

    // setting state to the data array
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    // using map function to loop on state array and display data
    <div className="App">
      <h1 className="title">Countries</h1>
      <table>
        <thead>
          <tr className="head">
            <th>Country</th>
            <th>Capital</th>
            <th>Continent</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            const { id, country, capital, continent, language } = item;
            return (
              <React.Fragment key={id}>
                <tr>
                  <td>{country}</td>
                  <td>{capital}</td>
                  <td>{continent}</td>
                  <td>{language}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
