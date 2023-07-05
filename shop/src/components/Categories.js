import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Wszystko'
                },
                {
                    key: 'biezni',
                    name: 'Bieżni'
                },
                {
                    key: 'hantle',
                    name: 'Hantle'
                },
                {
                    key: 'sztangi',
                    name: 'Sztangi'
                },
                {
                    key: 'lawki',
                    name: 'Ławki'
                },
                {
                    key: 'jedzenie',
                    name: 'Jedzenie'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories