import PropTypes from 'prop-types';
import StatisticsData from './StatisticsData';
// import css from './Statistics.module.css';

export default function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
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
  title: PropTypes.string,
};
