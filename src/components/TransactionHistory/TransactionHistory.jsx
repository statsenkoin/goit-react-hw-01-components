import PropTypes from 'prop-types';
import {
  Table,
  Head,
  HeadRow,
  HeadRowItem,
  Body,
  BodyRow,
  BodyRowItem,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <Head>
        <HeadRow>
          <HeadRowItem>Type</HeadRowItem>
          <HeadRowItem>Amount</HeadRowItem>
          <HeadRowItem>Currency</HeadRowItem>
        </HeadRow>
      </Head>
      <Body>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <BodyRow key={id} index={index}>
              <BodyRowItem>{type}</BodyRowItem>
              <BodyRowItem>{amount}</BodyRowItem>
              <BodyRowItem>{currency}</BodyRowItem>
            </BodyRow>
          );
        })}
      </Body>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
