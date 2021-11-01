import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    console.log(typeof planetName);

    return (
      <div key={ planetName } data-testid="planet-card">
        <div data-testid="planet-name">{planetName}</div>
        <img src={ `${planetImage}` } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
