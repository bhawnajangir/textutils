import React from 'react';
import PropTypes  from 'prop-types';

export default function St(props){
    return(
        <>
        <h1>{props.stname}</h1>
        <h1>{props.stroll}</h1>
        <h1>{props.stper}</h1>
        </>
    );
}

St.propTypes={stname:PropTypes.string.isRequired,
              stroll:PropTypes.number.isRequired,
              stper:PropTypes.number.isRequired,
}

St.defaultProps={
                stname:'bhawna',
                stroll:105,
                stper:89

}


