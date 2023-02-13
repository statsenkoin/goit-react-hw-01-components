import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from 'js/randomColor';

export default function StatisticsData({ id, label, percentage }) {
  return (
    <li
      className={css.item}
      style={{ backgroundColor: getRandomHexColor() }}
      key={id}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsData.propType = {
  id: PropTypes.string.isRequired,
  label: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
