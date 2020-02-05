import phones from "./mockPhones";

export const fetchPhones = async offset => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phones.slice(0, offset));
    }, 1000);
  });
};

export const loadMorePhones = async offset => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (offset === 9) {
        reject("No more phones available");
      }
      resolve(phones.slice(offset));
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
