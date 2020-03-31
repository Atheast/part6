import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../reducers/filterReducer';

const Filter = (props) => {
    return(
        <div className="filter">
            <p>Filter: </p>
            <input onChange={({target}) => props.setFilter(target.value)}></input>
        </div>
    )
}

const mapDispatchToProps = {
    setFilter
}

export default connect(
    null,
    mapDispatchToProps
  )(Filter)