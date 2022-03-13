import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../../store/session';

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <Link to='/login' onClick={onLogout}>Logout</Link>;
};

export default LogoutButton;
