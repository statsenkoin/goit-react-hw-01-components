import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ avatar, name, id, isOnline }) => {
        return (
          <Item key={id}>
            <Status status={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
