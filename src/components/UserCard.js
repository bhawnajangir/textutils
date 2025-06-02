import React from 'react';
import PropTypes from  'prop-types'

export default function UserCard(props){
return(
    <>
<h1 placeholder='student name'>{props.name}</h1> 
<h1 placeholder='student name'>{props.age}</h1> 
<h1 placeholder='student name'>{props.isOnline}</h1> 
    </>
)
}

UserCard.propTypes={
                    name: PropTypes.string.isRequired,
                    age:PropTypes.number.isRequired,
                    isOnline:PropTypes.bool.isRequired,
}


