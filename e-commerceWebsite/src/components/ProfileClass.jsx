import React from "react";
class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0
        }
        console.log("ctr is called");

    }

    //for api call in class based component
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Priyaacharjee");
        const resdata = await data.json();
        this.setState({
            userDetails: resdata
        })
        console.log("component did mount is called");
        // this.timer = setInterval(() => {
        //     console.log("priya mern");

        // }, 1000);

    }

    componentDidupdate(prevProps,prevState) {
        if(this.state.count!==prevState.count){
            console.log("called");
            
        }
        console.log("did update");

    }

    componentWillUnmount() {
        console.log("Will unmount");
        clearInterval(this.timer);
    }


    render() {
        return (
            <div className="border border-zinc-700">
                <h1>Profile ClassBased</h1>
                <h3>Name:{this.props.name}</h3>
                <h3>Address:{this.props.address}</h3>
                <h3>Email:{this.props.email}</h3>
                <h3>Count:{this.state.count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    })
                }}>Increment</button>

                {this.state.userDetails && (
                    <>
                        <h3>GitHub Name: {this.state.userDetails.name}</h3>
                        <img src={this.state.userDetails.avatar_url} alt="GitHub Avatar" className="w-20 h-20 rounded-full" />
                    </>
                )}

            </div>
        )

    }
};
export default ProfileClass

const User1 = new ProfileClass();