import React from 'react'

const page = () => {
  return (
    <>
      <div className="container text-center main">
  <div className="row column-1">
    <div className="col">
      Column 1
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
  </div>
  <button className='btn btn-danger'>hello</button>
  <button type="button" class="btn btn-primary">Primary</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default page
