export const checkCart = (id, cartData) => {
  const checkItem = cartData.filter((item) => item.id.includes(id));
  if (checkItem && checkItem.length) return true;
  return false;
};
