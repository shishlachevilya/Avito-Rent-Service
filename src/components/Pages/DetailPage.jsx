import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import WithRentService from '../Hoc';
import { bindActionCreators } from 'redux';
import { getDetailInfo } from '../../actions';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './slider.scss';

const DetailPage = ({ id, isLoading, detailItem, rentService, getDetailInfo }) => {

  useEffect(() => {
    rentService.getItemInfo(id).then((body) => getDetailInfo(body));
  }, [id, rentService, getDetailInfo]);

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <div>
      { detailItem.map((item) => {
        return (
          <div key={item.id}>
            <div>{ item.title }</div>
            <div>{ item.address }</div>
            <div>{ item.description }</div>
            <div>{ item.price }</div>
            <div>{ item.sellerName }</div>
            <AwesomeSlider className='slider'>
              {item.images.map((img, index) => {
                return (
                  <div key={index} data-src={img} />
                )
              })}
            </AwesomeSlider>
          </div>
        )
      }) }

      <br/>
      <br/>
      <br/>

      <Link to='/'>
        back to main page
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    detailItem: state.detailItem
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDetailInfo }, dispatch);
};


export default WithRentService()(connect(mapStateToProps, mapDispatchToProps)(DetailPage));
