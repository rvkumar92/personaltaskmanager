import React, {Component} from 'react';

class Header extends Component{
    render(){
        return (
         <nav className="navbar navbar-default">
            <div className="container-fluid">
                <h3 className="text-center">Personal Task Manager</h3>
            </div>
        </nav>   
        )
    }
}
export default Header;