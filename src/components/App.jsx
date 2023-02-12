import user from '../json/user.json';
import Profile from './Profile/Profile';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 20,
//   color: '#010101',
// }}
