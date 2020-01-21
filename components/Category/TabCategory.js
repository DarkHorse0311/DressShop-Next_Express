import PropTypes from 'prop-types';

const TabCategory = ({ active, onChangeTab }) => {
  return (
    <div>
      <ul className="tab">
        <li
          className={`${active === 'men' ? 'active' : ''}`}
          onClick={() => onChangeTab('men')}
        >
          Men
        </li>
        <li
          className={`${active === 'women' ? 'active' : ''}`}
          onClick={() => onChangeTab('women')}
        >
          Women
        </li>
      </ul>
      <style>
        {`

        .tab {
            display: flex;
            align-items: center;
        }

        .tab li {
            padding: 1rem 5rem;
            text-align: center;
            font-size: 2.2rem;
            border-bottom: 2px solid transparent;
            cursor: pointer;
        }

        .tab .active {
            border-bottom: 2px solid var(--color-primary);
            color: var(--color-primary);
            font-weight: 600;
        }
            
            `}
      </style>
    </div>
  );
};

Tab.propTypes = {
  onChangeTab: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired
};

export default TabCategory;
