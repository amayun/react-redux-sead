import React from 'react'
import {Form, FormGroup, Label, Input} from 'reactstrap'

export default class Names extends React.Component {
  render() {
    return (
        <Form className="cv-names">
          <FormGroup>
            <Label for="firstName">Имя</Label>
            <Input type="text" name="text" id="firstName" placeholder="Имя"/>
          </FormGroup>
          <FormGroup>
            <Label for="firstName">Фамилия</Label>
            <Input type="text" name="text" id="sureName" placeholder="Фамилия"/>
          </FormGroup>
          <FormGroup>
            <Label for="firstName">Отчество</Label>
            <Input type="text" name="text" id="patronymic" placeholder="Отчество"/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Электронная почта</Label>
            <Input type="email" name="email" id="email" placeholder="Электронная почта" />
          </FormGroup>
        </Form>
    )
  }
}
