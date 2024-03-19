import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';

function CallAPI()
{
    const [apidata,setApiData] = useState([])

    
    useEffect(()=>{

        fetch("https://fakestoreapi.com/products").then((result) =>{
            // console.log(result)
            result.json().then((data)=>{
                setApiData(data)
                // console.log(data)
            })
           
        })

    },[])

    console.log(apidata)
    
    return(
        <div> 
            {/* <h1> CallAPI</h1> */}

            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                       
                        <td> Name</td>
                        <td> Description</td>
                        <td> Price</td>
                        <td> Category</td>
                        <td> Image</td>
                        <td> Rating</td>
                        <td> Count</td>

                     
                    </tr>
                    {
                        apidata.map((item) => 
                        <tr>
                           
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.price*80}</td>
                            <td>{item.category}</td>
                            <td> <img src={item.image} style = {{width : "100px" ,height : "100px"}}/></td>
                            <td> {item.rating.rate}</td>
                            <td> {item.rating.count}</td>
                            
                        </tr>
                        )
                    }
                </tbody>

                </Table>
        </div>
    )
}

export default CallAPI