export const AddRequirement = () => {
    return (
      <>
        <form style={{width: "70%", height: "max-content"}}>
        <div class="form-group">
        <label style={{color: "black", fontSize:"30px"}}>Create Requirement</label>
        <br/><br/><br/><br/>
        </div>
          <div class="form-group">
            <label style={{color: "black"}}>Product Name</label>
            <input
              type="text"
              class="form-control"
              id="pname"
              placeholder="Product Name"
            />
            <label style={{color: "black", marginBottom: 0}} for="category">Category</label>
          <select class="form-control" id="category">
          <option>Metal</option>
          <option>Steel</option>
          <option>Brass</option>
          <option>Copper</option>
          <option>Iron</option>
          </select>
          <label style={{color: "black"}}>Quanitity Required</label>
            <input
              type="text"
              class="form-control"
              id="required"
              placeholder="Quantity"
            />
            <br/><br/><br/>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          </div>
        </form>
      </>
    );
  };
  