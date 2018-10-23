import React from 'react';
import PropTypes from 'prop-types';
import CategoryUpdateForm from './category-item-update';

class CategoryItem extends React.Component {
  handleRemove = (event) => {
    event.preventDefault();
    this.props.onRemove(this.props.category);
  };

  // handleUpdate = (event) => {
  //   event.preventDefault();
  //   return {
  //     <CategoryUpdateForm
  //       onUpdate={this.props.onUpdate}
  //     />
  //   }
  // };

  // handleChange = (event) => {
  //   const { value } = event.target;
  //   this.setState({title: value});
  // };

  // initialUpdateView = () => {
  //   return {
  //   <p onClick={this.clickedUpdateView}>{this.props.category.title}</p>
  // }
  // };

  // clickedUpdateView = () => {
  //   return {
  //     <input
  //       type="text"
  //       name='title'
  //       placeholder={this.props.category.title}
  //       value={this.props.category.title}
  //       onChange={this.handleChange}
  //     />
  //   }
  // }

  render() {

    return (
      <div key={this.props.key}>
        <p>{this.props.category.title}</p>
        <button onClick={this.handleRemove}>X</button>
        <CategoryUpdateForm
          onUpdate={this.props.onUpdate}
          category={this.props.category}
        />
      </div>
    );
  }
}

CategoryItem.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
}

export default CategoryItem;
