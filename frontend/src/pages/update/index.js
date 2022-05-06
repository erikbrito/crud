import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'

import './styles.css'

const Update = () => {
  let history = useHistory()
  let location = useLocation()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState(null)

  //UPDATE
  const onUpdate = () => {
    axios.put(`http://localhost:4000/products/${id}`, { name, price })
    .then(() => {
        history.push('/')
    })
  }

  useEffect(() => {
    setName(location.state.name)
    setPrice(location.state.price)
    setId(location.state.id)
  }, [location])

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
            <Button type='submit' onClick={onUpdate}>Update</Button>
        </Form>
    </div>
  )
}

export default Update
