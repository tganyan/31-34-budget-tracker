export const create = ({ title }) => {
  return {
    type: 'CATEGORY_CREATE',
    payload: {
      id: Math.random(),
      title,
      createdOn: new Date(),
    },
  };
};

export const update = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const remove = (category) => {
  return {
    type: 'CATEGORY_DESTROY',
    payload: category,
  };
};
