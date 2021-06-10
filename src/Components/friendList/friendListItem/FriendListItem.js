import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "./defaultAvatar.png";
import styles from '../FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
     
      <span className={
              isOnline ? styles.statusOnline : styles.statusOffline
            }></span>

      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
  name: "User name",
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
