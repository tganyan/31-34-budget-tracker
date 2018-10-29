const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  let updatedState = null;
  let categoryId = null;
  let categoryCards = null;
  let updatedCards = null;

  switch (type) {
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_DESTROY':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE':
      categoryId = payload.categoryId;
      categoryCards = state[categoryId];
      updatedCards = [...categoryCards, payload];
      return { ...state, [categoryId]: updatedCards };
    case 'CARD_DESTROY':
      categoryId = payload.categoryId;
      categoryCards = state[categoryId];
      updatedCards = categoryCards.filter(currentCard => currentCard.id !== payload.id);
      return { ...state, [categoryId]: updatedCards };
    case 'CARD_UPDATE':
      categoryId = payload.categoryId;
      categoryCards = state[categoryId];
      updatedCards = categoryCards.map((currentCard) => {
        return currentCard.id === payload.id ? payload : currentCard;
      });
      return { ...state, [categoryId]: updatedCards };
    default:
      return state;
  }
};
