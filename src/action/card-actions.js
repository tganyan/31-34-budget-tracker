export const create = ({ content, categoryId }) => {
  return {
    type: 'CARD_CREATE',
    payload: {
      content,
      categoryId,
      id: Math.random(),
      timestamp: new Date(),
    },
  };
};

export const update = (card) => {
  return {
    type: 'CARD_UPDATE',
    payload: card,
  };
};

export const remove = (card) => {
  return {
    type: 'CARD_DESTROY',
    payload: card,
  };
};
