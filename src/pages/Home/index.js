import React from 'react'; 
import "./style.css";

// import { Button } from 'primereact/button';
        

const Home = () => {
  return (
    <div   > 
    <section class="home" id="home">
      <div class="home-content">
      {/* <Button label="Submit" /> */}

      <h3>Welcome to,</h3>
      <h1>Incubation Center</h1>
      <h3>of NIT Patna.</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias obcaecati repudiandae quod reprehenderit ab
        quam error aspernatur, facere at ipsa, harum odit eos officiis excepturi aperiam, voluptates quaerat fugiat
        mollitia!</p>
      {/* <!-- <div class="social-media">
              <a href=""><i class='bx bxl-facebook'></i></a>
              <a href=""><i class='bx bxl-instagram-alt'></i></a>
              <a href=""><i class='bx bxl-linkedin'></i></a>
              <a href=""><i class='bx bxs-message-rounded-dots'></i></a>
          </div> --> */}
      <a href="#" class="btn">Incubate</a>
    </div>
    <div class="home-img">
      <div class="notice" >
        <div>
          <h1>NOTICE</h1>
          <hr></hr>
        </div>
        <div>
          <ul class="notice-content">
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias obcaecati repudiandae quod
              reprehenderit ab quam error aspernatur</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias obcaecati repudiandae quod
              reprehenderit ab quam error aspernatur </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias obcaecati repudiandae quod
              reprehenderit ab quam error aspernatur </li>
          </ul>
        </div>



      </div>
    </div>
    </section>
    </div>
  )
}

export default Home
