import React from 'react';
import MoreInfo from './MoreInfo';

class Houses extends React.Component{
  render(){
    const {item} =this.props;
    return(
    <div className="house__card">
      <h2 className="house__title">{item.name}</h2>
      <img className="house__img" 
        src={item.shield} 
        alt={item.name}/>
      <h3 className="house__from">From: {item.region}</h3>
      <MoreInfo item={item}/>
    </div>
    );
  }
}

export default Houses;