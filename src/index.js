import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import './tachyons.min.css';

import Form from './form';
import Modal from './Modal';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Rosebank',
      modal: false,
    };
    this.showModal = this.showModal.bind(this);

  }
  showModal() {
    let isActive = this.state.modal;
    this.setState({ modal: !isActive })
  }

  render() {
    return (
      <div>
        <div className={this.state.modal ? "flex flex-column flex-auto h-100 w-100 blur" : "flex flex-column flex-auto h-100 w-100"}>


          <div className="flex flex-column flex-auto h-100 w-100 f2 fw7 sans-serif bb b--black-05 -bg-black-40 bg-a bg-center bg-cover">


            <div className="flex flex-column bg-black-60 pb5">
              <section id="Top" className="flex flex-row flex-auto h-100 w-100 f2 fw7 sans-serif- varela  white ph2">
                <div className="flex flex-row mw8 center w-100 ph5 justify-between">
                  <div className="logo flex flex-column items-center justify-center h-100 f6 fw7 white =black-90 pv3">Africa Zoo Lodge</div>

                  <div className="flex flex-row pb4 white">
                    <div className="menu-item flex flex-column items-center justify-center h-100 f7 fw3 -black-90 ph3 pv3">Home</div>

                    <div className="menu-item flex flex-column items-center justify-center h-100 f7 fw3 -black-90 ph3 pv3">Rooms</div>

                    <div className="menu-item flex flex-column items-center justify-center h-100 f7 fw3 -black-90 ph3 pv3">Contact</div>

                    <div className="menu-item flex flex-column items-center justify-center h-100 f7 fw3 -black-90 ph3 pv3">Specials</div>
                  </div>
                </div>
              </section>
              <div className="flex flex-column mw8 center pt6">

                <Hello name={this.state.name} />
                <h3 className="f3 ts-a fw1 white roboto">
                  Accommodation from R175 per night.
        </h3>
                <Form />
              </div>
            </div>




          </div>
          <div className="flex flex-crgbargbargbaolumn flex-auto h-100 w-100 ph4 pv3 roboto- varela">
            <div className="flex flex-row mw8 center ph5">
              <div className="flex flex-column w-100 pv4">
                <h4 className="eczar- roboto- varela f6 fw7 ttu ma0 pt3 yellow">Accommodation</h4>
                <p className="f4 fw1 black-80 varela ">
                  Comfortable dorm rooms, single rooms and doube rooms in the heart of <b>Rosebank, Johnnesburg</b>.
        </p>
              </div>

            </div>

          </div>

          <section id="footer" className="flex flex-row bg-black-90 w-100 h5">
            <div className="flex flex-column mw8 center w-100 pv4 ph5">
              <h4 className="eczar- varela -roboto f6 fw7 ttu ma0 pt4 yellow">Activities</h4>
              <p className="f4 fw1 white -black-80 varela">
                Satisfy you curiosity through a selection of tours in and around Johannesburg.
        </p>
              <p className="f4 black-90 varela">
                <div className="flex flex-row flex-auto h-100 w-100 f2 fw7 -sans-serif ph2-">

                  <div className="menu-item flex flex-column items-center justify-end h-100 f6 fw7 yellow -black-80 mr3 pv2  bb- b--yellow bw1-- ">Dining ⠕</div>

                  <div className="menu-item flex flex-column items-center justify-end h-100 f6 fw7 yellow -black-80 pr3 pv2">Township Tours</div>

                  <div className="menu-item flex flex-column items-center justify-end h-100 f6 fw7 yellow -black-80 pr3 pv2">Museums</div>


                  <div className="menu-item flex flex-column items-center justify-end h-100 f6 fw7 yellow -black-80 pr2 pv2">Art & Entertainment</div>
                </div>
              </p>
            </div>
          </section>
          <section id="footer" className="flex flex-row pa4 bg-yellow w-100 h5"></section>
          <button onClick={this.showModal}>Show Modal</button>

        </div>
        <Modal showModal={this.showModal} active={this.state.modal} />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
