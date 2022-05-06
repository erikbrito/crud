import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'

import './styles.css'

const Update = () => {
  let history = useHistory()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState(null)

  const Update = () => {
    axios.put(`http://localhost:4000/products/${id}`, { name, price })
    .then(() => {
        history.push('/')
    })
  }

  useEffect(() => {
    setName(localStorage.getItem('name'))
    setPrice(localStorage.getItem('price'))
    setId(localStorage.getItem('id'))
  }, [])

  return (
    <div className='form'>
        <Form>
            <Form.Field>
                <label>Name</label>
                <input name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name' />
            </Form.Field>
            <Form.Field>
                <label>Price</label>
                <input
                    name="id"
                    value={price}
                    placeholder='Price'
                    onChange={(e) => setPrice(e.target.value)}
                />
            </Form.Field>
            <Button type='submit' onClick={Update}>Update</Button>
        </Form>
    </div>
  )
}

export default Update
