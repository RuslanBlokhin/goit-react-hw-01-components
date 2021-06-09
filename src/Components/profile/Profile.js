import React from "react";
import PropTypes from "prop-types";
// import defaultAvatar from "./defaultAvatar.png";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          width="200"
          src={user.avatar}
          alt="Аватар пользователя"
          className="avatar"
        />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.defaultProps = {
//   user: PropTypes.shape({ avatar: defaultAvatar }), <=== Наверное, так нельзя делать??
// };

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
