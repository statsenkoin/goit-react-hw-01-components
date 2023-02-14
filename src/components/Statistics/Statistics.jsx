import PropTypes from 'prop-types';
import {
  Card,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

// import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <Card>
      <Title>{title && title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Card>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
