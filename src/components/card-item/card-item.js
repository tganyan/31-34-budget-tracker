import React from 'react';
import PropTypes from 'prop-types';
import CardForm from '../card-form/card-form';

import './card-item.scss';

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  handleRemove = (event) => {
    event.preventDefault();
    this.props.cardRemove(this.props.card);
  };
  handleUpdateRequest = () => {
    this.setState({ editing: true });
  };

  handleUpdateCardAndHideForm = (card) => {
    this.setState({ editing: false });
    this.props.cardUpdate(card);
  };

  render() {

    const titleStyles = {
      display: 'inline'
    }
    const editingJSX =  <CardForm
      onComplete={this.handleUpdateCardAndHideForm}
      card={this.props.card}
    />;
    const renderJSX = this.state.editing ? editingJSX :
      <React.Fragment>
        <p style={titleStyles}>{this.props.card.content}</p>
        <button onClick={this.handleRemove} className='card-remove'>X</button>
      </React.Fragment>;
    return (
      <div key={this.props.key}>
        <div onDoubleClick={this.handleUpdateRequest} className='card-item'>
          { renderJSX }
        </div>

      </div>
    );
  }
}

CardItem.propTypes = {
  cardRemove: PropTypes.func,
  cardUpdate: PropTypes.func,
  card: PropTypes.object,
  key: PropTypes.number,
}

export default CardItem;
