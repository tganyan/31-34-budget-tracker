import React from 'react';
import PropTypes from 'prop-types';

import './category-form.scss';

const emptyState = {
  title: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.category || emptyState;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({title: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form onSubmit={this.handleSubmit} className='category-form'>
        <input
          type="text"
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText} Category</button>
      </form>
    )
  }
};

CategoryForm.propTypes = {
  category: PropTypes.object,
  onComplete: PropTypes.func,
};

export default CategoryForm;
