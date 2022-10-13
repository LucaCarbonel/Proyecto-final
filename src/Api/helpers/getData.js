const getData = (data) => {
  return localStorage.getItem(data)
 }
 
export const ID = getData("ID");
