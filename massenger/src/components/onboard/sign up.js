import React  from 'react'
  
class x extends React.Component{
    render(){
        return(
        <div className='container'>
            <div className='wraper'>
          <img className='logo' alt="" src={Logo} />
          <input type="password"
          placeholder="Email"
           />
          <input 
          placeholder="Password"/>
          <button>login</button>
        </div>
      </div>

        )
    }
}