import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';

const TopNav = () => {
  return (
    <div className="topNav">
      <div>
      <NotificationsIcon  className="icon-not"/>
      </div>
      <div>
        <LanguageIcon  className="icon-lang"/>
        <p>en</p>
      </div>
    </div>
  );
};

export default TopNav;
