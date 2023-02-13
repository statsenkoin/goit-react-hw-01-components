import PropTypes from 'prop-types';
import StatisticsData from './StatisticsData';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title && title}</h2>

      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <StatisticsData
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propType = {
  title: PropTypes.string.isRequired,
};
