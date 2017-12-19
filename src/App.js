import React from 'react'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    const _this = this
    setInterval(() => {
      _this.setState(prevState => {
        let { count } = prevState
        count++
        return { count }
      })
    }, 1000)
  }

  render () {
    return (
      <div>
        <p>app</p>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
