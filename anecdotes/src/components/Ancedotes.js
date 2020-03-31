import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {vote, initA} from '../reducers/ancedoteReducer';
import {setNotification} from '../reducers/notificationReducer';

const AncedotesList = (props) => {
    useEffect(() => {
        props.initA();
    },[props])

    const addVote = (ancedote) => {
        props.vote(ancedote.id);
        props.setNotification(`You voted - "${ancedote.content}"`,5);
    }

    return(
        <div className="ancedotes">
            {props.ancedotes.filter(x => x.content.includes(props.filter)).map(x => <Ancedote key={x.id} ancedote={x} vote={addVote}/>)}
        </div>
    );
};

const Ancedote = ({ancedote,vote}) => (
    <div className="ancedote">
        <p>{ancedote.content}</p>
        <p>Votes: {ancedote.votes}</p>
        <button onClick={() => vote(ancedote)}>Vote</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
      ancedotes: state.ancedotes.sort((a,b) => b.votes - a.votes),
      filter: state.filter
    }
}
  
  const mapDispatchToProps = {
    vote,
    setNotification,
    initA
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AncedotesList)