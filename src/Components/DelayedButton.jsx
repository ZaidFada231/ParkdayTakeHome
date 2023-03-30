import React, { useState, useEffect } from 'react';

function DelayedButton() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 28000);
  }, []);

  return (
    <div>
      {showButton && <button class="button-52" onClick={event =>  window.location.href='/csvParser'}>Delayed Button</button>}
    </div>
  );

}

export default DelayedButton;
