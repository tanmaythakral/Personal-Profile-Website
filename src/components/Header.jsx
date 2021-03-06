import React from 'react';

function Header() {
    return     <nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="https://linkedin.com/in/tanmay-thakral-224005208"><i class="fab fa-linkedin fa-3x"></i></a></li>
                <li><a href="https://github.com/tanmaythakral"><i class="fab fa-github fa-3x"></i></a></li>
            </ul>
        </div>
    </div>
</nav>
}

export default Header;