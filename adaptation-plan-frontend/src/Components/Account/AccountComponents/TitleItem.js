import React from 'react';
import { Link } from 'react-router-dom'
import '../AccountStyles/TitleItem.css';

function TitleItem(props) {
    return (
      <Link to={`/${props.state.path}`} className='titleItem' onClick={() => props.updateState(props.state.id)}>
        {props.state.name}
        {(window.location.pathname === `/${props.state.path}`) && <div className='line'/>}
      </Link>)
}

export default TitleItem;
