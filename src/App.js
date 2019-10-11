import React from 'react';
import logo from './logo.svg';
import './App.scss';
import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid black;

  td {
    background: grey;
  },
  th, td {
    padding: 5px;
  }
  
`;

function get(i) {

  if (i==0)
    return 0
  if (i==1)
    return 1

  return (get(i-1)+get(i-2))
}

function fetchObject() {

  let count = -1
  let prev = 0
  let next = 1

  return {
    set: i => { 
      count++
      if (count==0)
        return 0
      else if (count==1)
        return 1
      else {
        next = next + prev
        prev = next - prev 
        return next
      }
    },
    prev: ()  => prev, 
    next: ()  => next, 
  }
}

function App() {

  let d = 0;
  const data = fetchObject();
  return (
    <div>
    <h1>Fibonacci Sequence</h1>
    <div className="App">
    <div>
    <h3>Recurrency</h3>
    <Table>
    <tr>
    <th>Index</th>
    <th>Result</th>
    </tr>
    { [0,1,2,3,4,5,6,7,8,9,10,11,12].map(k => {
      d = get(k)
      return (
        <tr>
        <td>index:{k}</td>
        <td>{d}</td>
        </tr>
      )
    }
    )}
    </Table>
    </div>

    <div> 
    <h3>Two variables</h3>
    <Table>
    <tr>
    <th>Index</th>
    <th>Result</th>
    <th>Parameters</th>
    </tr>
    { [0,1,2,3,4,5,6,7,8,9,10,11,12].map(k => {
      let prev = data.prev()
      let next = data.next()
      let ret = data.set()
      return(
        <tr>
        <td>index:{k}</td>
        <td style={{margin:'20px'}}>{ret}</td>
        <td>prev:{prev} next:{next}</td>
        </tr>
      )
    })
    }
    </Table>

    </div>
    </div>
    </div>
  );
}

export default App;
