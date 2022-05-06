import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import './styles.css'

const Read = () => {
  let history = useHistory()

  const [products, setProducts] = useState([])

  //READ
  useEffect(() => {
    axios.get(`http://localhost:4000/products`)
      .then((response) => {
        setProducts(response.data)
    })
  }, [])

  const toUpdate = (id, name, price) => {
    history.push({
      pathname: '/update', 
      state: { id: id, name: name, price: price },
    })
  }

  //PARA ATUALIZAR A PÁGINA APÓS SER FEITO O DELETE
  const getData = () => {
    axios.get(`http://localhost:4000/products`)
      .then((response) => {
        setProducts(response.data)
    })
  }

  //DELETE
  const onDelete = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`)
    .then(() => {
        getData()
    })
  }

  return (
    <div className='table'>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {products.map((data) => {
                    return (
                      <Table.Row key={data.id}>
                          <Table.Cell>{data.name}</Table.Cell>
                          <Table.Cell>{data.price}</Table.Cell>
                          <Table.Cell>
                            <Button
                              color="blue"
                              onClick={() => toUpdate(data.id, data.name, data.price)}>
                              Update
                            </Button>
                          </Table.Cell>
                          <Table.Cell>
                            <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                          </Table.Cell>
                      </Table.Row>
                    )
                })}

            </Table.Body>
        </Table>
        
        <div>
        <Link to='/create'>
          <Button
            color="green"
            onClick={() => {}}>
            Create
          </Button>
        </Link>
        </div>
    </div>
  )
}

export default Read
