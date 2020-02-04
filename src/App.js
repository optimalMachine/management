import React from 'react';
import Customer from './components/Customer';
import './App.css';
import { render } from '@testing-library/react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({ 
  root:{ 
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:'auto'
  },
  table: {
    minWidth: 1080
  }
})


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

class App extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID No.</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthdate</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) } ) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
