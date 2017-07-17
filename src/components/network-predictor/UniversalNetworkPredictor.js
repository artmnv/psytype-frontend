import React, { Component } from 'react'
import request from 'superagent'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'

import PredictionResult from './PredictionResult'

class UniversalNetworkPredictor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: 'index.ascx'
    }
  }

  predictHandle = () => {
    this.setState({
      result: {}
    })
    request
      .post('https://tranquil-gasket-165218.appspot.com/predict')
      .send({ uid: this.state.url })
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err == null) {
          this.setState({
            result: res.body
          })
        }
      })
  }

  urlChangeHandle = e => {
    this.setState({
      url: e.target.value
    })
  }

  render () {
    return (
      <div>
        <Card>
          <CardTitle title="Автоматическое типирование по странице VK" />
          <CardText>
            <TextField
              id="text-field-default"
              defaultValue="Default Value"
              value={this.state.url}
              onChange={this.urlChangeHandle}
              floatingLabelText="VK id"
            />
          </CardText>
          <CardActions>
            <RaisedButton
              primary
              label="Типировать"
              onClick={this.predictHandle}
            />
          </CardActions>
          <Divider />
          <CardText>
            <PredictionResult {...this.state.result} />
          </CardText>
        </Card>
      </div>
    )
  }
}

export default UniversalNetworkPredictor
