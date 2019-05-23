import React from 'react';

// const casitas = data.map(item =>{
//   return(
//   <li className="houses" key={item.id}>
//     <div className="house__card">
//       <h2 className="house__title">{item.name}</h2>
//       <img className="house__img" 
//       src={item.shield} 
//       alt={item.name}/>
//       <h3 className="house__from">From: {item.region}</h3>
//     </div>
//   </li>
//   )}
//   );

class Detail extends React.Component{
   render(){
     const {houses} =this.props;
     const casaid = this.props.parametros.match.params.child;

     const aldea = houses.find(obj => obj.id === casaid);
     console.log(casaid);

     return(
       
       <p>{aldea.description}</p>
     );
   }
}

export default Detail;