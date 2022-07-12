
function Login() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
        <a className="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/1200px-PBS_Kids_Logo.svg.png" alt="Logo" class="img-fluid" /></a>
        <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
            </ul>
            <div className="d-flex">
                <button className="btn btn-light ms-3">Login</button>
            </div>
        </div>
    </div>
</nav>

  )
}

export default Login