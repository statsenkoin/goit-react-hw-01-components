import user from '../json/user.json';
import data from '../json/data.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
