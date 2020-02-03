import React from 'react';
import Customer from './components/Customer';
import './App.css';
import { render } from '@testing-library/react';


const customers = [
{
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name': 'John Doe',
  'birthday': '96/12/12',
  'gender': 'male',
  'job': 'college student'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name': 'Jonathan Smith',
  'birthday': '94/06/12',
  'gender': 'male',
  'job': 'Software Developer'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name': 'Jiuk Choi',
  'birthday': '85/05/12',
  'gender': 'male',
  'job': 'Freelancer'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            )
          }
        )
      }
    </div>
  );
}
export default App;
