import React, { useState, useEffect } from 'react';
import {Navigate} from 'react-router-dom';

function DelayedButton() {
  const [showButton, setShowButton] = useState(false);
  const [goToCSV, setGoToCSV] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 28000); //28000
  }, []);
  if(goToCSV){
    let button = document.getElementsByClassName("button-52")[0]; //grab button by using getElementsByClassName
    const ourPath = "/csv/";
    const ourButtonID = button.id;
    const finalPath = ourPath + ourButtonID; //building our path by adding csv and the button id
    return <Navigate to={finalPath}/>;
  }

  return (
    <div>
      {showButton && <button id = "101" class="button-52" onClick ={() =>
        {setGoToCSV(true);}
      }>Lets Go</button>}
    </div>
  );

}

export default DelayedButton;
