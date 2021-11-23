import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Header({businessName }) {
     
    return (
        <>
            <div className="jumbotron">
                <h1>{businessName}</h1>
                <NavWrap>
                    <Link to="/cars/new" className="btn btn-primary btn-lg">Add New Car</Link>
                    <Link to="/cars" className="btn btn-primary btn-lg">Car Inventory</Link>
                </NavWrap>
            </div>
        </>
    );
}

const NavWrap = styled.ul`
 display: flex;
 justify-content: end;
 & a {
    margin-right: 25px;
 }

`

export default Header;
