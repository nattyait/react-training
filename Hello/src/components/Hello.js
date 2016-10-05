import React from 'react'

class Hello extends React.Component{
  constructor(props){
    super(props)
    //มา bind ตรงนี้ คือ bind ทีเดียว ไม่สร้างใหม่ performance ดีกว่า
    this.onTextChange = this.onTextChange.bind(this)
    this.state = {
      name: "..."
    }
  }

  onTextChange(event){
    //console.log(event.target.value)
    //this.state.name <= เรียกแบบนี้ไม่ได้เพราะมันโดนเรียกครั้งเดียว ยกเว้นต้อง render อีกรอบ
    this.setState({
      name: event.target.value
    })
  }

  render() {
    const { name } = this.state
    return (
      <div>
          <h1>hello, {this.state.name} </h1>
          <input type="text" onChange={this.onTextChange}
            //bind(this) this นี่จะเป็นของ function onTextChange สามารถทำแบบ bind(a:blabla) ได้ ก็จะเรียนก a ได้
            //ถ้า bind ตรงนี้ เวลา rerender มันจะสร้างใหม่เสมอ
          />
      </div>
    )
  }
}

export default Hello
