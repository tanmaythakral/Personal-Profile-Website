import React from 'react';

function Footer() {
    var date = new Date();
    var currentDate = date.getFullYear();

    return <p>
        Copyright &copy;  {currentDate}
    </p>
}

export default Footer;