export  function Header(){
    
    return(
        <header>
            <nav className="d-flex justify-content-between">
                <div className="ms-4 mt-5 text-white">
                    <p>Netlinkz</p>
                    <h5><i>Neuro</i></h5>
                </div>
                <div className="me-4 mt-5">
    
    <select class="form-select" id="languageSelect">
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
      
    </select>
  </div>

                </nav>
        </header>
       
        

    )
}