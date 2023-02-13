import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function StatisticsData({ id, label, percentage }) {
  return (
    <li className={css.item} key={id}>
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
