import user from 'dataBase/user.json';
import data from 'dataBase/data.json';

import { AppContainer } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

// import css from './App.module.css';
// import { AppContainer } from 'components';

export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </AppContainer>
  );
};
