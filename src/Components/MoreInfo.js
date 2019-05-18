import React from 'react';

class MoreInfo extends React.Component{
  render(){
    const {item} = this.props;
    return(
      <p className="house__coat">{item.coatOfArms}</p>
    );
  }
}
export default MoreInfo;