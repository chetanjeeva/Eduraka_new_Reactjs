import React,{Component} from 'react';

const url = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'Vishali',
            email:'vishali@gmail.com',
            password:'12345678',
            phone:'9876543210'
        }
    }

    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }

    handleCheckOut =()=>{
        console.log(this.state)
        fetch(url,{
            method: 'POST',
            headers:{
                'accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
           <div className="container">
               <div className="panel panel-primary">
                   <div className="panel-heading">
                       <h3>Register</h3>
                   </div>
                   <div className="panel-body">
                       <div className='row'>
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input className="form-control" name="name"
                                    value={this.state.name} onChange={this.handleChange}/>
                            </div>
                           <div className="form-group col-md-6">
                               <label>Email</label>
                               <input className="form-control" name="email"
                               value={this.state.email} onChange={this.handleChange}/>
                           </div>
                           <div className="form-group col-md-6">
                               <label>Password</label>
                               <input className="form-control" name="password" type="password"
                               value={this.state.password} onChange={this.handleChange}/>
                           </div>
                           <div className="form-group col-md-6">
                               <label>Phone</label>
                               <input className="form-control" name="phone"
                                value={this.state.phone} onChange={this.handleChange}/>
                           </div>
                       </div>
                       <button className="btn btn-success" onClick={this.handleCheckOut}>Register</button>

                   </div>
               </div>
               
            </div>
        )
    }
}

export default Register 