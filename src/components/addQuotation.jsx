export const AddQuotation = () => {
    return (
      <>
        <form style={{width: "70%", height: "100%", marginTop: "30px"}}>
        <div class="form-group">
        <label style={{color: "black", fontSize:"30px"}}>Add Quotation</label>
        <br/><br/><br/><br/>
        </div>
          <div class="form-group">
            <label style={{color: "black"}}>Product Id</label>
            <input
              type="text"
              class="form-control"
              id="pname"
              placeholder="Product Id"
            />
            
            <label style={{color: "black", marginBottom: 0}} for="category">Category</label>
          <select class="form-control" id="category">
          <option>Metal</option>
          <option>Steel</option>
          <option>Brass</option>
          <option>Copper</option>
          <option>Iron</option>
          </select>

          <label style={{color: "black", marginBottom: 0}} for="category">Quotation Status</label>
          <select class="form-control" id="category">
          <option>Pending</option>
          <option>confirmed</option>
          </select>
          
          <label style={{color: "black"}}>Quanitity Required</label>
            <input
              type="text"
              class="form-control"
              id="required"
              placeholder="Quantity"
            />
            <label style={{color: "black"}}>Expected Time of Arrival</label>
            <input
              type="number"
              class="form-control"
              id="availibility"
              placeholder="Expected Arrival"
            />
            <label style={{color: "black"}}>Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="Price per unit"
            />
            <br/>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          </div>
        </form>
      </>
    );
  };
  