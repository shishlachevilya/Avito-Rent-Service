import React from 'react';
import {RentServiceConsumer} from '../RentServiceContext';

const WithRentService = () => (Wrapped) => {
  return (props) => {
    return (
      <RentServiceConsumer>
        {
          (rentService) => {
            return(
              <Wrapped {...props} rentService={rentService}/>
            )
          }
        }
      </RentServiceConsumer>
    )
  }
};

export default WithRentService;
