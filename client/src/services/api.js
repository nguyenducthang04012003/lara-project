export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/page1");
  return res.json();
};
