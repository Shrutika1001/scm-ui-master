export const AddProduct = () => {
  return (
    <>
      <form style={{width: "70%", height: "100%", marginTop: "30px"}}>
      <div class="form-group">
      <label style={{color: "black", fontSize:"30px"}}>Add Product</label>
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
          <label style={{color: "black"}}>Supplier</label>
          <input
            type="text"
            class="form-control"
            id="pname"
            placeholder="Supplier"
          />
          <label style={{color: "black", marginBottom: 0}} for="category">Category</label>
        <select class="form-control" id="category">
        <option>primary aluminium</option>
         <option>Chemical</option>
         <option>Anthracite</option>
         <option>Bituminous</option>
         <option>Pitch</option>
         <option>Honeycomb coke</option>
         <option>Metal</option>
        </select>
        <label style={{color: "black"}}>Quanitity Required</label>
          <input
            type="text"
            class="form-control"
            id="required"
            placeholder="Supplier"
          />
          <label style={{color: "black"}}>Availibility</label>
          <input
            type="number"
            class="form-control"
            id="availibility"
            placeholder="Supplier"
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
