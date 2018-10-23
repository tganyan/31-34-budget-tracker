import React from 'react';

const emptyState = {
  title: '',
};

class CategoryUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.category || emptyState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.state);
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({title: value});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name='title'
          placeholder='title'
          value={this.props.title}
          onChange={this.handleChange}
        />
        <button type='submit'>Update Category</button>
      </form>
    );
  }
}

export default CategoryUpdateForm;
