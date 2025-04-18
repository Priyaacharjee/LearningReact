import React from "react";
class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count: 0,
            count2:0
        }
    }
    render() {
        return (
            <div className="border border-zinc-700">
                <h1>Profile ClassBased</h1>
                <h3>Name:{this.props.name}</h3>
                <h3>Address:{this.props.address}</h3>
                <h3>Email:{this.props.email}</h3>
                <h3>Count:{this.state.count}</h3>
                <button onClick={()=>{
                   this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+1
                }) 
                }}>Increment</button>
            </div>
        )

    }
};
export default ProfileClass

const User1=new ProfileClass();