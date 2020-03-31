import React from 'react';
import {connect} from 'react-redux';
import {add} from '../reducers/ancedoteReducer';

const AncedotesForm = (props) => {
    const addAncedote = (e) => {
        e.preventDefault();
        props.add(e.target.ancedote.value);
        e.target.ancedote.value = '';
    };

    return(
        <div>
            <h2>Create New</h2>
            <form onSubmit={(e) => addAncedote(e)}>
                <input name="ancedote"/>
                <button>Add Ancedote</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    add
}

export default connect(
    null,
    mapDispatchToProps
  )(AncedotesForm)