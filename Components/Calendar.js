import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:"2016-05-15"
      // date: Date()
    }
  }

  render(){
    const now = this.props.now.getFullYear() + '-' + (this.props.now.getMonth()+1) + '-' + this.props.now.getDate()
    console.log(now)
    return (
      <DatePicker
        style={{width: 200}}
        date={now}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={now}
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}
