
function Create({registerFruits, error, handleChange}) {


  return (
    <div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Fruit Name</label>
          <input  type="text" class="form-control" id="exampleInputEmail1" name="name"
           aria-describedby="emailHelp" 
           onChange={(e)=>{handleChange(e)}}/>
          {
                Object.values(error).length > 0 &&
                <div id="emailHelp" class="form-text">  {error.name}</div>
            }
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
          onChange={(e)=>{handleChange(e)}} />
          {
                Object.values(error).length > 0 &&
                <div id="emailHelp" class="form-text">  {error.name}</div>
            }
        </div>
        <button type="submit" class="btn btn-primary" onClick={()=>{registerFruits()}}>Submit</button>
    
    </div>
  )
}
export default Create