function Intro()
{ 
    return <>
    <div className="outline">
    <h1 className="Heading">About Yourself</h1>
    <form class="row g-3 form">
    <div class="col-md-6">
    <label for="Username" class="form-label">Username</label>
    <input type="text" class="form-control" id="Username"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Lastname</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Date of Birth</label>
    <input type="date" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" placeholder="@example.com" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">age</label>
    <input type="number" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-6">
    <label for="Curriculum Activities" class="form-label">Extra Curriculum Activities</label>
    <input type="text" class="form-control" id="Curriculum Activities"/>
  </div>
  <div class="col-md-6">
    <label for="Skills" class="form-label">Skills</label>
    <input type="text" class="form-control" id="Skills"/>
  </div>
  <div class="col-md-6">
    <label for="Skills" class="form-label">Dominant Language</label>
    <input type="text" class="form-control" id="Skills"/>
  </div>
  <div class="col-md-6">
    <label for="Edu" class="form-label">Education</label>
    <input type="text" class="form-control" id="Edu"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Create Resume</button>
  </div>
</form>
</div>
    </>
}
export default Intro;