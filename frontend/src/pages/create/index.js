import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'

import './styles.css'

const Create = () => {
  let history = useHistory()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const create = () => {
    axios.post(`http://localhost:4000/products`, {
      name,
      price
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className='form'>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input 
            name="name" 
            onChange={(e) => setName(e.target.value)} 
            placeholder='Name'
          />
        </Form.Field>

        <Form.Field>
          <label>Price</label>
          <input 
            name="price"
            placeholder='Price'
            onChange={(e) => setPrice(e.target.value)} 
          />
        </Form.Field>
        
        <Button type='submit' onClick={create}>Create</Button>
      </Form>
    </div>
  )
}

export default Create
