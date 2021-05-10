import React from 'react';

function Footer() {
    var date = new Date();
    var currentDate = date.getFullYear();

    return <p>
        <span class= "footer">Copyright &copy;  {currentDate}</span>
    </p>
}

export default Footer;