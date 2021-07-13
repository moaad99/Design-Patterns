import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="all">
          <div className="logo">
            <img   src="https://madaef.ma/images/logo.png" alt="" />
<br /> <br />
            <h4>
              Madaëf est une société leader de l’investissement touristique au
              Maroc.{" "}
            </h4>
          </div>

          <div className="form">
            <div className="frm">
              <h2 style={{ textAlign: "center", marginBottom: "60px" }}>
                Login Form
              </h2>
              <form action="">
                <div class="form-outline mb-4">
                  <label
                    style={{ color: "black" }}
                    class="form-label"
                    for="form1Example1"
                  >
                    Email address
                  </label>
                  <input type="email" id="form1Example1" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                  <label
                    style={{ color: "black" }}
                    class="form-label"
                    for="form1Example2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="form1Example2"
                    class="form-control"
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    color: "white",
                    width: "350px",
                    backgroundColor: "#477626",
                  }}
                  className="btn  btn-block"
                >
                  Sign in
                </button>
                <br /> <br /> <br />
                <div
                  style={{ marginInline: "130px", width: "300px" }}
                  class="row mb-4"
                >
                  <div style={{ color: "black" }} class="col">
                    Forgot password?{" "}
                    <a style={{ color: "#477626" }} href="#!">
                      {" "}
                      click here
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
