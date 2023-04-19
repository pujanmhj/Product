import Form from "react-bootstrap/Form";
function Create({registerFruits, error, handleChange, update, fruits}){
    return (
         <>
             {
                 Object.values(error).length=== 0 &&
                     <span>{error.name}</span>
             }
             <Form.Group class="col-md-6" controlId="formGridEmail">
                <Form.Label>Fruit's Image</Form.Label>
                <Form.Control name="image"
                 type="text"
                 placeholder="Fruit Image"
                 value={
                     Object.values(update).length > 0 ?
                         update[0].image
                     :
                         fruits.image    
                 }
                 onChange={(e)=>{handleChange(e)}}
                  />
              </Form.Group>
 
              <Form.Group class="col-md-6" controlId="formGridEmail">
                <Form.Label>Fruit's Name</Form.Label>
                <Form.Control name="name"
                 type="text"
                 placeholder="Fruit Name"
                 value={
                     Object.values(update).length > 0 ?
                         update[0].name
                     :
                         fruits.name    
                 }
                 onChange={(e)=>{handleChange(e)}}
                  />
              </Form.Group>
 
             <br /> 
             <button onClick={(e)=>{registerFruits(e)}}>
                 {
                     Object.values(update).length > 0 ?
                         "Update"
                     :
                         "Register"
                 }
             </button>
         </>
     )   
 }
 
 export default Create;