import React from 'react'

import NewModal from './NewModal';
import AcceptedModal from './AcceptedModal';
import PitchedModal from './PitchedModal';


const ModalConductor = props => {
  switch (props.status) {
    case 'new':
      return <NewModal {...props}/>;

    case 'accepted':
    	return <AcceptedModal {...props}/>

    case 'pitched':
    	return <PitchedModal {...props}/>
    	

    default:
      return null;
  }
};

export default ModalConductor;