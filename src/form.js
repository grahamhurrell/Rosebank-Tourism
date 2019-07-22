import React, {Component} from 'react';

class Form extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <section id="Form"
      className="form flex flex-row flex-wrap flex-auto w-100 ph3 pv3 bg-white f5 br2 mt4">
      

      <div className="form-input flex flex-column flex-auto">
        <div className="flex flex-column w-100 h-100">
        <input type="text" className="ph3 pv2 bn bg-transparent black-80" placeholder="18/07/2019"></input>
        <label className="ph3 f7 fw6 black -white -ts-a">Check In</label>
      </div>
      </div>

      <div className="form-input flex flex-column flex-auto">
        <div className="flex flex-column w-100 h-100">
        <input type="text" className="ph3 pv2 bn bg-transparent black-80" placeholder="19/07/2019"></input>
        <label className="ph3 f7 fw6 black -white -ts-a">Check Out</label>
      </div>
      </div>
      <div className="form-input flex flex-column flex-auto">
        <div className="flex flex-column w-100 h-100">
        <input type="number" className="ph3 pv2 bn bg-transparent black-80" placeholder="1"></input>
        <label className="ph3 f7 fw6 black -white -ts-a">Guests</label>
      </div>
      </div>

      <div className="form-input flex flex-column">
        <div className="flex flex-column w-100 h-100"><select type="select" className="ph3 pv2 bn bg-transparent black-50">
          <option value="Dorm">Dorm</option>
          <option value="Single Room">Single En-Suite</option>
          <option value="Single Room">Double En-Suite</option>
        </select>
        <label className="ph3 f7 fw6 black -white -ts-a">Room Type</label>
      </div>
      </div>


      </section>
    )
  }
}
export default Form
