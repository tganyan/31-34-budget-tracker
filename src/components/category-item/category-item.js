import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryForm from '../category-form/category-form';
import CardItem from '../card-item/card-item';
import CardForm from '../card-form/card-form';
import * as cardActions from '../../action/card-actions';

import './category-item.scss';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  handleRemove = (event) => {
    event.preventDefault();
    this.props.onRemove(this.props.category);
  };

  handleUpdateRequest = () => {
    this.setState({ editing: true });
  };

  handleUpdateCatAndHideForm = (category) => {
    this.setState({ editing: false });
    this.props.onUpdate(category);
  };

  render() {

    const {
      cards,
      cardCreate,
      category,
      key,
    } = this.props;

    const categoryCards = cards[category.id];

    const editingJSX = <CategoryForm category={category} onComplete={this.handleUpdateCatAndHideForm}/>;
    const renderJSX = this.state.editing ? editingJSX :
      <React.Fragment>
        <h3 className='category-title'>{category.title}</h3>
        <button onClick={this.handleRemove} className='category-remove'>X</button>
      </React.Fragment>
    return (
      <div key={key} className='category-item'>
        <div onDoubleClick={this.handleUpdateRequest} className='category-title-container'>
          { renderJSX }
        </div>
        {categoryCards.map((currentCard, index) =>
          <CardItem
            key={index}
            card={currentCard}
            cardCreate={cardCreate}
            cardRemove={this.props.cardRemove}
            cardUpdate={this.props.cardUpdate}
          />)}
        <h5 className='card-add-cta'>Add cards</h5>
        <CardForm onComplete={this.props.cardCreate} category={this.props.category}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    cards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: (card) => {
      dispatch(cardActions.create(card));
    },
    cardRemove: (card) => {
      dispatch(cardActions.remove(card));
    },
    cardUpdate: (card) => {
      dispatch(cardActions.update(card));
    },
  };
};

CategoryItem.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
