import PropTypes from 'prop-types';
import noImage from 'images/no-image.jpg';
import {
  Card,
  UserDescription,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  Item,
  Label,
  Quantity,
} from 'components/Profile/Profile.styled';

// import css from './Profile.module.css';

export function Profile({ username, tag, location, avatar = noImage, stats }) {
  return (
    <Card>
      <UserDescription>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </UserDescription>

      <StatsList>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </StatsList>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
