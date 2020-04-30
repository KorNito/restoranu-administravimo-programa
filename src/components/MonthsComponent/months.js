import React, { Component } from 'react'

import './months.css'

export class months extends Component {
    render() {
        return (
            <div>
                <div className="months">
          <h3 id="months_title">Months</h3>
          <ul>
            <li><a href=''>January</a></li>
            <li><a href=''>February</a></li>
            <li><a href=''>March</a></li>
            <li><a href=''>April</a></li>
            <li><a href=''>May</a></li>
            <li><a href=''>June</a></li>
            <li><a href=''>July</a></li>
            <li><a href=''>August</a></li>
            <li><a href=''>September</a></li>
            <li><a href=''>October</a></li>
            <li><a href=''>November</a></li>
            <li><a href=''>December</a></li>
          </ul>
        </div>
            </div>
        )
    }
}

export default months
