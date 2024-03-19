function Input()
{
   let name =  document.getElementById("abc") 

  console.log(name)
//    document.getElementById("lb").innerHTML(name)

    
    return(
        <div>
            <h1> Input</h1>

            <input type = "text" placeholder = "Enter Name" id = "abc" /> <br></br>

            <label id = "lb" > </label>

            
        </div>
    )
}

export default Input