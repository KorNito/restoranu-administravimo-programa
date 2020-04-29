import React, { Component } from 'react'

export class discountApplicator extends Component {
    render() {
        return (
            <div>
                  <div className="discount-applicator">
          <h2 id="chang_dis">Change price:</h2>
          <input id="discountAmount" type="text" placeholder=" New price"/>
          <button id="submitDiscountButton" type="submit" value="submit" onClick={()=>{ alert('Discount was applied'); }}>Submit</button>
        </div>
      
            </div>
        )
    }
}

export default discountApplicator
