import React, { useEffect } from 'react';
import RentListItem from '../RentListItem';
import { connect } from 'react-redux';
import WithRentService from '../Hoc';
import { itemsLoaded } from '../../actions';
import { bindActionCreators } from 'redux';
import './rent-list.scss';
import Spinner from '../Spinner';

const RentList = ({ rentService, itemsLoaded, items, isLoading }) => {

  useEffect(() => {
    rentService.getAllItems().then((body) => itemsLoaded(body));
  }, [rentService, itemsLoaded, isLoading]);

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <ul className='rent-list'>
      {
        items.map((item) => {
          return (
            <li key={ item.id } className='rent-list__item'>
              <RentListItem item={ item }/>
            </li>
          )
        })
      }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    isLoading: state.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  // 1
  return bindActionCreators({ itemsLoaded }, dispatch);
  // 2
  // return {
  // itemsLoaded: (items) => {
  //   dispatch(itemsLoaded(items));
  // }
  // }
};

export default WithRentService()(connect(mapStateToProps, mapDispatchToProps)(RentList));
