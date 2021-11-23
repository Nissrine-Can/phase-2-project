import React  from 'react';
import styled from 'styled-components';

function Filter ({ enthusiastTypes, handleFilteredCars }) {
    
    return (
        <DivWrap>
            <h3>Which type of enthusiast guy you are?</h3>
            <div class="btn-group" role="group" aria-label="...">
                {enthusiastTypes.map(enthusiastType => <button type="button" class="btn btn-default" onClick={(e)=> handleFilteredCars(e.target.id)} key={enthusiastType} id={enthusiastType}>{enthusiastType}</button>)}
            </div>
        </DivWrap>
    )
}

const DivWrap = styled.ul`
margin: 50px;
& h3 {
    margin-bottom: 30px;
}

`
export default Filter;