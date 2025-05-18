import { Link } from 'react-router-dom';
import React from 'react';
function Homepage() {
    return (
      <>
        <div>
          <h1>Mike Neil's Construction Pricing</h1>
        </div>
  
        <div>
          <Link to="./updatePricing">
            <button>Update Pricing</button>
          </Link>
          <button>Start a quote</button>
        </div>
      </>
    );
  }
  
  export default Homepage;