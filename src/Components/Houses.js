import React from 'react';
import MoreInfo from './MoreInfo';
import {Link} from 'react-router-dom';

class Houses extends React.Component{
  render(){
    const {houses} =this.props;
    return(
      <ul className="pannel">
      {houses.map(item =>{
        return(
        <li className="houses" key={item.id}>
          <div className="house__card">
            <Link to={`/detail/${item.id}`}>
              <h2 className="house__title">{item.name}</h2>
            </Link>
            <img className="house__img" 
            src={item.shield} 
            alt={item.name}/>
            <h3 className="house__from">From: {item.region}</h3>
            <MoreInfo item={item}/>
          </div>
        </li>
        )}
        )}
    </ul>
    );
  }
}

export default Houses;
