import phones from "./mockPhones";

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phones);
    }, 1000);
  });
};

export const loadMorePhones = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phones);
    }, 1000);
  });
};

export const fetchPhoneById = async id => {
  const phone = phones.find(phone => phone.id === id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phone);
    }, 1000);
  });
};
