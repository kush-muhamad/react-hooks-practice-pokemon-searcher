import React, {useState}from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPoke}) {
  //capture the state of the input state-all values so we shall need four
  const [name , setName]= useState('')
  const [hp , setHp]= useState(0)
  const [front , setFront]= useState('')
  const [back , setBack]= useState('')


  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault()
// new object
    let newPoke = {
      name: name ,
      hp: hp ,
      sprites: {
        front: front ,
        back: back

      }

    }
    fetch("http://localhost:3001/pokemon" , {
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(newPoke)
    })
    .then(res => res.json())
    .then(shinyNewPoke => handleNewPoke(shinyNewPoke))
  }






  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {handleSubmit(e)}}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name"  onChange={e => setName(e.target.value)} value= {name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={e => setHp(e.target.value)} value= {hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => setFront(e.target.value)}
            value= {front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => setBack(e.target.value)}
            value= {back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
