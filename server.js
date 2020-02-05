const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res)=> {
    res.send(
        [
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
        ]);
});

app.listen(port,() => console.log(`Listening on port ${port}`));
