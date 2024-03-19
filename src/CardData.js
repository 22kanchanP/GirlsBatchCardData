import { useEffect } from "react"
import { useState } from "react"

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';


function CardData()
{
    const [apidata, setApiData] = useState([])

    const [status,setStatus] = useState(true)
    const [pid,setId] =useState()

    function hello(id)
    {
      setStatus(false)
      setId(id)
    }

    //how to useonclick on click of button in react//

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result) => {
        result.json().then((data) => {

            setApiData(data)
            
        })
    })
    } , []) //Hooks concept : sirf loading time pe ya mount state pe chle , upload state pe naa chle.

    return(
        <div> 
          {

          status   ?    
          
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            {
                apidata.map((item) => 

                    <MDBCol>
                    <MDBCard>
                     <center> <MDBCardImage
                        src= {item.image}
                        alt='...'
                        position='top' style ={{width : "100px" , height : "100px"}}
                      /></center>
                      <MDBCardBody>
                      <MDBCardTitle>{item.id}</MDBCardTitle>
                        <MDBCardTitle>{item.title}</MDBCardTitle>
                        <MDBCardText> {item.description.slice(0,200)}</MDBCardText>
                        <MDBCardText style = {{color : "red"}} >Rate :  {item.price*80} Rs</MDBCardText>
                      


                      <center><MDBBtn onClick={() => hello(item.id)} > View Details </MDBBtn></center>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                )
            } 
     
      
    </MDBRow>    :   

        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
            apidata.map((item) => 
            item.id == pid  ?

                <MDBCol >
                <MDBCard>
                <center> <MDBCardImage
                    src= {item.image}
                    alt='...'
                    position='top' style ={{width : "100px" , height : "100px" }}
                  /></center>
                  <MDBCardBody>
                  <MDBCardTitle>{item.id}</MDBCardTitle>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <MDBCardText> {item.description}</MDBCardText>
                    <MDBCardText style = {{color : "red"}} >Rate :  {item.price*80} Rs</MDBCardText>
                  <MDBCardText style = {{color : "blue"}} > Category : {item.category}</MDBCardText>
                  <MDBCardText style = {{color : "green"}} > Rating : {item.rating.rate}</MDBCardText>
                  <MDBCardText style = {{color : "orange"}} > Count : {item.rating.count}</MDBCardText>


                  <center><MDBBtn onClick={() => hello(item.id)} > Buy Now</MDBBtn></center>

                  <center > <MDBBtn onClick={() => setStatus(true)} > Back </MDBBtn></center>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>      : null
            )
        } 


        </MDBRow>    

      }
        </div>
    )
}

export default  CardData