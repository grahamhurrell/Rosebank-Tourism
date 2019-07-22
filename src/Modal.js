import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Modal extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillAppear()
  componentDidAppear()
  componentWillEnter()

  render() {
    return (
    this.props.active ? 
      <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        <div>
          <section id="Modal-backdrop" className="top-0 left-0 fixed w- w-100 h-100 bg-black-90" >
            <span onClick={this.props.showModal} className="f4 fw7 yellow absoute right-0 top-0 pa4 w-100 sans-serif">close</span>
            <section id="Modal" className="top-0 left-0 pv4 relative flex flex-column items-center justify-center mw7 center w-100">

              <div className="flex flex-column w-100 justify-between">
                <h3 className="f2 yellow varela ma0">Thank you for your interest</h3>
                <h5 className="f5 fw3 white roboto mt3">Searching for <b>2 people</b> for <b>2 nights</b> in <b>Double En-Suites</b></h5>
              </div>

              <div className="flex flex-row w-100">

                <div className="flex flex-row w-100 justify-between ">

                  <div className="item flex flex-auto- flex-column w-30">
                    <div className="item flex flex-auto- flex-column w-100">
                      <div className="db relative bg-near-white w4- w-100 h4 br2"></div>
                    </div>
                    <div className="item flex flex-auto flex-column w-100">
                      <h5 className="f5 fw3 white roboto mt3 mb2">Leopard</h5>
                      <div className="item flex flex-auto- flex-row justify-between w-100">
                        <h5 className="f7 fw7 white roboto mt0">Double En-Suite</h5>
                        <h5 className="f7 fw7 yellow roboto mt0">available</h5>
                      </div>
                    </div>
                  
                  </div>

                </div>

                <div className="flex flex-column w-50 justify-end items-end ">
                <button className="f5 fw7 bg-transparent yellow -black-50 roboto mt3 mb0 bn br1 ph3 pv2">Add to booking +</button>
                  <h5 className="f1_ fw7 white roboto mt2 mb2">R970.00</h5>
                </div>

              </div>

              <div className="flex flex-column w-100 items-start justify-start pt4">
                <h3 className="f5 yellow varela mt0 mb3">Related Offers</h3>

              </div>

              <div className="flex flex-row w-100">
              <div className="item flex flex-auto- flex-row w-100">
                <div className="item flex flex-auto- flex-column w-30 pr3 ">
                  <div className="db relative bg-near-white w3- h3 br2"></div>
                </div>
                <div className="item flex flex-auto flex-column w-70">
                  <h5 className="f5 fw3 white roboto mt0 mb2">Kyalami Race Track Visit</h5>
                  <div className="item flex flex-auto- flex-row justify-between w-100">

                    <h5 className="f7 fw7 yellow roboto mt0">Subheading</h5>
                  </div>
                </div>
              </div>

              <div className="item flex flex-auto- flex-row w-100">
                <div className="item flex flex-auto- flex-column w-30 pr3 ">
                  <div className="db relative bg-near-white w3- h3 br2"></div>
                </div>
                <div className="item flex flex-auto flex-column w-70">
                  <h5 className="f5 fw3 white roboto mt0 mb2">Museum Visit</h5>
                  <div className="item flex flex-auto- flex-row justify-between w-100">

                    <h5 className="f7 fw7 yellow roboto mt0">Subheading</h5>
                  </div>
                </div>
              </div>

</div>


              <div className=""></div>
            </section>
          </section>
        </div>

      </ReactCSSTransitionGroup>
      : null
      


    )
  }

}
export default Modal;