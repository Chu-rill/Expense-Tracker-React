import React from "react";

function AddTransaction() {
  return (
    <>
      <h3>Add New Transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
      </form>
    </>
  );
}

export default AddTransaction;
