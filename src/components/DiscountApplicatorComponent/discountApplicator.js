import React, { Component } from 'react'

import './discountApplicator.css';

export class discountApplicator extends Component {
    render() {
        return (
            <div className="discount-applicator">
                <h2 id="discount-applicator-title">Change price:</h2>
                <form>
                    <input id="discount-amount" type="text" placeholder=" New price"/>
                    <button id="submitDiscountButton" type="submit" value="submit" onClick={()=>{ alert('Discount was applied'); }}>Submit</button>
                </form>
            </div>  
        )
    }
}

export default discountApplicator
