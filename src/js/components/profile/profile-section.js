import React from 'react';

import EmailModal from './email-modal';

const ProfileSection = () => {
  return (
    <div id="profile" className="padding-all">
      <div className="profile-box">
        <img src="https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/12806188_555536864614133_6823241373123168007_n.jpg?oh=eb50e08057efabe3746ea43778a7156c&oe=57C52AAF" className="avatar" />
        <div className="user-info">
          <h2>Nate Anderson</h2>
          <label className="tag">Teammate</label>
          <a>nate@modyo.com</a>
          <p>Last activity 7 minutes ago.</p>
          <button href="#" className="big-button" data-toggle="modal" data-target="#emailModal">
            <i className="ion-ios-email-outline"></i> Message
          </button>
          <button href="#" className="big-button">
            <i className="ion-gear-b"></i>
          </button>
        </div>
      </div>

      <EmailModal updateActivities={this.props.updateActivities} />

    </div>
  );
}

export default ProfileSection;
