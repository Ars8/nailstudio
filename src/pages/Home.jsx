import React, { useState } from 'react';

import Button from '../shared/components/FormElements/Button';
import Modal from '../shared/components/UIElements/Modal';
import Input from '../shared/components/FormElements/Input';
import './Home.css';

const Home = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
         <form className="place-form">
           <Input element="input" type="text" lable="Title"/>
         </form>
        </div>
      </Modal>
      <li className="place-item">
      <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
      </li>
    </React.Fragment>
  );
};

export default Home;
