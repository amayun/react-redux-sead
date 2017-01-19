import React from 'react'
import {Button, ListGroup, ListGroupItem, Input} from 'reactstrap'

export default class Education extends React.Component {
  constructor(props) {
    super(props)
    this.addPlace = this.addPlace.bind(this)
    this.placeTemplate = {name: 'Место'}
    this.state = {
      places: [{...this.placeTemplate}]
    }
  }

  render() {
    return (
        <ListGroup className="cv-education">
          <Button onClick={this.addPlace} color="success">Добавить место</Button>
          {this.state.places.map((place, idx)=>(
              <ListGroupItem key={idx}><Input defaultValue={place.name}/></ListGroupItem>
          ))}
        </ListGroup>
    )
  }

  addPlace() {
    this.setState({places: this.state.places.concat({...this.placeTemplate})})
  }
}
