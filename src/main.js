import data from './data.json'
import CardComp from './card';
import './main.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Main() {
    let [items, setitems ]= useState(data);

    function handleSubmit(event){
        event.preventDefault()
        let searchedvalue = event.target.search.value;
        let filtereditems = data.filter(function(item){return item.title.toLowerCase().includes(searchedvalue.toLowerCase() )})
        setitems(filtereditems);
    }
    return (
        <>
          <Form className="d-flex" onSubmit={handleSubmit} id="myform">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
              />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        <div id='container'>
        {items.map(function(item){
            return(
                <CardComp image={item.image_url} title={item.title} description={item.description} price={item.price}/>
            )
        }
            )
}
        </div>
        </>
    )
}

export default Main;