import React from 'react';
import PropTypes from 'prop-types';

import './card-form.scss';

const emptyState = {
  content: '',
};

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.card || emptyState;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({content: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const categoryId = this.props.category ? this.props.category.id : this.props.card.categoryId;
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
  }

  render() {
    const buttonText = this.props.card ? 'Update' : 'Create';
    return (
      <form onSubmit={this.handleSubmit} className='card-form'>
        <input
          type="text"
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText} card</button>
      </form>
    );
  }
}

CardForm.propTypes = {
  category: PropTypes.object,
  id: PropTypes.number,
  card: PropTypes.object,
  onComplete: PropTypes.func,
}

export default CardForm;
