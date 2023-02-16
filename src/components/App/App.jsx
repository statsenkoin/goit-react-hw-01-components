import user from 'dataBase/user.json';
import data from 'dataBase/data.json';
import friends from 'dataBase/friends.json';
import transactions from 'dataBase/transactions.json';

import { AppWrapper } from './App.styled';
import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';

export const App = () => {
  return (
    <AppWrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}></TransactionHistory>
    </AppWrapper>
  );
};
