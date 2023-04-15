export const AddInvoice = () => {
  return (
    <>
      <form style={{ width: "70%", height: "90%", marginTop: "30px" }}>
        <div class="form-group">
          <label style={{ color: "black", fontSize: "30px" }}>
            Add Invoice
          </label>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div class="form-group">
          <label style={{ color: "black" }}>Order Id</label>
          <input
            type="number"
            class="form-control"
            id="pname"
            placeholder="Order Id"
          />

          <label style={{ color: "black", marginBottom: 0 }} for="category">
            Date of Payment
          </label>
          <input
            type="text"
            class="form-control"
            id="pname"
            placeholder="Order Id"
          />

          <label style={{ color: "black", marginBottom: 0 }} for="category">
            Mode of Payment
          </label>
          <select class="form-control" id="category">
            <option>Cash</option>
            <option>Cheque</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
          </select>

          <label style={{ color: "black", marginBottom: 0 }} for="category">
            Amount Due
          </label>
          <input
            type="number"
            class="form-control"
            id="pname"
            placeholder="Order Id"
          />

          <label style={{ color: "black", marginBottom: 0 }} for="category">
            Amount Paid
          </label>
          <input
            type="number"
            class="form-control"
            id="pname"
            placeholder="Order Id"
          />
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
