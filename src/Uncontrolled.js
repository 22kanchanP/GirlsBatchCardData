const {Component, createRef} = require("react");

class Uncontrolled extends Component
{

    constructor()
    {
        super()
        this.inputref = createRef()

    }
     hello()
    {
            this.inputref.current.value = "Hello World"

            this.inputref.current.style.color = "red" ;
            this.inputref.current.style.backgroundColor = "green" ;
            console.log(this.inputref.current.value)
    }
    render()
    {
        return(
            <div> 
                {/* <h1> Uncontrolled Component . </h1> */}

                <input type = "text" placeholder = "Enter Name"  ref = {this.inputref}></input>
                <button onClick = {()=> this.hello()}> Submit </button>
            </div>
        )
    }
}

export default Uncontrolled