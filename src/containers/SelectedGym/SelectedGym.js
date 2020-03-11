import React from 'react';
import Header from '../../components/Header/Header';
import LargeRoundedButton from '../../components/Buttons/LargeRoundedButton/LargeRoundedButton';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './SelectedGym.module.css';

const SelectedGym = props => {
  return (
    <Auxiliary>
      <Header heading={'Selected Gyms'} />
      <h3 className={classes.gymNameStyling}>{props.selectedGymName}</h3>
      <LargeRoundedButton name={'Add Another Gym'} to={'/'} />
      <LargeRoundedButton name={'Clear'} to={''} />
      <LargeRoundedButton name={'Continue'} to={'/calendar'} />
    </Auxiliary>
  );
};

export default SelectedGym;
