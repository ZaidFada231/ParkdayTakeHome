import React, { useState, useEffect } from 'react';
import {Navigate} from 'react-router-dom'

function DelayedButton() {
  const [showButton, setShowButton] = useState(false);
  const [goToCSV, setGoToCSV] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 28000); //28000
  }, []);

  if(goToCSV){
    return <Navigate to="/csv"/>;
  }

  return (
    <div>
      {showButton && <button id = "101" class="button-52" onClick ={() => {setGoToCSV(true)}}>Lets Go</button>}
    </div>
  );

}

export default DelayedButton;
