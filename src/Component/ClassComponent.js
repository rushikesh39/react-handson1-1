import React,{Component} from "react";

export class MyClassComponent extends Component{
    render(){
        return(
            <div className="item2 item">
             <h1>This is Created Using Class Component</h1>
             <p>This is done using external CSS</p>
             <p className="para">This is Done using inline CSS</p>
            </div>
        );
       
    }
}
export default MyClassComponent;